console.log("app.js is loaded");

// Verbose Console logs.
let verbose = true;

// Declare variables for DOM elements
const showDB = document.getElementById("showDB");

// Fetch data from local json db store to variable
let payload = "";

fetch('../db.json')
  .then(response => response.json())
  .then(json => {
    (verbose) ? console.log(json): "";
    payload = json;
  })
  // display db info to page.
  .then(() => {
    showDB.innerHTML = payload;
  });

