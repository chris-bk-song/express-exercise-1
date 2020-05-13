const express = require('express');
const app = express();
const port = 8000;

// Routing refers to how an application's endpoints (URIs) respond to client requests
// Routing structure >>>>>>>>> app.METHOD(PATH, HANDLER)

// App routes to root and print inspiring message to the browser
app.get('/', function (req, res) {
  res.send('You are great person!')
});

// creates message to legal page route (http://localhost:8000/legal)
app.get('/legal', function (req, res) {
  res.send('You are looking at the legal terms page')
});

// creates message to about page route (http://localhost:8000/about)
app.get('/about', function (req, res) {
  res.send('You are looking at the site info page')
});

// creates message to contact page route (http://localhost:8000/contact)
app.get('/contact', function (req, res) {
  res.send('You are looking at the contact information page')
});

// .listen is used to tell the express server that you created where to 
// listen and what to say when it gets a request 
app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`));