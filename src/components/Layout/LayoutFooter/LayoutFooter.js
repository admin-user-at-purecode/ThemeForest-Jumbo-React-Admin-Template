import React from 'react';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Div from '../../shared/Div/Div';
import useFooterTheme from '../../../hooks/useFooterTheme';
import useLayoutFooter from '../../../hooks/useLayoutFooter';

const LayoutFooter = ({children}) => {
    const {footerTheme} = useFooterTheme();
    const {footerOptions} = useLayoutFooter();

    if(footerOptions?.hide) {
        return null;
    }
    return (
        <ThemeProvider theme={footerTheme}>
            <Div className="CmtLayout-footer">
                {children}
            </Div>
        </ThemeProvider>
    );
};

export default LayoutFooter;
