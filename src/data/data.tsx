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
