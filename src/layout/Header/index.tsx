import React, { FunctionComponent } from "react";
import Headers from "./components/Headers";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = (prop) => {
    return (
        <>
            <Headers />
        </>
    );
};

export default Header;
