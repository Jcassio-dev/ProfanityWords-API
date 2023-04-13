const knex = require('../database/knex');
const AppError = require("../utils/AppError")

class WordsController {
    async create(request, response){
        const {title} = request.body;

        const wordAlredyExists = await knex("words").where({title}).first();

        if(wordAlredyExists){
            throw new AppError("Palavrão já está incluso na lista");
        }

        await knex("words").insert({
            title
        })

        return response.status(201).json("Palavrão incluído");
    }

    async index(request, response){
        const {title} = request.query;
        
        const words = await knex("words").whereLike("title", `%${title}%`).orderBy("name");
 
        return response.json(words);
    }
}

module.exports = WordsController;