 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Div from '../Div/Div';

const Footer = () => {

    return (
        <Div sx={{
            py: 2,
            px: {lg: 6, xs: 4},
            borderTop: 2,
            borderColor: 'divider',
            bgcolor: 'background.paper',
        }}>
            <Div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant={"body1"} color={"text.primary"}>Copyright Company Name © 2024</Typography>
                <Div sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant="h5"  sx={{display: { xs: 'none', sm: 'block' }, mb: 0, mr: 2, color: 'primary.main'}}> </Typography>
                    <Button variant="contained">Visit Now</Button>
                </Div>
            </Div>
        </Div>
    );
};

export default Footer;
