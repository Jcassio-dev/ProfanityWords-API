class WordsController {
    create(request, response){
        const {text} = request.body;

        return response.json(text);
    }
}

module.exports = WordsController;