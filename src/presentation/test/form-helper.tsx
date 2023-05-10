import faker from "faker";
import { fireEvent, screen } from "@testing-library/react";

export const testStatusForField = (
    fieldName: string,
    validationError = "",
): void => {
    const wrap = screen.getByTestId(`${fieldName}-wrap`);
    const field = screen.getByTestId(fieldName);
    const label = screen.getByTestId(`${fieldName}-label`);
    expect(wrap).toHaveAttribute(
        "data-status",
        validationError ? "invalid" : "valid",
    );
    expect(field).toHaveProperty("title", validationError);
    expect(label).toHaveProperty("title", validationError);
};

export const populateField = (
    fieldName: string,
    value = faker.random.word(),
): void => {
    const input = screen.getByTestId(fieldName);
    fireEvent.input(input, {
        target: { value },
    });
};

export const populateFieldNumber = (
    fieldName: string,
    value = faker.datatype.number(),
): void => {
    const input = screen.getByTestId(fieldName);
    fireEvent.input(input, {
        target: { value },
    });
};
