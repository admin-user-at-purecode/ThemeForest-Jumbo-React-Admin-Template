import { DENSITIES, POSITION_TYPES}  from "../utils/constants/layout";

const config = {
    defaultContentLayout: {
        base: {
            density: DENSITIES.STANDARD,
        },
        root: {
            container: "fluid",
            sx: {},
        },
        wrapper: {
            sx: {}
        },
        sidebar: {
            type: POSITION_TYPES.DEFAULT,
            width: 250,
            minWidth: 80,
            open: true,
            sx: {},
        },
        main: {
            sx: {}
        },
        header: {
            type: POSITION_TYPES.DEFAULT,
            spreadOut: true,
            sx: {},
        },
        content: {
            sx: {},
        },
        footer: {
            type: POSITION_TYPES.DEFAULT,
            spreadOut: true,
            sx: {},
        }
    }
};

export default config;