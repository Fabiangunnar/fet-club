export const navData: NavType[] = [
  {
    id: 1,
    state: true,
    head: "Home",
    link: "/",
  },
  {
    id: 2,
    state: false,
    head: "About Us",
    link: "#about",
  },
  {
    id: 3,
    state: false,
    head: "Gallery",
    link: "/gallery",
  },
  {
    id: 4,
    state: false,
    head: "Kits",
    link: "/kits",
  },
  {
    id: 5,
    state: false,
    head: "Events",
    link: "/events",
  },
  {
    id: 6,
    state: false,
    head: "Rentals",
    link: "/rentals",
  },
  {
    id: 7,
    state: false,
    head: "Dungeon Rules",
    link: "/dungeon",
  },
  {
    id: 8,
    state: false,
    head: "Membership",
    link: "/membership",
  },
];

export interface NavType {
  id: number;
  state: boolean;
  head: string;
  link: string;
}

export const gallery_images = [
  "/gallery/23.jpg",
  "/gallery/22.jpg",
  "/gallery/1.jpeg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/8.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
];
