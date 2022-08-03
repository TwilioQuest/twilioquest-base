const assert = require("assert");

const ARRAY_ELEMENT_DIFFERENT_ERROR_MESSAGE =
  "One or more array elements are different or have different types.";
const createDefaultErrorMessage = (expected, input, testResult, helper) => {
  const expectedFormatted = helper.formatByType(expected);
  const inputFormatted = helper.formatByType(input);
  const testResultFormatted = helper.formatByType(testResult);

  return `Expected ${expectedFormatted} from input ${inputFormatted}, but received ${testResultFormatted}.`;
};

const assertTestCase = (testFunction, helper) => (input, expected) => {
  const testResult = testFunction(input);

  // Checks for 'value' equality. This should only be true if both are 'Pure Ducktypium!'
  const areEqualStrings = Object.is(
    String(testResult).toLowerCase(),
    String(expected).toLowerCase()
  );

  // Checks for equal types, lengths, and element values
  const areEqualArrays =
    Array.isArray(expected) &&
    Array.isArray(testResult) &&
    helper.areArrayContentsEqual(
      expected,
      testResult,
      (element, otherElement) => {
        if (!Object.is(element, otherElement))
          assert.fail(ARRAY_ELEMENT_DIFFERENT_ERROR_MESSAGE);

        return true;
      }
    );

  if (!areEqualStrings && !areEqualArrays) {
    assert.fail(createDefaultErrorMessage(expected, input, testResult, helper));
  }
};

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["flattenArray"],
      "flatten-array"
    );

    assert(context.flattenArray, "The function flattenArray is not defined!");

    const test = assertTestCase(context.flattenArray, helper);

    test([], "Pure Ducktypium!");
    test([1, "two", 3, "four"], [1, "two", 3, "four"]);
    test([1, 3, 3, 7, ["legacy wuz here"]], [1, 3, 3, 7, "legacy wuz here"]);
    test(
      ["python", ["javascript", ["api", ["messaging"]]]],
      ["python", "javascript", "api", "messaging"]
    );
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
