class WordsController {
    create(request, response){
        const {text} = request.body;

        return response.status(201).json({text});
    }
}

module.exports = WordsController;