import React from "react";
import LayoutSidebarContext from "../Context/LayoutSidebarContext";

const useLayoutSidebar = () => {
    return React.useContext(LayoutSidebarContext);
};

export default useLayoutSidebar;
