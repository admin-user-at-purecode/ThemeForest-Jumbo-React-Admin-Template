import React from "react";
import LayoutFooterContext from "../Context/LayoutFooterContext";

const useLayoutFooter = () => {
    return React.useContext(LayoutFooterContext);
};

export default useLayoutFooter;