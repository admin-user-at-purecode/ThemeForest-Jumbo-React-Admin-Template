export const createTheme = (mainTheme, headerTheme, sidebarTheme, footerTheme) => {
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
        footer: {
            ...mainTheme,
            ...(footerTheme ?? {})
        }
    }
};