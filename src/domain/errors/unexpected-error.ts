export class UnexpectedError extends Error {
    constructor() {
        super("Unexpected error. Please, try again!");
        this.name = "UnexpectedError";
    }
}
