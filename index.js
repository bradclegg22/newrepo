const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/public/static.html'));
});
  app.get('/calculateRate', calculateRate);
  app.listen(PORT, function() {
  console.log('Node app is running on port', PORT);
});

  function calculateRate (req, res)
{
    
}