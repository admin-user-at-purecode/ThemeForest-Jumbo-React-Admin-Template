import React from "react";
import LayoutContentContext from "../Context/LayoutContentContext";

const useLayoutContent = () => {
    return React.useContext(LayoutContentContext);
};

export default useLayoutContent;