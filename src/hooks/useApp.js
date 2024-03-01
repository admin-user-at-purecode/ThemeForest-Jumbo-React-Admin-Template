import React from "react";
import AppContext from "../Context/AppContext"

const useApp = () => {
    return React.useContext(AppContext);
};

export default useApp;