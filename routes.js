const express = require('express');
const router = express.Router();
const app = express();
var exec = require('child_process').exec;


router.get('/', function (req,res) {
  console.log('peticion GET');
  res.sendFile(__dirname + '/public/templates/index.html');
})

router.get('/Une', function (req,res) {
  console.log('peticion GET /Une');
  res.sendFile(__dirname + '/public/templates/Une.html');
})

router.get('/Imbanaco', function (req,res) {
  console.log('peticion GET /Imbanaco');
  res.sendFile(__dirname + '/public/templates/Imbanaco.html');
})

router.get('/Control', function (req,res) {
  console.log('peticion GET /Control');
  res.sendFile(__dirname + '/public/templates/Dispositivos.html');
})


router.post('/Control', function (req,res) {
  console.log('peticion Post /Control');
  console.log(req.body);
  if (req.body.reRaspberry == 'True'){
    console.log('reiniciando rpi');
    const reinicio = 'si';
    // Reboot computer
    shutdown(function(output){
        console.log(output);
    });
    function shutdown(callback){
        exec('sudo /sbin/shutdown -r now', function(error, stdout, stderr){ callback(stdout); });
    }


  }
})




module.exports = router;
