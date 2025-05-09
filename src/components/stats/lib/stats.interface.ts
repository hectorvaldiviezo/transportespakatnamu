import * as LucideReact from "lucide-react";

type IconNames = keyof typeof LucideReact;

export interface StatsResource {
  id: number;
  title: string;
  description: string;
  icon: IconNames;
  number: number;
  symbol?: string;
  company_id: number;
  company?: string;
  url?: string;
}
