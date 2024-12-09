import { ModeToggle } from "@/components/mode-toggle";
import { Dock, DockIcon } from "@/components/ui/dock";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Icons } from "./ui/icons";

const navLinks = [
  {
    title: "Home",
    link: "/",
    icon: <Icons.home className="size-full" />,
  },
  {
    title: "Blog",
    link: "/blog",
    icon: <Icons.writing className="size-full" />,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/thekarthikr",
    icon: <Icons.linkedin className="size-full" />,
  },
  {
    title: "X",
    link: "https://x.com/thekartik",
    icon: <Icons.x className="size-full" />,
  },
  {
    title: "Github",
    link: "https://github.com/thekarthikr",
    icon: <Icons.github className="size-full" />,
  },
];

export default function Navbar() {
  return (
    <div className="fixed bottom-3 z-50 w-full items-center">
      <Dock
        magnification={70}
        distance={100}
        className="max-h-14 gap-5 bg-neutral-100 backdrop-blur-md dark:bg-neutral-950/40"
      >
        {navLinks.map(({ title, link, icon }) => (
          <DockIcon key={title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={link}
                  className="rounded-full bg-black/10 p-3 dark:bg-white/10"
                  target={link.startsWith("https") ? "_blank" : "_self"}
                >
                  {icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title} </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p> Toggle Theme </p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
