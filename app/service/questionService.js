export class questionService{
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async createQuestion(question){
        await this.questionRepository.postQuestion(question)
    }
}
