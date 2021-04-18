var express = require('express');
var router = express.Router();

var medicamentoModel = require('../models/medicamento.js');

/* GET all Medicamentos. */
router.get('/',function(req,res,next){
  medicamentoModel.getMedicamentos(function(err,result){
      console.log('/');
      if(err)//{
          res.json(
              {
                  "response": "Error",
                  "msg": err
              }
          );
          console.log('res ',result);
          res.json(
                result.rows
          );
      //}
  });
});

//Metodo get search Medicamento by id
router.get('/id/:id', function(req, res, next) {
  var id = req.params.id;
  console.log("/medicamento"+ " dato: "+ id);
  medicamentoModel.getMedicamentoById(id,
      function(err,result){
          if(err)
              res.json(
                  {
                      "response": "Error",
                      "msg": err
                  }
              );
              console.log('res ',result);
              res.json(
                  {
                      "response": result,
                      "msg": "200"
                  }
              );
  });
});
//Metodo get search Medicamento by nombre
router.get('/nombre/:nombre', function(req, res, next) {
  var dato = req.params.nombre;
  console.log("/medicamento"+ " dato: "+ dato);
  medicamentoModel.getMedicamentoByNombre(dato,
      function(err,result){
          if(err)
              res.json(
                  {
                      "response": "Error",
                      "msg": err
                  }
              );
              console.log('res ',result);
              res.json(
                  {
                      "response": result,
                      "msg": "200"
                  }
              );
  });
});

//Metodo get search Medicamento by dosis
router.get('/dosis/:dosis', function(req, res, next) {
  var dato = req.params.dosis;
  console.log("/medicamento"+ " dato: "+ dato);
  medicamentoModel.getMedicamentoByDosis(dato,
      function(err,result){
          if(err)
              res.json(
                  {
                      "response": "Error",
                      "msg": err
                  }
              );
              console.log('res ',result);
              res.json(
                  {
                      "response": result,
                      "msg": "200"
                  }
              );
  });
});

//Metodo get search Medicamento by nombre
router.get('/precio/:precio', function(req, res, next) {
  var dato = req.params.precio;
  console.log("/medicamento"+ " dato: "+ dato);
  medicamentoModel.getMedicamentoByPrecio(dato,
      function(err,result){
          if(err)
              res.json(
                  {
                      "response": "Error",
                      "msg": err
                  }
              );
              console.log('res ',result);
              res.json(
                  {
                      "response": result,
                      "msg": "200"
                  }
              );
  });
});


module.exports = router;
