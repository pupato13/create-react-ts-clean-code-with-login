import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "@/presentation/components/private-route/private-route";

import { makeRemoteAuthentication } from "@/main/factories/usecases/authentication/remote-authentication-factory";
import { makeLoginValidation } from "@/main/factories/pages/login/login-validation-factory";
import { Login, Teste } from "@/presentation/pages";
import { MakeLogin } from "../factories/pages";

const Router: React.FC = () => {
    const opre = Teste;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MakeLogin />} />
                {/* <Route path="/teste" element={<Teste />} /> */}

                {/* https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou */}
                {/* <PrivateRoute path="/dashboard" element={<MakeLogin />} /> */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Teste />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
