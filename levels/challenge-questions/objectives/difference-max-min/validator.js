const assert = require("assert");

module.exports = async function (helper) {
  // test harness
  // look up code in the player's quest ide
  // eval quest ide code
  // run assertions on it
  console.log(helper.world);
  console.log(helper.world.getQuestIdeUserCode("difference-max-min"));
};
