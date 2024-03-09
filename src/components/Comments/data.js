import { getCustomDateTime } from "../../utils/constants/formatHelpers";
import Image from "../../assets/images/48x48.png";

export const commentsList = [
  {
    id: 1,
    user: {
      id: 22,
      name: "Domnic Harris",
      profile_pic: Image,
    },
    postTitle: "4 keys to make your business unique.",
    comment:
      "Thank you for such a wonderful post. The content was outstanding.",
    date: getCustomDateTime(-5, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 2,
    user: {
      id: 22,
      name: "Novac",
      profile_pic: Image,
    },
    postTitle: "10 ways you can keep yourself safe from Corona.",
    comment:
      "It is amazing, keep up the good work. You are doing good for the society.",
    date: getCustomDateTime(-10, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 3,
    user: {
      id: 22,
      name: "Rahul",
      profile_pic: Image,
    },
    postTitle: "Peaceful Mind - The first requirement towards the success",
    comment:
      "Thank you for such a wonderful post. The content was outstanding.",
    date: getCustomDateTime(-15, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 4,
    user: {
      id: 22,
      name: "Federer",
      profile_pic: Image,
    },
    postTitle: "Work from home - Easy or Difficult?",
    comment: "Haha this is funny, it actually tells the truth.",
    date: getCustomDateTime(-18, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 5,
    user: {
      id: 22,
      name: "Francis",
      profile_pic: Image,
    },
    postTitle: "4 keys to make your business unique.",
    comment:
      "Thank you for such a wonderful post. The content was outstanding.",
    date: getCustomDateTime(-25, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
  {
    id: 6,
    user: {
      id: 22,
      name: "Andy Murray",
      profile_pic: Image,
    },
    postTitle: "4 keys to make your business unique.",
    comment:
      "Thank you for such a wonderful post. The content was outstanding.",
    date: getCustomDateTime(-35, "minutes", "MMMM DD, YYYY, h:mm:ss a"),
  },
];
