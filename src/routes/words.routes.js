const { Router } = require("express");

const WordsController = require("../controllers/WordsController")

const wordsRoutes = Router();
const wordsController = new WordsController

wordsRoutes.post('/', wordsController.create)
wordsRoutes.get('/', wordsController.index)

module.exports = wordsRoutes;