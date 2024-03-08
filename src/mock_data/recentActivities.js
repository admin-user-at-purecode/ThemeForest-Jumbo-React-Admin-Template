import Span from "../components/Span/Span";
import { getCustomDateTime } from "../utils/constants/formatHelpers";
import Image from "../assets/images/44x44.png";

export const recentActivities = [
  {
    date: getCustomDateTime(0, "days", "MMM DD, YYYY"),
    data: [
      {
        id: 1,
        user: {
          id: 12,
          name: "Alex Dolgove",
          profilePic: Image,
        },
        mediaList: [
          {
            id: 123,
            name: "Media1",
            mediaUrl: Image,
          },
          {
            id: 124,
            name: "Media2",
            mediaUrl: Image,
          },
          {
            id: 125,
            name: "Media3",
            mediaUrl: Image,
          },
        ],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Alex Dolgove</Span>,
          "left a 5 star review on Albama’s House",
        ],
      },
      {
        id: 2,
        user: {
          id: 12,
          name: "Kailasha",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Kailasha</Span>,
          "is looking for a house in New Jersey, USA",
        ],
      },
      {
        id: 3,
        user: {
          id: 12,
          name: "Chelsea Johns",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          "Agent ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Chelsea Johns</Span>,
          "has added 7 new photos to the property ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Albama's house</Span>,
        ],
      },
    ],
  },
  {
    date: getCustomDateTime(-1, "days", "MMM DD, YYYY"),
    data: [
      {
        id: 4,
        user: {
          id: 12,
          name: "Domnic Brown",
          profilePic: Image,
        },
        mediaList: [
          {
            id: 123,
            name: "Media1",
            mediaUrl: Image,
          },
          {
            id: 124,
            name: "Media1",
            mediaUrl: Image,
          },
          {
            id: 125,
            name: "Media1",
            mediaUrl: Image,
          },
        ],
        content: [
          "Welcome to a new agent ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Domnic Brown</Span>,
          "in the company.",
        ],
      },
      {
        id: 5,
        user: {
          id: 12,
          name: "Michael Dogov",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Michael Dogov</Span>,
          "is looking for an office space in Colarado, USA.",
        ],
      },
    ],
  },

  {
    date: getCustomDateTime(-2, "days", "MMM DD, YYYY"),
    data: [
      {
        id: 6,
        user: {
          id: 12,
          name: "Domnic Harris",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Domnic Harris</Span>,
          "left a 5 star rating on Albama's property.",
        ],
      },
      {
        id: 7,
        user: {
          id: 12,
          name: "Garry Sobars",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          " Callback request from ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Garry Sobars</Span>,
          "for the property ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Dmitri house</Span>,
        ],
      },
      {
        id: 8,
        user: {
          id: 12,
          name: "Guptil Sharma",
          profilePic: Image,
        },
        mediaList: [
          {
            id: 123,
            name: "Media1",
            mediaUrl: Image,
          },
          {
            id: 124,
            name: "Media2",
            mediaUrl: Image,
          },
          {
            id: 125,
            name: "Media3",
            mediaUrl: Image,
          },
        ],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Guptil Sharma</Span>,
          "left a 5 star rating on Aloboma's house",
        ],
      },
    ],
  },
  {
    date: getCustomDateTime(-5, "days", "MMM DD, YYYY"),
    data: [
      {
        id: 9,
        user: {
          id: 12,
          name: "Jeson Born",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Jeson Born</Span>,
          "is looking for a house in New jersey, USA.",
        ],
      },
      {
        id: 10,
        user: {
          id: 12,
          name: "Jimmy Jo",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          "Agent ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Jimmy Jo</Span>,
          "has added 7 new photos to the property ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Albama's house</Span>,
        ],
      },
      {
        id: 11,
        user: {
          id: 12,
          name: "Jonathan Lee",
          profilePic: Image,
        },
        mediaList: [
          {
            id: 123,
            name: "Media1",
            mediaUrl: Image,
          },
          {
            id: 124,
            name: "Media1",
            mediaUrl: Image,
          },
          {
            id: 125,
            name: "Media1",
            mediaUrl: Image,
          },
        ],
        content: [
          "Welcome to a new agent ",
          <Span sx={{ color: "#7352C7", mr: 1 }}>Jonathan Lee</Span>,
          "in the company.",
        ],
      },
      {
        id: 12,
        user: {
          id: 12,
          name: "Joshua",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Joshua</Span>,
          "is looking for an office space in Colarado, USA.",
        ],
      },
      {
        id: 13,
        user: {
          id: 12,
          name: "Stella Johnson",
          profilePic: Image,
        },
        mediaList: [],
        content: [
          <Span sx={{ color: "#7352C7", mr: 1 }}>Stella Johnson</Span>,
          "left a 5 star rating on Albama's property.",
        ],
      },
    ],
  },
];
