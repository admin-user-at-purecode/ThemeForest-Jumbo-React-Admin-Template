import { useState } from "react";

import Stack from "@mui/material/Stack";
import { useLayoutSidebar, useHeaderTheme } from "../../hooks/hooks";
import AuthUserDropdown from "../AuthUserDropdown/AuthUserDropdown";
import NotificationsDropdown from "../shared/NotificationsDropdown/NotificationsDropdown";
import MessagesDropdown from "../shared/MessagesDropdown/MessagesDropdown";
import SearchGlobal from "../shared/SearchGlobal/SearchGlobal";
import { IconButton, Slide, useMediaQuery } from "@mui/material";
import Div from "../shared/Div/Div";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CustomIconButton from "../CustomIconButton/CustomIconButton";
import Logo from "../shared/Logo/Logo";
import { SIDEBAR_STYLES } from "../../utils/constants/layout";

const Header = () => {
  const { sidebarOptions, setSidebarOptions } = useLayoutSidebar();
  const [dropdownSearchVisibility, setDropdownSearchVisibility] =
    useState(false);
  const { headerTheme } = useHeaderTheme();

  const showDropdownSearch = useMediaQuery("(max-width:575px)");

  return (
    <>
      {!sidebarOptions.open && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{
            ml:
              sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER
                ? -2
                : 0,
            mr: 3,
          }}
          onClick={() => setSidebarOptions({ open: !sidebarOptions.open })}
        >
          {sidebarOptions?.open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      )}
      {sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
        <Logo sx={{ mr: 3 }} mode={headerTheme.type ?? "light"} />
      )}
      {showDropdownSearch && (
        <Slide in={dropdownSearchVisibility}>
          <Div
            sx={{
              zIndex: 5,
              left: 0,
              right: 0,
              position: "absolute",
              height: "100%",
            }}
          >
            <SearchGlobal
              sx={{
                maxWidth: "none",
                height: "100%",
                display: "flex",

                "& .MuiInputBase-root": {
                  flex: 1,
                  borderRadius: 0,
                  background: "white",
                },
                "& .MuiInputBase-input": {
                  pr: 6,
                },
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                right: 15,
                top: "50%",
                color: "inherit",
                transform: "translateY(-50%)",
              }}
              onClick={() => setDropdownSearchVisibility(false)}
            >
              <CloseIcon />
            </IconButton>
          </Div>
        </Slide>
      )}
      {!showDropdownSearch && (
        <SearchGlobal
          sx={{
            maxWidth: { xs: 240, md: 320 },
          }}
        />
      )}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.25}
        sx={{ ml: "auto" }}
      >
        {showDropdownSearch && (
          <CustomIconButton
            elevation={25}
            onClick={() => setDropdownSearchVisibility(true)}
          >
            <SearchIcon fontSize={"small"} />
          </CustomIconButton>
        )}
        <MessagesDropdown />
        <NotificationsDropdown />
        <AuthUserDropdown />
      </Stack>
    </>
  );
};

export default Header;
