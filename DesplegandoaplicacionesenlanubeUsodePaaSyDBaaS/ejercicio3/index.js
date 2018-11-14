var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Jódar y jaen');
});
app.put('/:persona1/:persona2',function(req, res){
	res.send(req.params.persona1+" y "+req.params.persona2+" se van de vacaciones juntos");
});
app.listen(3000, function () {
  console.log('la aplicación express ya se ha iniciado.');
});

module.exports = app