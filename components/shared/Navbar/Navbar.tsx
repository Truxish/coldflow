import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex-between 
    background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300
    dark:sahdow-none sm:px-12"
    >
      <Link href="/" className="flex items-center gap-1">
        <p className="h2-bold font-space_grotesk text-violet-700 dark:text-violet-700 max-sm:hidden">
          Coldflow
        </p>
      </Link>
      Global search feature
      <div className="flex-btween gap-5">
        theme
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#6225C6",
              },
            }}
          />
        </SignedIn>
        Mobile Nav
      </div>
    </nav>
  );
};

export default Navbar;
