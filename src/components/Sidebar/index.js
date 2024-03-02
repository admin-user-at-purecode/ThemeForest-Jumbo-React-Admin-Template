import { useMemo } from "react";
import { IconButton } from "@mui/material";
import menus from "./menus";
import VerticalNavbar from "../VerticalNavbar/VerticalNavbar";
import { DrawerHeader } from "../Layout/style";
import Scrollbar from "../Scrollbar/Scrollbar";
import { useLayoutSidebar, useSidebarTheme } from "../../hooks/hooks";
import { SIDEBAR_VIEWS } from "../../utils/constants";
import Logo from "../Logo/Logo";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Zoom from "@mui/material/Zoom";

const Sidebar = () => {
  return (
    <>
      <SidebarHeader />
      <Scrollbar autoHide autoHideDuration={200} autoHideTimeout={500}>
        <VerticalNavbar translate items={menus} />
      </Scrollbar>
    </>
  );
};

const SidebarHeader = () => {
  const { sidebarOptions, setSidebarOptions } = useLayoutSidebar();
  const { sidebarTheme } = useSidebarTheme();

  const isMiniAndClosed = useMemo(() => {
    return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
  }, [sidebarOptions.view, sidebarOptions.open]);

  return (
    <>
        <DrawerHeader>
          <Logo mini={isMiniAndClosed} mode={sidebarTheme.type} />
          {sidebarOptions?.view !== SIDEBAR_VIEWS.MINI && (
            <Zoom in={sidebarOptions?.open}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 0, mr: -1.5 }}
                onClick={() => setSidebarOptions({ open: false })}
              >
                <MenuOpenIcon />
              </IconButton>
            </Zoom>
          )}
        </DrawerHeader>
    </>
  );
};

export default Sidebar;
