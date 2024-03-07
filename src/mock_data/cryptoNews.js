import Image from '../assets/images/360x252.png'
export const cryptoNewsMockData = [
  {
    id: 1,
    image: Image,
    author: { name: "Author One" },
    publishDate: "7 July 2020",
    views: 150,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["BTC", "Crypto", "Trading", "Tips", "Cryptocurrency"],
  },
  {
    id: 2,
    image: Image,
    author: { name: "Author Two" },
    publishDate: "7 July 2020",
    views: 200,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["ETH", "Cryptocurrency", "Investing", "Tips", "Cryptocurrency"],
  },
  {
    id: 3,
    image: Image,
    author: { name: "Author Two" },
    publishDate: "7 July 2020",
    views: 200,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["ETH", "Cryptocurrency", "Investing", "Tips", "Cryptocurrency"],
  }
];

export const cryptoNewsCategoriesMockData = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Bitcoin", slug: "bitcoin" },
  { id: 3, name: "Ethereum", slug: "ethereum" },
  { id: 4, name: "Altcoins", slug: "altcoins" },
];
