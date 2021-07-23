const USERNAME = 'admin';
const WRONG_NAME = 1337; // Hmm, is this right?

function formatLaserAuth() {
  // Hmm, the line below seems wrong also...
  const formattedString = USERNAME + ':' + 'cupcakes';
  return formattedString;
}

// This tests your code, no need to change anything below!
console.log('Expected output : "admin:PEW PEW PEW!"');
console.log(`Your output     : "${formatLaserAuth()}"`);
