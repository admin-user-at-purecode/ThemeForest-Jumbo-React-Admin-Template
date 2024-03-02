import React from 'react';
import {AppContext} from '../../Context/context'

const AppProvider = (props) => {
    const [activeLayout, setActiveLayout] = React.useState(props.activeLayout);

    const appContextValue = React.useMemo(() => {
        return {
            activeLayout,
            setActiveLayout           
        }
    }, [activeLayout, setActiveLayout]);

    return (
        <AppContext.Provider value={appContextValue}>
            {props?.children}
        </AppContext.Provider>
    );
};

export default AppProvider