import { forwardRef } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import {useTheme} from '../../hooks/hooks';

const Scrollbar = forwardRef((props, ref) => {
    const {theme} = useTheme();
    const { renderTrackVertical, renderTrackHorizontal, disable, ...restProps} = props;

    if (disable) {
        return restProps.children ?? null;
    }

    const renderTrackProp = () => ({
        renderTrackVertical: ({style, ...props}) => (<div
                style={{
                    ...style,
                    top: '2px',
                    bottom: '2px',
                    right: '2px',
                    borderRadius: '3px',
                    ...(theme.direction === "rtl" ? {right: 'auto', left: '2px'} : {})
                }}
                {...props}
            />
        )
    })

    return (
        <Scrollbars
            renderView={
                props => (<div {...props} style={
                    (theme.direction === "rtl" ? {
                        ...props?.style,
                        marginLeft: "-17px",
                        marginRight: 0
                    } : {...props?.style})
                }/>)
            }
            ref={ref}
            {...renderTrackProp}
            {...props}

        />
    );
});

export default Scrollbar;
