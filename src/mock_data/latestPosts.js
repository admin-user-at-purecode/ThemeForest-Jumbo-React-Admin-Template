import RefreshIcon from "@mui/icons-material/Refresh";
import ArticleIcon from "@mui/icons-material/Article";
import Image from "../assets/images/360x252.png";

export const latestPosts = [
  {
    id: 1,
    image: Image,
    title: "5 DIY tips to use in kitchen",
    description:
      "Proin nec fringilla enim, in cursus est. Nam eget laoreet erat suscipit.",
    date: "25 Jan, 2021",
  },
  {
    id: 2,
    image: Image,
    title: "Top 5 beaches in the world",
    description:
      "Etiam sodales ut tortor ut dignissim. Curabitur dolor tortor.",
    date: "24 Feb, 2021",
  },
  {
    id: 3,
    image: Image,
    title: "7 trends for copywriting in 2022",
    description: "We’ve all seen a Mason jar with chalkboard paint.",
    date: "15 Mar, 2021",
  },
  {
    id: 4,
    image: Image,
    title: "The story behind the best speech",
    description: "This pegboard idea from Ninemsn Homes.",
    date: "24 May, 2021",
  },
  {
    id: 5,
    image: Image,
    title: "The big bang theory is back to action",
    description: "So whether you are heading out to enjoy the falling snow.",
    date: "27 Aug, 2021",
  },
  {
    id: 6,
    image: Image,
    title: "Flowers which keep you healthy",
    description:
      "Aenean imperdiet lobortis purus, eu suscipit ipsum pharetra ac.",
    date: "27 Nov, 2021",
  },
];

export const menuItems = [
  {
    id: 1,
    icon: <RefreshIcon size={20} />,
    title: "Refresh",
    slug: "refresh",
  },
  {
    id: 2,
    icon: <ArticleIcon size={20} />,
    title: "All articles",
    slug: "articles",
  },
];
