"use client";

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

  if (user) {
    return (
      <nav className="fixed inset-0 flex justify-between items-center px-20 h-20 w-[99vw] 2xl:w-screen text-white">
        <div className="flex items-center w-full">
          <p className="uppercase tracking-wider">V Meet</p>
          <div className="ml-auto flex items-center">
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
              <DropdownMenuContent className="absolute right-0 mt-2">
                <DropdownMenuLabel>{user.firstName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton>Sign out</SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    );
  } else return <></>;
};

export default Navbar;
