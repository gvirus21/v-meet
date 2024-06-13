"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="fixed inset-0 flex justify-between h-20 px-24 py-6 text-white">
      <p className="uppercase tracking-wider">Veet</p>

      <div className="flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              className="h-8 w-8 rounded-full bg-white cursor-pointer"
              height={100}
              width={100}
              alt="profile"
              src={user?.imageUrl || ""}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 mr-20">
            <DropdownMenuLabel>{user?.firstName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log("logout")}>
              <SignOutButton>Sign out</SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
