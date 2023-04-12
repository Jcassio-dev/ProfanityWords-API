class WordsController {
    create(request, response){
        const {text} = request.body;

        if(!text){
            throw new AppError("");
        }

        return response.status(201).json({text});
    }
}

module.exports = WordsController;