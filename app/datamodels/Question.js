import { customAlphabet } from 'nanoid/non-secure';

export class Question{
    constructor(question, responses) {
        const nanoid = customAlphabet('1234567890abcdef', 10);
        this.id = nanoid();
        this.question = question;
        this.responses = responses;
    }
}
