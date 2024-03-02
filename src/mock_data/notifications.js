import { getCustomDateTime } from "../utils/constants/formatHelpers";
import Image from "../assets/images/150x150.png";

export const notifications = [
  {
    id: 2,
    user: {
      id: 101,
      name: "Stella Johnson",
      profile_pic: Image,
    },
    type: "POSTING",
    metaData: {
      post: {
        type: "album",
        title: "This is Beginning",
        owner: {
          id: 545,
          name: "Martin Guptil",
          profile_pic: Image,
        },
      },
    },
    createdAt: getCustomDateTime(-27, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 3,
    user: {
      id: 102,
      name: "John Doe",
      profile_pic: Image,
    },
    type: "SHARED_POST",
    metaData: {
      post: {
        title: "This is Beginning",
        owner: {
          id: 545,
          name: "Martin Guptil",
          profile_pic: Image,
        },
      },
    },
    createdAt: getCustomDateTime(-50, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 1,
    user: {
      id: 100,
      name: "Garry Sobars",
      profile_pic: Image,
    },
    type: "INVITATION",
    metaData: {
      user: {
        id: 105,
        name: "North Taylor",
        profile_pic: Image,
      },
      group: { id: 12, name: "Global Health" },
    },
    date: getCustomDateTime(-90, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 4,
    user: {
      id: 105,
      name: "Sara John",
      profile_pic: Image,
    },
    type: "BIRTHDAY",
    createdAt: getCustomDateTime(-150, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
];
