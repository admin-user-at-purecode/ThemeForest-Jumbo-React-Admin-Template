import React from "react";
import ThemeFooterContext from "../Context/ThemeFooterContext";

const useFooterTheme = () => {
    return React.useContext(ThemeFooterContext);
};

export default useFooterTheme;