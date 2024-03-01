import React from 'react';
import ThemeHeaderContext from '../Context/ThemeHeaderContext';

const useHeaderTheme = () => {
    return React.useContext(ThemeHeaderContext);
};

export default useHeaderTheme;
