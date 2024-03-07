import Div from '../Div/Div';

const Backdrop = ({color, opacity, open, sx, children}) => {
    return (
        open ? <Div sx={{
            inset: 0,
            ...(sx ? sx : {}),
            position: "absolute",
            bgcolor: color,
            opacity: opacity,
        }}>{children}</Div> : null
    );
};

Backdrop.defaultProps = {
    color: "#000000",
    opacity: 0.7,
};

export default Backdrop;