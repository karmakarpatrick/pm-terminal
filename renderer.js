// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
alert('hi!! This is my first app on electron. We will be building something good.');

const path = require("path");
const {db, order} = require(path.resolve('js/cpu'));