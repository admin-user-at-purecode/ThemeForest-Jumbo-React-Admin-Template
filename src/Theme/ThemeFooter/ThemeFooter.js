import React from 'react';
import {ThemeFooterContext} from "../../Context/context";
import {createTheme} from "@mui/material/styles";

const ThemeFooter = ({children, init}) => {
    const [footerTheme, setFooterTheme] = React.useState(init);

    const themeFooterContextValue = React.useMemo(() => ({
        footerTheme: createTheme(footerTheme),
        setFooterTheme: setFooterTheme,
    }), [footerTheme, setFooterTheme]);

    return (
        <ThemeFooterContext.Provider value={themeFooterContextValue}>
            {children}
        </ThemeFooterContext.Provider>
    );
};

export default ThemeFooter;