import styled from "@mui/material/styles/styled";

export const DrawerHeader = styled('div')(({theme}) => {

    return ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 3.75),
        justifyContent: 'space-between',
        minHeight: '80px',
    })
});
