var db = require('./db_conexion.js');
var Medicamento = function () {
}

Medicamento.getMedicamentos = function (result, error) {
    db.query("select * from medicamentos order by id",
        function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Medicamento.getMedicamentoById = function (id, result) {
    console.log("id a buscar: ",id)
    db.query("select * from medicamentos where id ="+id,
        function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Medicamento.getMedicamentoByNombre = function (nombre, result) {
    db.query("select * from medicamentos where lower(nombre) like lower('%"+nombre+"%')",
        function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Medicamento.getMedicamentoByDosis = function (dosis, result) {
    db.query("select * from medicamentos where lower(dosis) like lower('%"+dosis+"%')",
        function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Medicamento.getMedicamentoByPrecio = function (precio, result) {
    db.query("select * from medicamentos where precio = "+precio,
        function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Medicamento.getMedicamentoSearch = function (nombre, result) {
    db.query("select * from medicamentos where nombre like '%"+nombre+"%'",
        function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};



module.exports = Medicamento;