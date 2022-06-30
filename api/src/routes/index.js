const { Router } = require("express");
const personajes = require("./personajes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", personajes); // api/marvel/*

module.exports = router;
