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
      ["removeDuplicateCharacters"],
      "remove-duplicate-characters"
    );

    assert(
      context.removeDuplicateCharacters,
      "The function removeDuplicateCharacters is not defined!"
    );

    const test = assertTestCase(context.removeDuplicateCharacters);

    test("aabbcc", "abc");
    test("aba", "aba");
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
