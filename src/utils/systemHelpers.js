export const createTheme = (mainTheme, headerTheme, sidebarTheme) => {
    return {
        main: mainTheme,
        header: {
            ...mainTheme,
            ...(headerTheme ?? {})
        },
        sidebar: {
            ...mainTheme,
            ...(sidebarTheme ?? {})
        },
    }
};