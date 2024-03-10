import { timeSince } from "../utils/formatHelpers";
import Image from "../assets/images/52x52.png";
import Image2 from "../assets/images/44x44.png";

export const dailyFeed = [
  {
    id: 1,
    user: {
      id: 100,
      name: "Robin Smith",
      profile_pic: Image,
    },
    type: "PROJECT_INVITATION",
    metaData: {
      sender: {
        id: 123,
        name: "Amily Johnson",
        profile_pic: Image,
      },
      project: { id: 12, name: "Mouldify" },
    },
    likes: 123,
    shares: 25,
    timeRange: "10:30 am - 22.07.20",
    createdAt: timeSince(0.5),
  },
  {
    id: 2,
    user: {
      id: 101,
      name: "Stella Johnson",
      profile_pic: Image,
    },
    type: "PHOTOS_UPLOADED",
    metaData: {
      user: {
        id: 1234,
        name: "Garry Sobars",
        profile_pic: Image,
      },
      group: "Art Lovers",
      count: 6,
      photos: [
        {
          id: 1,
          photo_url: Image2,
          caption: "Beauty with Beast",
        },
        {
          id: 2,
          photo_url: Image2,
          caption: "Nature Love",
        },
        {
          id: 3,
          photo_url: Image2,
          caption: "Forest",
        },
        {
          id: 4,
          photo_url: Image2,
          caption: "Nature at its best",
        },
        {
          id: 5,
          photo_url: Image2,
          caption: "Sea House",
        },
        {
          id: 6,
          photo_url: Image2,
          caption: "Minimal",
        },
      ],
    },
    likes: 129,
    shares: 25,
    timeRange: "09:30 am - 22.07.20",
    createdAt: timeSince(0.8),
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
      user: {
        id: 124,
        name: "Jacky Roy",
        profile_pic: Image,
      },
      post: { title: "This is Beginning" },
    },
    likes: 5677,
    shares: 345,
    timeRange: "06:30 am - 22.07.20",
    createdAt: timeSince(1),
  },
  {
    id: 4,
    user: {
      id: 105,
      name: "North Taylor",
      profile_pic: Image,
    },
    type: "PROJECT_INVITATION",
    metaData: {
      sender: {
        id: 130,
        name: "Joe Root",
        profile_pic: Image,
      },
      project: { id: 13, name: "Jumbo" },
    },
    likes: 234,
    shares: 86,
    timeRange: "03:30 am - 22.07.20",
    createdAt: timeSince(3),
  },
  {
    id: 5,
    user: {
      id: 756,
      name: "Peter Broad",
      profile_pic: Image,
    },
    type: "PHOTOS_UPLOADED",
    metaData: {
      user: {
        id: 1234,
        name: "James Anderson",
        profile_pic: Image,
      },
      count: 8,
      group: "Javascript Experts",
      photos: [
        {
          id: 1,
          photo_url: Image2,
          caption: "Beauty with Beast",
        },
        {
          id: 2,
          photo_url: Image2,
          caption: "Nature Love",
        },
        {
          id: 3,
          photo_url: Image2,
          caption: "Forest",
        },
        {
          id: 4,
          photo_url: Image2,
          caption: "Nature at its best",
        },
        {
          id: 5,
          photo_url: Image2,
          caption: "Sea House",
        },
        {
          id: 6,
          photo_url: Image2,
          caption: "Minimal",
        },
        {
          id: 7,
          photo_url: Image2,
          caption: "Beauty with Beast",
        },
        {
          id: 8,
          photo_url: Image2,
          caption: "Nature Love",
        },
      ],
    },
    likes: 457,
    shares: 54,
    timeRange: "12:30 am - 22.07.20",
    createdAt: timeSince(8),
  },
  {
    id: 6,
    user: {
      id: 455,
      name: "Rose Taylor",
      profile_pic: Image,
    },
    type: "SHARED_POST",
    metaData: {
      user: {
        id: 765,
        name: "Robert Twose",
        profile_pic: Image,
      },
      post: { title: "Introduction to Javascript" },
    },
    likes: 768,
    shares: 567,
    timeRange: "11:30 pm - 21.07.20",
    createdAt: timeSince(23),
  },
  {
    id: 7,
    user: {
      id: 676,
      name: "Williams Blake",
      profile_pic: Image,
    },
    type: "PROJECT_INVITATION",
    metaData: {
      sender: {
        id: 544,
        name: "Janifer decibel",
        profile_pic: Image,
      },
      project: { id: 16, name: "Wieldy" },
    },
    likes: 856,
    shares: 45,
    timeRange: "10:30 pm - 21.07.20",
    createdAt: timeSince(34),
  },
  {
    id: 8,
    user: {
      id: 906,
      name: "Steve Law",
      profile_pic: Image,
    },
    type: "PHOTOS_UPLOADED",
    metaData: {
      user: {
        id: 786,
        name: "Dhruva Sharma",
        profile_pic: Image,
      },
      count: 3,
      group: "React Lovers",
      photos: [
        {
          id: 1,
          photo_url: Image2,
          caption: "Beauty with Beast",
        },
        {
          id: 2,
          photo_url: Image2,
          caption: "Nature Love",
        },
        {
          id: 3,
          photo_url: Image2,
          caption: "Forest",
        },
      ],
    },
    likes: 768,
    shares: 43,
    timeRange: "09:30 pm - 21.07.20",
    createdAt: timeSince(63),
  },
  {
    id: 9,
    user: {
      id: 678,
      name: "Brett Heavy",
      profile_pic: Image,
    },
    type: "SHARED_POST",
    metaData: {
      user: {
        id: 657,
        name: "Ian hughes",
        profile_pic: Image,
      },
      post: { title: "A road to good development" },
    },
    likes: 76656,
    shares: 4566,
    timeRange: "05:30 pm - 21.07.20",
    createdAt: timeSince(92),
  },
];
