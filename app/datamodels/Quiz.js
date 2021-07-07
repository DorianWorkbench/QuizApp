import { customAlphabet } from 'nanoid/non-secure';

export class Quiz{

    constructor(author, questions) {
        const nanoid = customAlphabet('1234567890abcdef', 10);
        this.id = nanoid();
        this.author = author;
        this.questions = questions;
    }
}
