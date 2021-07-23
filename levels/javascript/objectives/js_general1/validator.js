module.exports = helper => {
  if (helper.getNormalizedInput('one') !== 'true') {
    return helper.fail(`
      The answer to the first question is "true" - JavaScript can be used in
      all kinds of ways. You can build mobile apps, games, web sites, and many
      other things with JavaScript.
    `);
  }

  if (helper.getNormalizedInput('two').indexOf('browser') < 0) {
    return helper.fail(`
      The second answer needs help. JavaScript is still used today in the same 
      place it started, in Google Chrome, Microsoft Edge, and Firefox, which are
      all called "web _______". The answer starts with the letter "b".
    `);
  }

  if (helper.getNormalizedInput('three').indexOf('mozilla') < 0) {
    return helper.fail(`
      The third answer is the "M" of MDN, which is linked in the help
      section of this objective. It sounds like "Godzilla".
    `);
  }

  helper.success(`Woo! You got it. I hope you're excited to learn JavaScript!`);
};
