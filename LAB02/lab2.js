const prompt = require('prompt');

// Define the schema for prompt
const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Please enter ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

// Start the prompt
prompt.start();

prompt.get(schema, function (err, result) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Normalize user input
  const userSelection = result.userSelection.toUpperCase();

  // Generate computer selection
  const random = Math.random();
  let computerSelection = '';
  if (random <= 0.34) {
    computerSelection = 'PAPER';
  } else if (random <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log(`User Selection: ${userSelection}`);
  console.log(`Computer Selection: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('User Wins');
  } else {
    console.log('Computer Wins');
  }
});