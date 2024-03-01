import React from 'react';
import ThemeSidebarContext from '../Context/ThemeSidebarContext';

const useSidebarTheme = () => {
    return React.useContext(ThemeSidebarContext);
};

export default useSidebarTheme;