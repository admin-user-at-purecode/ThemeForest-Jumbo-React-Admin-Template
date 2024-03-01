import React from 'react';
import {IconButton, ImageListItemBar, Typography, useMediaQuery} from "@mui/material";

import useLayoutSidebar from "@/hooks/useLayoutSidebar";
import {SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS} from "@/utils/constants/layout";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardQuick from "@/components/CardQuick";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Div from "@/shared/Div";

const layouts = [
    {
        name: "Layout 1",
        slug: "layout-1",
        variant: SIDEBAR_VARIANTS.PERSISTENT,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        open: true,
    }
];

const LayoutOptions = () => {
    const {sidebarOptions, setSidebarOptions} = useLayoutSidebar();
    const isNotMobile = useMediaQuery('(min-width:1200px)');

    const handleSidebarChanges = React.useCallback((layout) => {
        if (isNotMobile) {
            setSidebarOptions({
                variant: layout.variant,
                style: layout?.style,
                view: layout?.view,
                open: layout?.open
            })
        }
    }, [sidebarOptions, setSidebarOptions, isNotMobile]);

    return (
        <CardQuick
            title={<Typography variant={"h5"} mb={0}>Layout Options</Typography>}
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            {
                !isNotMobile &&
                <Div sx={{mb: 2, color: "red", fontWeight: 500}}>This option only works if your screen size has width more than 1200px</Div>
            }
            <ImageList sx={{m: 0}} cols={2} gap={16}>
                {
                    layouts.map((layout, index) => {
                        const selected = (layout.variant === sidebarOptions.variant && layout.style === sidebarOptions.style)
                        const imageSrc = ``;

                        return (
                            <ImageListItem
                                key={`${index}-${layout.name}`}
                                onClick={() => handleSidebarChanges(layout)}
                                sx={{cursor: 'pointer',}}
                            >
                                <img
                                    src={`${imageSrc}?w=98&fit=crop&auto=format`}
                                    srcSet={`${imageSrc}?w=98fit=crop&auto=format&dpr=2 2x`}
                                    alt={layout.slug}
                                    loading="lazy"
                                />
                                {
                                    selected &&
                                    <ImageListItemBar
                                        actionIcon={
                                            <IconButton
                                                sx={{
                                                    color: '#4caf50'
                                                }}
                                                aria-label={`info about ${layout.label}`}
                                            >
                                                <CheckCircleIcon/>
                                            </IconButton>
                                        }
                                        sx={{
                                            top: 0,
                                            justifyContent: 'center',
                                            backgroundColor: 'transparent',
                                            '& .MuiImageListItemBar-titleWrap': {
                                                display: 'none'
                                            }
                                        }}
                                    />
                                }
                            </ImageListItem>
                        )
                    })
                }
            </ImageList>
        </CardQuick>
    );
};

export default LayoutOptions;
