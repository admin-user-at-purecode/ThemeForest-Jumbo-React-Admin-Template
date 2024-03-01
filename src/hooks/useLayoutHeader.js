import React from "react";
import LayoutHeaderContext from "../Context/LayoutHeaderContext";

const useLayoutHeader = () => {
    return React.useContext(LayoutHeaderContext);
};

export default useLayoutHeader;
