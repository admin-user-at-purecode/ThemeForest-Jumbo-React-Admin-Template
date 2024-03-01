import React from "react";
import ThemeContext from "../Context/ThemeContext";

const useTheme = () => {
    return React.useContext(ThemeContext);
};

export default useTheme;