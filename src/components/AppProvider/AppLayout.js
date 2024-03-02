import React from "react";
import LayoutProvider from "../Layout/LayoutProvider";
import {useApp} from "../../hooks/hooks";
import { LAYOUTS } from "../Layout/layouts";

const AppLayout = (props) => {
  const { activeLayout } = useApp();

  if (!activeLayout) {
    throw Error("AppLayout > No activeLayout is set.");
  }

  const LayoutComponent = React.useMemo(() => {
    const layoutIndex = LAYOUTS.findIndex(
      (layout) => layout.name === activeLayout
    );

    if (layoutIndex >= 0) {
      return LAYOUTS[layoutIndex].component;
    }

    throw Error("No activeLayout is set yet.");
  }, [activeLayout]);

  return (
    <LayoutProvider>
      <LayoutComponent>
          {props.children}
      </LayoutComponent>
    </LayoutProvider>
  );
};

export default AppLayout;
