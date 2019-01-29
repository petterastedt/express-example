const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of /public available
// For example, to get `/public/images/unsplash.jpeg`
//   => http://localhost:3000/images/unsplash.jpeg (without `public`)
app.use(express.static('public'));

// Our first Route: GET http://localhost:3000/
app.get('/', (request, response) => {
  console.log(__dirname + '/views/home-page.html');
  // response.send is the HTML that is sent
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/project1', (request, response, next) => {
  response.sendFile(__dirname + '/views/project1.html');
});

// Starts the server
app.listen(3000, () => {
  console.log('My first app ready:  http://locahost:3000!')
});