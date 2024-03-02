import React from 'react';
import {ThemeSidebarContext} from "../../Context/context";
import {createTheme} from "@mui/material/styles";

const ThemeSidebar = ({children, init}) => {
    const [sidebarTheme, setSidebarTheme] = React.useState(init);

    const themeSidebarContextValue = React.useMemo(() => ({
        sidebarTheme: createTheme(sidebarTheme),
        setSidebarTheme: setSidebarTheme,
    }), [sidebarTheme, setSidebarTheme]);

    return (
        <ThemeSidebarContext.Provider value={themeSidebarContextValue}>
            {children}
        </ThemeSidebarContext.Provider>
    );
};

export default ThemeSidebar;