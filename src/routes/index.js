const { Router } = require("express");

const wordsRouter = require("./words.routes");
const sugestionsRouter = require("./sugestions.routes");

const routes = Router();

routes.use('/words', wordsRouter);
routes.use("/sugestions", sugestionsRouter)


module.exports= routes;