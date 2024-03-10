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

export const getArrayElementFromKey = (variable, keyString) => {
    if(variable && keyString) {
        const levels = keyString.split(".");
        let value = null;
        levels.forEach(level => {
            if(value === null)
                value = variable[level];
            else
                value = value[level];
        });
        return value;
    }
    return null;
};