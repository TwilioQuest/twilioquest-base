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
      ["differenceMinMax"],
      "difference-max-min"
    );

    assert(
      context.differenceMinMax,
      "The function differenceMinMax is not defined!"
    );

    const test = assertTestCase(context.differenceMinMax);

    test([1, 2, 3, 4, 5], 4);
    test([100, 0], 100);
    test([3.3, 5, -2, 5], 7);
    test([8, 1.2, 5, 9], 7.8);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
