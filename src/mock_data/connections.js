import { timeSince } from "../utils/formatHelpers";
import Image from "../assets/images/40x40.png";

export const connections = [
  {
    id: 32,
    user: {
      id: 21,
      name: "Julia Robert",
      username: "julia.robert",
      profile_pic: Image,
    },
    follow: true,
    created_at: timeSince(0.6),
  },
  {
    id: 33,
    user: {
      id: 22,
      name: "Joe Lee",
      username: "joe.lee",
      profile_pic: Image,
    },
    follow: false,
    created_at: timeSince(0.9),
  },
  {
    id: 34,
    user: {
      id: 23,
      name: "Chang Lee",
      username: "chang.lee",
      profile_pic: Image,
    },
    follow: false,
    created_at: timeSince(1.3),
  },
  {
    id: 35,
    user: {
      id: 24,
      name: "Mickey Arthur",
      username: "mickey.arthur",
      profile_pic: Image,
    },
    follow: true,
    created_at: timeSince(12),
  },
  {
    id: 36,
    user: {
      id: 25,
      name: "Shane Watson",
      username: "shane.watson",
      profile_pic: Image,
    },
    follow: true,
    created_at: timeSince(34),
  },
];
