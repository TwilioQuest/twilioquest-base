const assert = require("assert");

const assertTestCase = (testFunction) => (input, expected) => {
  const testResult = testFunction(input);

  assert.strictEqual(
    testResult,
    expected,
    `Expected "${expected}" from input "${input}", but received "${testResult}".`
  );
};

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["sumArray"],
      "sum-array"
    );

    assert(context.sumArray, "The function sumArray is not defined!");

    const test = assertTestCase(context.sumArray);

    test([1, 2, 3], 6);
    test([-1, 0, 1], 0);
    test([1.2, 2.3, 4], 7.5);
    test([1, 1, 2, 3, 5, 8, 13], 33);
    test([], 0);
    test([3], 3);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
