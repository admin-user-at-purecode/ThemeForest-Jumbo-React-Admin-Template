import React from "react";
import LayoutRootContext from "../Context/LayoutRootContext";

const useLayoutRoot = () => {
    return React.useContext(LayoutRootContext);
};

export default useLayoutRoot;