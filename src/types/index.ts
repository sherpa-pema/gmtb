import { LucideIcon } from "lucide-react";

export interface NavItem {
  l: string;
  id: string;
}

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface TourImage {
  url: string;
  title: string;
}

export interface Tour {
  name: string;
  sub: string;
  desc: string;
  accent: string;
  meta: string;
  bullets: string[];
  gallery: TourImage[];
}

export interface ThinAirStat {
  k: string;
  l: string;
  icon: LucideIcon;
}

export interface EnduroStat {
  k: string;
  v: string;
}

export interface TeamMember {
  name: string;
  role: string;
  since: string;
  bio: string;
}
