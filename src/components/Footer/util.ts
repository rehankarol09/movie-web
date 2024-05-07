import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
interface FooterLink {
  icon: any;
  name: string;
  link: string;
  id: number;
}

export const FooterLink:FooterLink[] = [
  {
    icon: WhatshotRoundedIcon,
    name: "Trending",
    link: "/",
    id: 1,
  },
  {
    icon: TheatersRoundedIcon,
    name: "In Theatres",
    link: "/new",
    id: 2,
  },
  {
    icon: UpcomingIcon,
    name: "Upcoming",
    link: "/upcoming",
    id: 3,
  },
];
