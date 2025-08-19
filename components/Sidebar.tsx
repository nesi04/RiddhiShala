"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Activity, Flag, User, User2 } from "lucide-react";

export function SidebarDemo() {
  const links = [
    {
      label: "Logs",
      href: "/admin/logs",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
   
    // {
    //   label: "Settings",
    //   href: "/admin/settings",
    //   icon: (
    //     <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    //   ),
    // },
    {
      label: "Progress Report",
      href: "/admin/progress-report",
      icon: (
        <Activity className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Flagged Issues",
      href: "/admin/progress-report",
      icon: (
        <Flag className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex  flex-col overflow-x-hidden overflow-y-auto">
            <Logo/>
            <div className="mt-8 flex flex-col gap-2 font-bold text-2xl">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} className="flex gap-10" />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "SuperUser",
                href: "/admin/profile",
                icon: (
                  <IconUserBolt/>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    
    
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
       Riddhi Shala
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};



