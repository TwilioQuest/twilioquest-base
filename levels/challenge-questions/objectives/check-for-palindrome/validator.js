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
      ["isPalindrome"],
      "check-for-palindrome"
    );

    assert(
      context.isPalindrome,
      "The function isPalindrome is not defined!"
    );

    const test = assertTestCase(context.isPalindrome);

    test("tacocat", true);
    test("", true);
    test("heLLo", false);
    test("Never odd or even", true);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
