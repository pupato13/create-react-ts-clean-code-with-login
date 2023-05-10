import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormStatus } from "@/presentation/components";
import { FormContext, ApiContext } from "@/presentation/contexts";
import { IValidation } from "@/presentation/protocols";
import { IAuthentication } from "@/domain/usecases";
import Styles from "./login-styles.scss";

type Props = {
    validation: IValidation;
    authentication: IAuthentication;
};

const Login: React.FC<Props> = ({ validation, authentication }) => {
    // const { setCurrentAccount } = useContext(ApiContext);
    const navigate = useNavigate();
    const [state, setState] = useState({
        isLoading: false,
        isFormInvalid: true,
        email: "",
        password: "",
        mainError: "",
        emailError: "",
        passwordError: "Required field",
    });

    const validate = (field: string): void => {
        const { email, password } = state;
        const formData = { email, password };

        setState((prevState) => ({
            ...prevState,
            [`${field}Error`]: validation.validate(field, formData),
        }));

        setState((prevState) => ({
            ...prevState,
            isFormInvalid: !!prevState.emailError || !!prevState.passwordError,
        }));
    };

    useEffect(() => {
        validate("email");
    }, [state.email]);

    useEffect(() => {
        validate("password");
    }, [state.password]);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        try {
            if (state.isLoading || state.isFormInvalid) return;

            setState({
                ...state,
                isLoading: true,
            });

            const account = await authentication.auth({
                email: state.email,
                password: state.password,
            });

            // setCurrentAccount(account);

            navigate("/");
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                mainError: error.message,
            });
        }
    };

    return <div className={Styles.loginContainer}>hey there</div>;
};

export default Login;
