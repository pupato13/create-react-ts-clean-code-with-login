import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import { ApiContext } from "@/presentation/contexts";
import { PrivateRoute } from "@/presentation/components";
import { mockAccountModel } from "@/domain/test";

type SutTypes = {
    history: MemoryHistory;
};

const makeSut = (account = mockAccountModel()): SutTypes => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    render(
        <ApiContext.Provider value={{ getCurrentAccount: () => account }}>
            <Router location={history.location} navigator={history}>
                <PrivateRoute />
            </Router>
            ,
        </ApiContext.Provider>
    );

    return { history };
};

describe("PrivateRoute", () => {
    test("Should redirect to /login if token is empty", () => {
        const { history } = makeSut(null);

        expect(history.location.pathname).toBe("/login");
    });

    test("Should render current component if token is not empty", () => {
        const { history } = makeSut();

        console.log(history.location);

        expect(history.location.pathname).toBe("/");
    });
});
