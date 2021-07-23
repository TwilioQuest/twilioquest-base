<%
const worldState = levelState.javascriptWorldState;
%>

# An Incendiary Revelation

The TwilioQuest research team is about to attempt a groundbreaking experiment. Using four prototype molecular stabilization beams, they will be the first scientists to observe **ducktypium**, the mysterious source of JavaScript's power, in a solid form! For the experiment to continue, however, **the malfunctioning fourth laser beam must be rebooted**.

<% if (worldState.room1.passwordFound) { %>

## Reboot the malfunctioning stasis beam

After a series of trials, you discovered that the laser password is `PEW PEW PEW!` - enter the password in the text field on the right and click *HACK*. For science!

<% } else { %>

It looks like you need a password to reboot the laser. **Talk to the lead scientist** (you passed by her as you entered the room) to get the password!

<% } %>
