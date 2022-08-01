const assert = require("assert");

const wrapInBracketsIfArray = (value) =>
  Array.isArray(value) ? `[${value}]` : String(value);

const ARRAY_ELEMENT_DIFFERENT_ERROR_MESSAGE =
  "One or more array elements are different or have different types.";
const DEFAULT_ERROR_MESSAGE = (expected, input, testResult) => {
  const expectedFormatted = wrapInBracketsIfArray(expected);
  const inputFormatted = wrapInBracketsIfArray(input);
  const testResultFormatted = wrapInBracketsIfArray(testResult);

  return `Expected "${expectedFormatted}" from input "${inputFormatted}", but received "${testResultFormatted}".`;
};

const assertTestCase = (testFunction) => (input, expected) => {
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
    testResult.length === expected.length &&
    expected.every((element, idx) => {
      if (!Object.is(element, testResult[idx]))
        assert.fail(ARRAY_ELEMENT_DIFFERENT_ERROR_MESSAGE);

      return true;
    });

  if (!areEqualStrings && !areEqualArrays)
    assert.fail(DEFAULT_ERROR_MESSAGE(expected, input, testResult));
};

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["flattenArray"],
      "flatten-array"
    );

    assert(context.flattenArray, "The function flattenArray is not defined!");

    const test = assertTestCase(context.flattenArray);

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
