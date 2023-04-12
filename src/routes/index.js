const { Router } = require("express");

const wordsRouter = require("./words.routes");

const routes = Router();

routes.use('/words', wordsRouter);


module.exports= routes;