export class QuizService{
    constructor(quizRepository) {
        this.quizRepository = quizRepository;
    }
    async createQuiz(question){
        await this.quizRepository.postQuiz(question);
    }
    async getAllQuiz(){
        await this.quizRepository.fetchAllQuiz();
    }
}
