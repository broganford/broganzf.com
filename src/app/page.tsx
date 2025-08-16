"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import avatar from "../public/avatar.png";
import Link from "next/link";

export default function Home() {
  const data = {
    name: "Brogan Ford",
    contact: "contact@broganzf.com",
    github: "https://github.com/broganford",
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Link
        href={"/resources"}
        className="border border-zinc-800
            hover:border-zinc-700 px-15 py-1 rounded-md hover:bg-zinc-800 transition-colors duration-400 ease-in-out"
      >
        <p>/resources</p>
      </Link>

      <HoverCard>
        <div className="flex items-center gap-3">
          <HoverCardTrigger asChild>
            <div
              className="flex items-center p-4 gap-3 border rounded-lg border-zinc-800
            hover:bg-zinc-800 hover:border-zinc-700
            transition-all duration-400 ease-in-out"
            >
              <Image
                className="rounded-full hover:scale-115 transition-transform duration-400 ease-in-out"
                src={avatar}
                width={40}
                height={40}
                alt="Avatar"
              />
              <div>
                <div className="relative inline-block group">
                  <Link
                    className="text-sm font-medium"
                    href={data.github}
                    target="_blank"
                  >
                    {data.name}
                  </Link>
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-300 transform scale-x-0 origin-left 
    group-hover:scale-x-100 transition-transform duration-300"
                  />
                </div>

                <div />
                <div className="relative inline-block group">
                  <Link
                    className="text-muted-foreground text-xs"
                    href={`mailto:${data.contact}`}
                    target="_blank"
                  >
                    {data.contact}
                  </Link>
                  <span
                    className="absolute inset-x-0 bottom-0 h-px bg-zinc-300 transform scale-x-0 origin-left 
    group-hover:scale-x-100 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </HoverCardTrigger>
        </div>
        <HoverCardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full hover:scale-115 transition-transform duration-400 ease-in-out"
                src={avatar}
                width={40}
                height={40}
                alt="Avatar"
              />
              <div>
                <div className="relative inline-block group">
                  <Link
                    className="text-sm font-medium"
                    href={data.github}
                    target="_blank"
                  >
                    {data.name}
                  </Link>
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-300 transform scale-x-0 origin-left 
    group-hover:scale-x-100 transition-transform duration-300"
                  />
                </div>

                <div />
                <div className="relative inline-block group">
                  <Link
                    className="text-muted-foreground text-xs"
                    href={`mailto:${data.contact}`}
                    target="_blank"
                  >
                    {data.contact}
                  </Link>
                  <span
                    className="absolute inset-x-0 bottom-0 h-px bg-zinc-300 transform scale-x-0 origin-left 
    group-hover:scale-x-100 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">High School Student</p>
            <p className="text-muted-foreground text-sm">Plays track</p>
            <p className="text-muted-foreground text-sm">
              Has a hobby of coding
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
