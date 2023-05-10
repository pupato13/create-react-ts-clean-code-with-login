import React, { PropsWithChildren, useContext } from "react";
import { RouteProps, Route, Navigate } from "react-router-dom";
import { ApiContext } from "@/presentation/contexts";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    // const { getCurrentAccount } = useContext(ApiContext);

    // return getCurrentAccount()?.accessToken ? (
    //     // <Route {...props} />
    //     children
    // ) : (
    //     // <Route {...props} element={<Navigate to="/login" />} />
    //     <Navigate to="/Login" />
    //     // <Route {...props} element={<Navigate replace to="/login" />} />
    // );
    const auth = false;

    if (!auth) {
        // return <Navigate replace to="/" state={{ from: location }} />;
        return <Navigate replace to="/" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
