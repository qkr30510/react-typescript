import React, { useContext } from "react";
import LangContext from "./LangContext";

function Button() {
    const lang = useContext(LangContext)
    return <div>{lang}</div>
}

export default Button