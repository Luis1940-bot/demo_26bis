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
  try {
    //

    const apiURL = await axios.get(`https://rickandmortyapi.com/api/character`);
    //
    res.status(200).json(apiURL.data);
  } catch (error) {
    //
    res.send(error);
  }
});

router.get("/personajes/:id", async (req, res) => {
  try {
    //
    const { id } = req.params;
    const apiURL = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    //
    res.status(200).json(apiURL.data);
  } catch (error) {
    //
    res.send(error);
  }
});
module.exports = router;
