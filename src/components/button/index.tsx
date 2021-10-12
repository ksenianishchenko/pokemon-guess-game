import React from "react";

import "./styles.scss";

export interface IButton {
    readonly className?: string;
    handleClick?: () => void;
}

const Button: React.SFC<IButton> = ({className, handleClick, children}) => {
    return <button
        type="button"
        className={className ? `button ${className}` : `button`}
        onClick={handleClick}
    >{children}</button>
}

export default Button;