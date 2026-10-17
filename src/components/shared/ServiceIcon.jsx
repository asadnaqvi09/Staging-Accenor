import {
  BookOpen,
  Building2,
  FileText,
  Globe2,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  bookOpen: BookOpen,
  globe: Globe2,
  fileText: FileText,
  building: Building2,
  chart: LineChart,
};

export function ServiceIcon({ name, className, iconClassName }) {
  const Icon = icons[name] || BookOpen;

  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-xl bg-accent-green-soft text-brand",
        className,
      )}
    >
      <Icon className={cn("size-5", iconClassName)} aria-hidden />
    </span>
  );
}
