import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {MoreHorizOutlined} from "@mui/icons-material";
import { memo, useState } from "react";

const DdMenu = ({icon, menuItems, onClickCallback}) => {
    const [menuEl, setMenuEl] = useState(null);
    const openMenu = Boolean(menuEl);

    const handleMenuItemClick = (option) => {
        setMenuEl(null);
        if (typeof onClickCallback === "function")
            onClickCallback(option);
    };

    return (
        <>
            <IconButton
                sx={{
                    color: 'inherit'
                }}
                onClick={(e) => {
                    setMenuEl(e.currentTarget);
                    e.stopPropagation();
                }}
            >
                {
                    icon ? icon : <MoreHorizOutlined/>
                }
            </IconButton>
            <Menu open={openMenu}
                  anchorEl={menuEl}
                  onClose={() => setMenuEl(null)}

            >
                {menuItems.map((option, index) => (
                    <MenuItem key={index} selected={option.title === 'Refresh'}
                              onClick={(e) => {
                                  handleMenuItemClick(option);
                                  e.stopPropagation();
                              }}
                    >
                        {
                            option.icon &&
                            <ListItemIcon>{option.icon}</ListItemIcon>
                        }

                        <ListItemText>{option.title}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>

    );
};

export default memo(DdMenu);
