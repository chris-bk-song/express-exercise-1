const express = require('express');
const app = express();
const port = 8000;

// Routing refers to how an application's endpoints (URIs) respond to client requests
// Routing structure >>>>>>>>> app.METHOD(PATH, HANDLER)

// App routes to root and print inspiring message to the browser
app.get('/', function (req, res) {
  res.send(`
  <!DOCTYPE html>
  <html>
  <body>
  <h1>You are looking GREAT today!</h1>
  <a href="http://localhost:8000/legal">Legal Page</a>
  <br>
  <a href="http://localhost:8000/about">About Page</a>
  <br>
  <a href="http://localhost:8000/contact">Contact Page</a>
  </body>
  </html>
  `)
});

// creates message to legal page route (http://localhost:8000/legal)
app.get('/legal', function (req, res) {
  res.send(`
  <!DOCTYPE html>
  <html>
  <body>
  <h1>This is Legal Terms page</h1>
  <a href="http://localhost:8000">Back to Home Page</a>
  <br>
  <a href="http://localhost:8000/about">About Page</a>
  <br>
  <a href="http://localhost:8000/contact">Contact Page</a>
  </body>
  </html>
  `)
});

// creates message to about page route (http://localhost:8000/about)
app.get('/about', function (req, res) {
  res.send(`
  <!DOCTYPE html>
  <html>
  <body>
  <h1>This is About Page</h1>
  <a href="http://localhost:8000">Back to Home Page</a>
  <br>
  <a href="http://localhost:8000/legal">Legal Page</a>
  <br>
  <a href="http://localhost:8000/contact">Contact Page</a>
  </body>
  </html>
  `);
});

// creates message to contact page route (http://localhost:8000/contact)
app.get('/contact', function (req, res) {
  res.send(`
  <!DOCTYPE html>
  <html>
  <body>
  <h1>This is Contact Page</h1>
  <a href="http://localhost:8000">Back to Home Page</a>
  <br>
  <a href="http://localhost:8000/legal">Legal Page</a>
  <br>
  <a href="http://localhost:8000/about">About Page</a>
  </body>
  </html>
  `)
});

// .listen is used to tell the express server that you created where to 
// listen and what to say when it gets a request 
app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`));