import {ThemeContext} from '../Context/context';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ThemeHeader from './ThemeHeader/ThemeHeader';
import ThemeSidebar from './ThemeSidebar/ThemeSidebar';
import { useState,useCallback,useMemo } from 'react';

const AppTheme = ({children, init}) => {
    const [theme, setTheme] = useState(init.main);

    const updateTheme = useCallback((options) => {
        const newTheme = createTheme({...theme, ...options});
        setTheme(newTheme);
    }, [theme, setTheme]);

    const themeContextValue = useMemo(() => ({
        theme: createTheme(theme),
        setTheme: updateTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <ThemeProvider theme={themeContextValue.theme}>
                <ThemeHeader init={init.header}>
                    <ThemeSidebar init={init.sidebar}>
                            {children}
                    </ThemeSidebar>
                </ThemeHeader>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default AppTheme;