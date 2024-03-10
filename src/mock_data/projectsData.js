import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import { Dashboard } from "@mui/icons-material";
import Image from "../assets/images/40x40.png";

export const projectMenu = [
  {
    icon: <LockOpenIcon size={20} />,
    title: "Manage Access",
  },
  {
    icon: <SettingsApplicationsSharpIcon size={20} />,
    title: "Setting",
  },
  {
    icon: <Dashboard size={20} />,
    title: "Dashboard",
  },
];
const fakeUsers = [
  {
    id: 1,
    firstName: "Joy",
    lastName: "Parrish",
    displayName: "P. Joy",
    profilePic: Image,
  },
  {
    id: 2,
    firstName: "Rob",
    lastName: "Williamson",
    displayName: "W. Rob",
    profilePic: Image,
  },
  {
    id: 3,
    firstName: "Ram",
    lastName: "Malhotra",
    displayName: "M. Ram",
    profilePic: Image,
  },
  {
    id: 4,
    firstName: "Chelsea",
    lastName: "Brown",
    displayName: "B. Chelsea",
    profilePic: Image,
  },
  {
    id: 5,
    firstName: "Nicolas",
    lastName: "Cage",
    displayName: "C. Nicolas",
    profilePic: Image,
  },
  {
    id: 6,
    firstName: "Amily",
    lastName: "Jackson",
    displayName: "B. Bob",
    profilePic: Image,
  },
  {
    id: 7,
    firstName: "Ken",
    lastName: "Ramirez",
    displayName: "R. Ken",
    profilePic: Image,
  },
  {
    id: 8,
    firstName: "Domenic",
    lastName: "Harris",
    displayName: "H. Domenic",
    profilePic: Image,
  },
  {
    id: 9,
    firstName: "Shawn",
    lastName: "Michael",
    displayName: "M. Shawn",
    profilePic: Image,
  },
  {
    id: 10,
    firstName: "Ron",
    lastName: "Brown",
    displayName: "B. Ron",
    profilePic: Image,
  },
  {
    id: 11,
    firstName: "Nicol",
    lastName: "Shorter",
    displayName: "S. Nicol",
    profilePic: Image,
  },
  {
    id: 12,
    firstName: "Dinesh",
    lastName: "Kamat",
    displayName: "K. Dinesh",
    profilePic: Image,
  },
  {
    id: 13,
    firstName: "Vikram",
    lastName: "Kumar",
    displayName: "K. Vikram",
    profilePic: Image,
  },
  {
    id: 14,
    firstName: "Stuart",
    lastName: "Parrish",
    displayName: "P. Stuart",
    profilePic: Image,
  },
];

export const projectUsers = [
  fakeUsers[0],
  fakeUsers[1],
  fakeUsers[2],
  fakeUsers[3],
  fakeUsers[4],
  fakeUsers[5],
];
