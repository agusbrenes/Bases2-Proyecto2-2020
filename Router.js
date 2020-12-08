// Express
const express = require("express");
const router = express.Router();

//Esquemas
//const Sede = require("./Modelo/Sede");
//const Puesto = require("./Modelo/Puesto");
//const Empleado = require("./Modelo/Empleado");

//Crear Sede
/*router.post("/CrearSede", (req, res) => {
    const data = req.body;

    const newSede = new Sede(data);

    newSede.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

//Buscar Sedes
router.get("/BuscarSedes", (req, res) => {
    Sede.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch(() => {
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        return;
    });
});

//Buscar Sede
router.get("/BuscarSedes/:id", (req, res) => {
    Sede.find({ id: req.params.id})
    .then((data) => {
        res.json(data);
    })
    .catch(() => {
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        return;
    });
});

//Modificar Sede
router.put("/ModificarSede/:id", (req, res) => {
    Sede.updateOne(
        {id: req.params.id},
        {$set: req.body}, (error) => {
            if (error) {
                res.status(500).json({ msg: 'Sorry, internal server errors' });
                return;
            } else {
                return res.json({
                    msg: 'Your data has been modify!!!!!!'
                });
            }
        }) 
});

//Eliminar Sede
router.delete("/EliminarSede/:id", (req, res) => {
    Sede.deleteOne({id: req.params.id}, (error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        } else {
            return res.json({
                msg: 'Your data has been deleted!!!!!!'
            });
        }
    }) 
});

//Crear Puesto
router.post("/CrearPuesto", (req, res) => {
    const data = req.body;

    const newPuesto = new Puesto(data);

    newPuesto.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

//Buscar Puestos
router.get("/BuscarPuestos", (req, res) => {
    Puesto.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch(() => {
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        return;
    });
});

//Buscar Puesto
router.get("/BuscarPuestos/:name", (req, res) => {
    Puesto.find({name: req.params.name })
    .then((data) => {
        res.json(data);
    })
    .catch(() => {
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        return;
    });
});

//Modificar Puesto
router.put("/ModificarPuesto/:name", (req, res) => {
    Puesto.updateOne(
        {name: req.params.name},
        {$set: req.body}, (error) => {
            if (error) {
                res.status(500).json({ msg: 'Sorry, internal server errors' });
                return;
            } else {
                return res.json({
                    msg: 'Your data has been modify!!!!!!'
                });
            }
        }) 
});

//Eliminar Puesto
router.delete("/EliminarPuesto/:name", (req, res) => {
    Puesto.deleteOne({name: req.params.name}, (error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        } else {
            return res.json({
                msg: 'Your data has been deleted!!!!!!'
            });
        }
    }) 
});

//Añadir Empleado
router.post("/NuevoEmpleado", (req, res) => {
    const data = req.body;

    const newEmpleado = new Empleado(data);

    newEmpleado.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

//Buscar Empleados
router.get("/BuscarEmpleados", (req, res) => {
    Empleado.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch(() => {
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        return;
    });
});

//Buscar Empleado
router.get("/BuscarEmpleado/:identification", (req, res) => {
    Empleado.find({identification: req.params.identification })
    .then((data) => {
        res.json(data);
    })
    .catch(() => {
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        return;
    });
});

//Actualizar Empleado
router.put("/ModificarEmpleado/:identification", (req, res) => {
    Empleado.updateOne(
        {identification: req.params.identification},
        {$set: req.body}, (error) => {
            if (error) {
                res.status(500).json({ msg: 'Sorry, internal server errors' });
                return;
            } else {
                return res.json({
                    msg: 'Your data has been modify!!!!!!'
                });
            }
        }) 
});

//Eliminar Empleado
router.delete("/EliminarEmpleado/:identification", (req, res) => {
    Empleado.deleteOne({identification: req.params.identification}, (error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        } else {
            return res.json({
                msg: 'Your data has been deleted!!!!!!'
            });
        }
    }) 
});*/


module.exports = router;