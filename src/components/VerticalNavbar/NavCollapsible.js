import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ArrowWrapper } from "./style";
import NavIdentifier from "./NavIdentifier";

const menuBefore = {
  left: 0,
  top: 0,
  content: `''`,
  position: "absolute",
  display: "inline-block",
  width: "4px",
  height: "100%",
  backgroundColor: "transparent",
};

const NavCollapsible = ({ item }) => {
  const [open, setOpen] = useState(false);

  const label = item.label;

  if (!item) return null;

  const subMenus =
    item.children && item.children.length > 0 ? item.children : null;

  return (
    <>
      <ListItemButton
        component={"li"}
        onClick={() => setOpen(!open)}
        sx={{
          p: (theme) => theme.spacing(1, 3.75),
          borderRadius: "0 24px 24px 0",
          margin: "0",
          overflow: "hidden",
          "&:hover": {
            color: (theme) => theme.palette.nav.action.hover,
            backgroundColor: (theme) => theme.palette.nav.background.hover,
            ...{
              "&::before": {
                ...menuBefore,
                backgroundColor: (theme) => theme.palette.nav.tick.hover,
              },
            },
          },
          ...{ "&::before": menuBefore },
        }}
      >
        {
          <ArrowWrapper>
            {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ArrowWrapper>
        }
        {item.icon && (
          <ListItemIcon sx={{ minWidth: 32, color: "inherit" }}>
            {item.icon}
          </ListItemIcon>
        )}
        {
          <ListItemText
            primary={label}
            sx={{
              m: 0,
              "& .MuiTypography-root": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
          />
        }
      </ListItemButton>
      {subMenus && (
        <Collapse component={"li"} in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {subMenus.map((child, index) => {
              const eventKey = new Date().valueOf();
              return (
                <NavIdentifier
                  isNested={true}
                  item={child}
                  key={`${eventKey}${index}`}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NavCollapsible;
