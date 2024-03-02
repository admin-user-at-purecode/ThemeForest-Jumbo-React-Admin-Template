import React from 'react';
import {ThemeContext} from '../Context/context';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ThemeHeader from './ThemeHeader/ThemeHeader';
import ThemeSidebar from './ThemeSidebar/ThemeSidebar';

const AppTheme = ({children, init}) => {
    const [theme, setTheme] = React.useState(init.main);

    const updateTheme = React.useCallback((options) => {
        const newTheme = createTheme({...theme, ...options});
        setTheme(newTheme);
    }, [theme, setTheme]);

    const themeContextValue = React.useMemo(() => ({
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