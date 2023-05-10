import { useEffect } from "react";

type CallBackType = () => void;

export const useOutsideClick = (ref: any, callback: CallBackType): void => {
    const handleClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};
