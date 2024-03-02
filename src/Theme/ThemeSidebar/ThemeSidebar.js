import { useState,useMemo } from "react";
import {ThemeSidebarContext} from "../../Context/context";
import {createTheme} from "@mui/material/styles";

const ThemeSidebar = ({children, init}) => {
    const [sidebarTheme, setSidebarTheme] = useState(init);

    const themeSidebarContextValue = useMemo(() => ({
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