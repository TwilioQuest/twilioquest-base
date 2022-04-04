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
      ["reverseSentence"],
      "reverse-words"
    );

    assert(
      context.reverseSentence,
      "The function reverseSentence is not defined!"
    );

    const test = assertTestCase(context.reverseSentence);

    test("You did it!", "It did you!");
    test("Apple fell far from the tree.", "Tree the from far fell apple.");
    test("Tacos in Mexico are tasty.", "Tasty are Mexico in tacos.");
    test("Hurray!", "Hurray!");
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
