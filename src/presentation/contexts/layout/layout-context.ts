import { createContext } from "react";

type LayoutContextType = {
    isMenuCollapsed: boolean;
    toggleMenu?: () => void;
};

const defaultState = {
    isMenuCollapsed: false,
};

export default createContext<LayoutContextType>(defaultState);
