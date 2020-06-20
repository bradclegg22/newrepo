const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.get('/calculateRate', calculateRate);
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  function calculateRate (req, res)
{
    
}