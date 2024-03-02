import { useState,useMemo } from "react";
import {ThemeHeaderContext} from "../../Context/context";
import {createTheme} from "@mui/material/styles";

const ThemeHeader = ({children, init}) => {
    const [headerTheme, setHeaderTheme] = useState(init);

    const themeHeaderContextValue = useMemo(() => ({
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