import React from 'react';
import ThemeHeaderContext from "../../Context/ThemeHeaderContext";
import {createTheme} from "@mui/material/styles";

const ThemeHeader = ({children, init}) => {
    const [headerTheme, setHeaderTheme] = React.useState(init);

    const themeHeaderContextValue = React.useMemo(() => ({
        headerTheme: createTheme(headerTheme),
        setHeaderTheme: setHeaderTheme,
    }), [headerTheme, setHeaderTheme]);

    return (
        <ThemeHeaderContext.Provider value={themeHeaderContextValue}>
            {children}
        </ThemeHeaderContext.Provider>
    );
};

export default ThemeHeader;