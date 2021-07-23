<%
const worldState = levelState.javascriptWorldState;
%>

<% if (worldState.room1.passwordFound) { %>

# Password, Please

After a series of trials, you discovered that the laser password is `PEW PEW PEW!` - enter the password in the text field on the right and click *HACK*. For science!

<% } else { %>

# Get the password first!

You won't be able to reboot the laser without a **special password**. To get the password, **talk to the lead scientist** (you passed by her as you entered the room). She will point you in the right direction!

<% } %>
