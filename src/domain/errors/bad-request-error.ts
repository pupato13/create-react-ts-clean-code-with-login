export class BadRequestError extends Error {
    constructor(errorMessage: string) {
        super(errorMessage);
        this.name = "BadRequestError";
    }
}
