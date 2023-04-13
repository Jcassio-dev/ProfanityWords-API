const { request } = require('express');
const knex = require('../database/knex');
const AppError = require("../utils/AppError")

class SugestionsController {
    async create(request, response){
        const {title} = request.body;

        const sugestionAlredyExists = await knex("sugestions").where({title}).first();

        if(sugestionAlredyExists){
            throw new AppError("Palavrão já está incluso na lista");
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