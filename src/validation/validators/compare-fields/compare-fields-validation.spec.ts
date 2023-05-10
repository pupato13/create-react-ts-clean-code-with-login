import faker from "faker";
import { InvalidFieldError } from "@/validation/errors";
import { CompareFieldsValidation } from "./compare-fields-validation";

const makeSut = (
    field: string,
    fieldToCompare: string,
): CompareFieldsValidation =>
    new CompareFieldsValidation(field, fieldToCompare);

describe("CompareFieldsValidation", () => {
    test("Should return error if compare is invalid", () => {
        const field = faker.random.words(3);
        const fieldToCompare = faker.random.words(4);
        const sut = makeSut(field, fieldToCompare);
        const error = sut.validate({
            [field]: faker.random.words(3),
            [fieldToCompare]: faker.random.words(4),
        });
        expect(error).toEqual(new InvalidFieldError());
    });

    test("Should return falsy if compare is valid", () => {
        const field = faker.random.words(3);
        const fieldToCompare = faker.random.words(4);
        const value = faker.random.alphaNumeric(5);
        const sut = makeSut(field, fieldToCompare);
        const error = sut.validate({
            [field]: value,
            [fieldToCompare]: value,
        });
        expect(error).toBeFalsy();
    });
});
