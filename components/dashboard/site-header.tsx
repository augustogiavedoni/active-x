import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SiteHeaderProps = {
  title: string;
  button?: {
    url: string;
    text: string;
    icon?: LucideIcon;
  };
};

export function SiteHeader({ title, button }: SiteHeaderProps) {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-1">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">{title}</h1>
        </div>
        {button && (
          <Button asChild>
            <Link href={button.url}>
              {button.icon && <button.icon />}
              <span>{button.text}</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}
