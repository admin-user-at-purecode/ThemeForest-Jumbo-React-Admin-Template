 'react';
import Div from '../Div/Div';
import Link from "@mui/material/Link";
import adminPic from '../../assets/images/60x60.png'

const Logo = ({sx}) => {
    return (
        <Div sx={{display: "inline-flex", ...sx}}>
            <Link href="#">
            <img sx={{radius:"50%"}} src={adminPic} alt="React-Admin" />
            </Link>
        </Div>
    );
};

Logo.defaultProps = {
    mode: "light"
};

export default Logo;
