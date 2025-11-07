// Import required modules
const connect = require("connect");
const url = require("url");

// Create a new connect app
const app = connect();

// This function handles all incoming requests
const calculate = (req, res) => {
  // Parse the URL to get the query parameters
  const queryString = url.parse(req.url, true).query;

  // Get the values for method, x, and y from the URL
  const method = queryString.method;
  const x = parseFloat(queryString.x);
  const y = parseFloat(queryString.y);

  let result = 0;
  let operator = "";
  let output = "";

  // Determine which math operation to perform
  if (method === "add") {
    result = x + y;
    operator = "+";
  } else if (method === "subtract") {
    result = x - y;
    operator = "-";
  } else if (method === "multiply") {
    result = x *  y;
    operator = "*";
  } else if (method === "divide") {
    result = x / y;
    operator = "/";
  } else {
    // Handle invalid methods
    output =
      'Error: Invalid method. Please use "add", "subtract", "multiply", or "divide".';
    res.end(output);
    return;
  }

  // Format the output string in the required format
  output = `${x} ${operator} ${y} = ${result}`;

  // Send the result back to the browser
  res.end(output);
};

// Tell the app to use our calculate function
app.use(calculate);

// Start the server and have it listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
