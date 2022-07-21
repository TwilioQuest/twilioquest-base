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
      ["balanceBrackets"],
      "balance-brackets"
    );

    assert(
      context.balanceBrackets,
      "The function balanceBrackets is not defined!"
    );

    const test = assertTestCase(context.balanceBrackets);

    test(["{", "}"], true);
    test(["[", "(", "]", ")"], false);
    test([], true);
    test(["{", "[", "}"], false);
    test(["]", "(", ")", "["], false);
    test(["(", ")", "[", "(", "{", "}", ")", "]"], true);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
