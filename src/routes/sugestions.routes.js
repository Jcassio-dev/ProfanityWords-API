const { Router } = require("express");

const SugestionsController = require("../controllers/SugestionsController")

const sugestionsRoutes = Router();
const sugestionsController = new SugestionsController

sugestionsRoutes.post('/', sugestionsController.create)
sugestionsRoutes.get('/', sugestionsController.index)
sugestionsRoutes.delete("/", sugestionsController.delete)

module.exports = sugestionsRoutes;