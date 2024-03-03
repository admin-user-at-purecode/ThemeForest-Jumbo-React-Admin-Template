import { useMemo } from "react";
import {CssBaseline} from "@mui/material";
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS} from '../../utils/constants/layout';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import LayoutSidebar from './LayoutSidebar/LayoutSidebar';
import Div from "../Div/Div";
import {useLayoutSidebar} from '../../hooks/hooks';
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Layout = (props) => {
    const {sidebarOptions} = useLayoutSidebar();

    const contentMargin = useMemo(() => {
        // if (sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY) {
        //     return 0;
        // } 
        return sidebarOptions?.open ? sidebarOptions?.width : 0;
    }, [
        sidebarOptions?.open,
    ]);

    const headerHeightProps = useMemo(() => {
        return {height: 80}
    }, []);

    return (
        <Div
            sx={{
                display: 'flex',
                flex: 1,
                minWidth: 0,
                minHeight: '100%',
                flexDirection: 'column',
            }}
            className="CmtLayout-root"
        >
            <CssBaseline/>
            {
                sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
                <LayoutHeader sx={{ height: 80}}>
                    <Header/>
                </LayoutHeader>
            }

            <Div
                sx={{
                    display: 'flex',
                    flex: 1,
                    minWidth: 0,
                    position: 'relative',
                }}
                className="CmtLayout-wrapper"
            >
                <LayoutSidebar headerHeightProps={headerHeightProps}>
                <Sidebar/>
                </LayoutSidebar>
                <Div
                    sx={{
                        display: 'flex',
                        minWidth: 0,
                        flex: 1,
                        flexDirection: 'column',
                        minHeight: '100%',
                        marginLeft: {
                            sm: `${contentMargin}px`
                        },
                        transition: theme => theme.transitions.create(['margin-left']),
                    }}
                    className="CmtLayout-main"
                >

                    {
                        sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
                        <LayoutHeader sx={{ height: 80}}>
                           <Header/>
                        </LayoutHeader>
                    }
                    <Div
                        sx={{
                            display: 'flex',
                            minWidth: 0,
                            flex: 1,
                            flexDirection: 'column',
                            py: 4,
                            px: {lg: 6, xs: 4},
                        }}
                        className="CmtLayout-content"
                    >
                        {props.children}
                    </Div>
                    <Div>
                    <Footer/>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
};

export default Layout;