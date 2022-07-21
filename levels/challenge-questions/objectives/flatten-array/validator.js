const assert = require("assert");

const assertTestCase = (testFunction) => (input, expected) => {
  const testResult = testFunction(input);

  assert.deepStrictEqual(
    testResult,
    expected,
    `Expected "${expected}" from input "[${input}]", but received "${testResult}".`
  );
};

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["flattenArray"],
      "flatten-array"
    );

    assert(
      context.flattenArray,
      "The function flattenArray is not defined!"
    );

    const test = assertTestCase(context.flattenArray);

    test([], "Pure Ducktypium!");
    test([1, "two", 3, "four"], [1, "two", 3, "four"]);
    test([1, 3, 3, 7, ["legacy wuz here"]], [1, 3, 3, 7, "legacy wuz here"]);
    test(["python", ["javascript", ["api", ["messaging"]]]], ["python", "javascript", "api", "messaging"]);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
