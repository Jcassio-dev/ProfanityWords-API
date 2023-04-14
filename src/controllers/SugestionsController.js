const { request } = require('express');
const knex = require('../database/knex');
const AppError = require("../utils/AppError")

class SugestionsController {
    async create(request, response){
        const {title} = request.body;

        const sugestionAlredyExistsInSugestionsTable = await knex("sugestions").where({title}).first();
        const sugestionAlredyExistsInWordsTable = await knex("words").where({title}).first();

        if(sugestionAlredyExistsInSugestionsTable){
            throw new AppError(`${title} já está inclusa na lista de sugestões.`);
        }
        if(sugestionAlredyExistsInWordsTable){
            throw new AppError(`${title} já está inclusa na lista de palavrões.`);
        }

        await knex("sugestions").insert({
            title
        })

        return response.status(201).json("Palavrão incluído");
    }

    async index(request, response){
        const {title} = request.query;
        
        const sugestions = await knex("sugestions").whereLike("title", `%${title}%`).orderBy("title");
 
        return response.json(sugestions);
    }

    async delete(request, response){
        const sugestions = await knex("sugestions").delete();

        return response.json("Sugestões limpas")
    }
}

module.exports = SugestionsController;