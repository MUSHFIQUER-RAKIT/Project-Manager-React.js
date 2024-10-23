import {
  Calendar,
  Contact,
  Dashboard,
  Kanban,
  Messages,
  Projects,
  Settings,
} from "../Component/svg";

export const NavData = [
  {
    id: crypto.randomUUID(),
    title: "Dashboard",
    icon: Dashboard,
  },
  {
    id: crypto.randomUUID(),
    title: "Projects",
    icon: Projects,
  },
  {
    id: crypto.randomUUID(),
    title: "Contact",
    icon: Contact,
  },
  {
    id: crypto.randomUUID(),
    title: "Kanban",
    icon: Kanban,
  },
  {
    id: crypto.randomUUID(),
    title: "Calendar",
    icon: Calendar,
  },
  {
    id: crypto.randomUUID(),
    title: "Messages",
    icon: Messages,
  },
  {
    id: crypto.randomUUID(),
    title: "Settings",
    icon: Settings,
  },
];
