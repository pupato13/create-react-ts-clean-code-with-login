export class ForbiddenError extends Error {
    constructor(errorMessage: string) {
        super(errorMessage);
        this.name = "ForbiddenError";
    }
}
