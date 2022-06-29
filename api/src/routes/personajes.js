const { Router } = require("express");
const express = require("express");
const { Personajes } = require("../db");
const axios = require("axios");
require("dotenv").config();

const router = Router();
router.use(express.json());
const cors = require("cors");

//!-----traer personajes
router.get("/personajes", async (req, res) => {
  console.log("ddddddddddddddddddddddddddddd");
  try {
    //
    const apiURL = await axios.get(`https://rickandmortyapi.com/api/character`);
    //
    res.status(200).json(apiURL);
  } catch (error) {
    //
    res.send(error);
  }
});

module.exports = router;
