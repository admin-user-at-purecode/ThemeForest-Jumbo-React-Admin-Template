import {alpha} from "@mui/material/styles";

export const sidebarTheme = {
    type: "light",
    palette: {
        primary: {
            main: '#7352C7',
            light: '#A67FFB',
            dark: '#5E3BB7',
            contrastText: '#FFF'
        },
        text: {
            primary: '#475259',
            secondary: '#8595A6',
            disabled: '#A2B2C3',
        },
        nav: {
            action: {
                active: '#7352C7',
                hover: '#7352C7',
            },
            background: {
                active: alpha('#7352C7', .15),
                hover: "#E9ECEF"
            },
            tick: {
                active: '#7352C7',
                hover: "#ADB5BD"
            }
        },
        divider : '#DEE2E6',
        background: {
            paper: '#FFFFFF',
            default: '#F5F7FA',
        },
        action: {
            active: '#475259',
            hover: '#F5F7FA',
        },
    }
};