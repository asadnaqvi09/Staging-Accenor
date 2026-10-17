import { cn } from "@/lib/utils";

export function Container({ className, as: Tag = "div", children, ...props }) {
  return (
    <Tag className={cn("container-site", className)} {...props}>
      {children}
    </Tag>
  );
}
