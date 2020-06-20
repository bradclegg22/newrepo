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

  function calculateRate(request, response)
{
    const type = request.query.type;
    const weight = Number(request.query.weight);
    
    computeOperation(response, type, weight);
}

function computeOperation(res, type, weight) {
    let result = 0;
    
    if (type == "letterStamped"){
        if(weight <= 1) {
            result = "0.55";
        }
        else if (weight <= 2){
            result = "0.70";
        }
        else if (weight <= 3) {
            result = "0.85";
        }
        else if (weight <= 3.5) {
            reslut = "1.00";
        }
        else {
            result = "1.00";
        }
    }
    
    else if (type == "letterMetered") {
    if(weight <= 1){
        result = "0.50";
    }
    else if(weight <= 2){
        result = "0.65";
    }
    else if(weight <= 3){
        result = "0.80";
    }
    else{
        result = "0.95";
    }
  }
    
    else if (type == "largeFlats") {
    if(weight <= 1){
      result = "1.00";
    }
    else if(weight <= 2){
        result = "1.20";
    }
    else if(weight <= 3){
        result = "1.40";
    }
    else if(weight <= 4){
        result = "1.60";
    }
    else if(weight <= 5){
        result = "1.80";
    }
    else if(weight <= 6){
        result = "2.00";
    }
    else if(weight <= 7){
        result = "2.20";
    }
    else if(weight <= 8){
        result = "2.40";
    }
    else if(weight <= 9){
        result = "2.60";
    }
    else if(weight <= 10){
        result = "2.80";
    }
    else if(weight <= 11){
        result = "3.00";
    }
    else if(weight <= 12){
        result = "3.20";
    }
    else{
        result = "3.40";
    }
  }
    
    else if(type == "firstClass") {
        if(weight <= 1){
            result = "3.80";
        }
        else if(weight <= 2) {
            result = "3.80";
        }
        else if(weight <= 3) {
            result = "3.80";
        }
        else if(weight <= 4) {
            result = "3.80";
        }
        else if(weight <= 5) {
            result = "4.60";
        }
        else if(weight <= 6) {
            result = "4.60";
        }
        else if(weight <= 7) {
            result = "4.60";
        }
        else if(weight <= 8) {
            result = "4.60";
        }
        else if(weight <= 9) {
            result = "5.30";
        }
        else if(weight <= 10) {
            result = "5.30";
        }
        else if(weight <= 11) {
            result = "5.30";
        }
        else if(weight <= 12) {
            result = "5.30";
        }
        else if(weight <= 13) {
            result = "5.90";
        }
    }
        
    
    if(type == "letterStamped"){
    type = "Letter(stamped)";
    }
    else if(type == "letterMetered"){
        type = "Letter (metered)";
  }
    else if(type == "largeFlats"){
        type = "Large Envelope(flats)";
  }
    else if(type == "firstClass"){
        type = "First-Class Package Service - Retail";
    }
    else{
        type = "error";
  }

        
    let params = {type: type, weight: weight, result: result};
     res.render('pages/result', params);
}