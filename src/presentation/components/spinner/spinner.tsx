import React from "react";

import Styles from "./spinner-styles.scss";

type Props = React.HTMLAttributes<HTMLElement>;

const Spinner: React.FC<Props> = (props: Props) => {
    const className = { props };

    return (
        <div {...props} className={[Styles.spinner, className].join(" ")}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
