
interface IQuestionState {
    question: QuestionState;

    AnswerQuestion(): void;
    CheckAnswer(correctAnswer: boolean): void;
}

export class QuestionState {
    public noAnswer: IQuestionState;
    public hasAnswer: IQuestionState;
    public hasCorrectAnswer: IQuestionState;
    public hasIncorrectAnswer: IQuestionState;

    public currentQuestionState!: IQuestionState;

    constructor() {
        this.noAnswer = new NoAnswerState(this);
        this.hasAnswer = new HasAnswerState(this);
        this.hasCorrectAnswer = new HasCorrectAnswerState(this);
        this.hasIncorrectAnswer = new HasIncorrectAnswerState(this);

        this.setState(this.noAnswer)
    }

    public setState(questionState: IQuestionState) {
        this.currentQuestionState = questionState;
    }

    public getState(): IQuestionState {
        return this.currentQuestionState;
    }
}

export class NoAnswerState implements IQuestionState {
    public question: QuestionState;

    constructor(question: QuestionState) {
        this.question = question;
    }

    AnswerQuestion(): void {
        this.question.setState(this.question.hasAnswer);
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }

    CheckAnswer(correctAnswer: boolean): void {
        this.question.setState(this.question.noAnswer);
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }
}

export class HasAnswerState implements IQuestionState {
    public question: QuestionState;

    constructor(question: QuestionState) {
        this.question = question;
    }

    AnswerQuestion(): void {
        this.question.setState(this.question.hasAnswer);
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }

    CheckAnswer(correctAnswer: boolean): void {
        if (correctAnswer) {
            this.question.setState(this.question.hasCorrectAnswer);
        } else {
            this.question.setState(this.question.hasIncorrectAnswer);
        }
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }
}

export class HasCorrectAnswerState implements IQuestionState {
    public question: QuestionState;

    constructor(question: QuestionState) {
        this.question = question;
    }

    AnswerQuestion(): void {
        this.question.setState(this.question.hasAnswer);
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }

    CheckAnswer(correctAnswer: boolean): void {
        if (correctAnswer) {
            this.question.setState(this.question.hasCorrectAnswer);
        } else {
            this.question.setState(this.question.hasIncorrectAnswer);
        }
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }
}

export class HasIncorrectAnswerState implements IQuestionState {
    public question: QuestionState;

    constructor(question: QuestionState) {
        this.question = question;
    }

    AnswerQuestion(): void {
        this.question.setState(this.question.hasAnswer);
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }

    CheckAnswer(correctAnswer: boolean): void {
        if (correctAnswer) {
            this.question.setState(this.question.hasCorrectAnswer);
        } else {
            this.question.setState(this.question.hasIncorrectAnswer);
        }
        console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }
}
