const { Router } = require("express");
const personajes = require("../models/Personajes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/marvel", personajes); // api/recipe/*

module.exports = router;
