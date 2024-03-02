 "react";
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LockResetIcon from '@mui/icons-material/LockReset';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import ListIcon from '@mui/icons-material/List';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GridViewIcon from '@mui/icons-material/GridView';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

const menus = [
    {
        label: 'Home',
        type: "section",
        children: [
            {
               uri:"#",
                label: 'Misc',
                type: "nav-item",
                icon: <GraphicEqIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Crypto',
                type: "nav-item",
                icon: <CurrencyExchangeOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Listing',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Crm',
                type: "nav-item",
                icon: <SupportAgentOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Intranet',
                type: "nav-item",
                icon: <PieChartOutlineOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri:"#",
                label: 'E-Commerce',
                type: "nav-item",
                icon: <ShoppingCartOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
              uri:"#",
                label: 'News',
                type: "nav-item",
                icon: <NewspaperIcon sx={{fontSize: 20}}/>
            }
        ]
    },

    {
        label: 'Apps',
        type: "section",
        children: [
            {
               uri:"#",
                label: 'Chat',
                type: "nav-item",
                icon: <ChatOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Contacts',
                type: "nav-item",
                icon: <ContactsOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Mail',
                type: "nav-item",
                icon: <EmailOutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'Cards',
        type: "section",
        children: [
            {
              uri:"#",
                label: 'Widgets',
                type: "nav-item",
                icon: <WidgetsOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Metrics',
                type: "nav-item",
                icon: <LeaderboardOutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'Components',
        type: "section",
        children: [
            {
                label: 'Material UI',
                type: "collapsible",
                icon: <SourceOutlinedIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                       uri:"#",
                        label: "Accordions",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Alerts",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Auto Complete",
                        type: "nav-item"
                    },
                    {
                      uri:"#",
                        label: "Avatars",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Backdrops",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Badges",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Bottom Navigations",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Breadcrumbs",
                        type: "nav-item",
                    },
                    {
                       uri:"#",
                        label: "Button Group",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Buttons",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Checkboxes",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Chip",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "ClickAway Listeners",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Container",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Dialogs",
                        type: "nav-item"
                    },
                    {
                     uri:"#",
                        label: "Dividers",
                        type: "nav-item",
                    },
                    {
                      uri:"#",
                        label: "Grids",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "ImageList",
                        type: "nav-item"
                    },
                    {
                      uri:"#",
                        label: "Links",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Lists",
                        type: "nav-item",
                    },
                    {
                       uri:"#",
                        label: "Masonry",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Menus",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Modal",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Pagination",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Paper",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Pickers",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Popovers",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Popper",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Portal",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Progress",
                        type: "nav-item",
                    },
                    {
                        uri:"#",
                        label: "Radio Buttons",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Rating",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Selects",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Skeleton",
                        type: "nav-item"
                    },
                    {
                      uri:"#",
                        label: "Sliders",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Snackbars",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Speed Dial",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Stack",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Steppers",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Switches",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Tabs",
                        type: "nav-item"
                    },
                    {
                      uri:"#",
                        label: "Text Fields",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Text Area Autosize",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Timeline",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Toggle Buttons",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Tooltips",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Transfer List",
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: "Transitions",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Tree Views",
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: "Typography",
                        type: "nav-item"
                    },
                ]
            },
        ]
    },
    {

        label: 'Extensions',
        type: "section",
        children: [
            {
                label: 'Editor',
                type: "collapsible",
                icon: <ModeEditOutlinedIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                       uri:"#",
                        label: 'Ck Editor',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'WysiwygEditor',
                        type: "nav-item"
                    }
                ]
            },
            {
                uri:"#",
                label: 'Drag n Drop',
                type: "nav-item",
                icon: <DragIndicatorIcon sx={{fontSize: 20}}/>,
            },
            {
                uri:"#",
                label: 'Dropzone',
                type: "nav-item",
                icon: <BackupOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'SweetAlerts',
                type: "nav-item",
                icon: <WarningAmberIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'Modules',
        type: "section",
        children: [
            {
                label: 'Calendar',
                type: "collapsible",
                icon: <EventNoteIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri:"#",
                        label: 'Basic',
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: 'Cultures',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Popup',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Rendering',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Selectable',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Timeslots',
                        type: "nav-item"
                    }
                ]
            },
            {
                label: 'Charts',
                type: "collapsible",
                icon: <InsertChartOutlinedIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri:"#",
                        label: 'Line',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Bar',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Area',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Composed',
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: 'Pie',
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: 'Scatter',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Radial',
                        type: "nav-item"
                    },
                    {
                     uri:"#",
                        label: 'Radar',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'TreeMap',
                        type: "nav-item"
                    }
                ]
            },
            {
                label: 'Maps',
                type: "collapsible",
                icon: <MyLocationIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                       uri:"#",
                        label: 'SimpleMap',
                        type: "nav-item"
                    },
                    {
                     uri:"#",
                        label: 'StyledMap',
                        type: "nav-item"
                    },
                    {
                        uri:"#",
                        label: 'GeoLocation',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Directional',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Overlay',
                        type: "nav-item"
                    },
                    {
                      uri:"#",
                        label: 'KmLayer',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'PopupInfo',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'StreetView',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Drawing',
                        type: "nav-item"
                    },
                    {
                       uri:"#",
                        label: 'Clustering',
                        type: "nav-item"
                    }
                ]
            }
        ]
    },
    {
        label: 'AuthPages',
        type: "section",
        children: [
            {
                label: 'Login',
                type: "collapsible",
                icon: <LoginIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                        uri:"#",
                        label: 'Login 1',
                        type: "nav-item",
                    },
                    {
                       uri:"#",
                        label: 'Login 2',
                        type: "nav-item",
                    }
                ]
            },
            {
                label: 'Signup',
                type: "collapsible",
                icon: <PersonAddAltIcon sx={{fontSize: 20}}/>,
                children: [
                    {
                       uri:"#",
                        label: 'Signup 1',
                        type: "nav-item",
                    },
                    {
                      uri:"#",
                        label: 'Signup 2',
                        type: "nav-item",
                    }
                ]
            },
            {
                uri:"#",
                label: 'Forget Password',
                type: "nav-item",
                icon: <PasswordOutlinedIcon sx={{fontSize: 20}}/>,
            },
            {
                uri:"#",
                label: 'Reset Password',
                type: "nav-item",
                icon: <LockResetIcon sx={{fontSize: 20}}/>,
            }
        ]
    },
    {
        label: 'ExtraPages',
        type: "section",
        children: [
            {
               uri:"#",
                label: 'About Us',
                type: "nav-item",
                icon: <InfoOutlinedIcon sx={{fontSize: 20}}/>,
            },
            {
               uri:"#",
                label: 'Contact Us',
                type: "nav-item",
                icon: <ContactPageOutlinedIcon sx={{fontSize: 20}}/>,
            },
            {
               uri:"#",
                label: 'Call Outs',
                type: "nav-item",
                icon: <CallEndIcon sx={{fontSize: 20}}/>,
            },
            {
              uri:"#",
                label: 'Price Plan',
                type: "nav-item",
                icon: <CreditCardIcon sx={{fontSize: 20}}/>,
            },
            {
               uri:"#",
                label: 'Error 400',
                type: "nav-item",
                icon: <ErrorOutlineIcon sx={{fontSize: 20}}/>,
                target: "_blank",
            },
            {
               uri:"#",
                label: 'Error 500',
                type: "nav-item",
                icon: <RunningWithErrorsOutlinedIcon sx={{fontSize: 20}}/>,
            },
            {
              uri:"#",
                label: 'Lock Screen',
                type: "nav-item",
                icon: <ScreenLockRotationIcon sx={{fontSize: 20}}/>,
            },
        ]
    },
    {
        label: 'User',
        type: "section",
        children: [
            {
               uri:"#",
                label: 'Profile',
                type: "nav-item",
                icon: <AccountBoxOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
               uri:"#",
                label: 'Social Wall',
                type: "nav-item",
                icon: <StreamOutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'ListView',
        type: "section",
        children: [
            {

               uri:"#",
                label: 'Projects',
                type: "nav-item",
                icon: <ViewListOutlinedIcon sx={{fontSize: 20}}/>
            },

            {
                uri:"#",
                label: 'Users',
                type: "nav-item",
                icon: <ListIcon sx={{fontSize: 20}}/>
            }
        ]
    },
    {
        label: 'gridV iew',
        type: "section",
        children: [
            {
               uri:"#",
                label: 'Projects',
                type: "nav-item",
                icon: <GridViewIcon sx={{fontSize: 20}}/>
            },
            {
                uri:"#",
                label: 'Users',
                type: "nav-item",
                icon: <Grid3x3OutlinedIcon sx={{fontSize: 20}}/>
            }
        ]
    }
];

export default menus;
