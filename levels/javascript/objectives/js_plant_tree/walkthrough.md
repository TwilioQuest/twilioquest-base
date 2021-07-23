<%
const worldState = levelState.javascriptWorldState;
%>

# Plant a Tree!

You can [support reforestation efforts in Australia](https://twil.io/tq-trees) by playing TwilioQuest. For the first 10,000 players who complete this objective, Twilio will donate $1.00 to plant a tree. So far, TwilioQuest players have planted <%= worldState.southWing.planters.treeData.current ? "\`" + worldState.southWing.planters.treeData.current + "\`" : "thousands of" %> trees!

All you need to do to plant one more is click *HACK*.

## Plant More Trees!

Scattered throughout the game, there are more chests like this one that enable you to plant trees. See if you can find them all!