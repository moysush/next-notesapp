"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center gap-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/notes">Notes</NavLink>
      <NavLink href={"/users"}>Users</NavLink>
      <div className=" ml-auto flex items-center gap-4">
        {session ? (
          <>
            <NavLink href="/notes/new">Create New</NavLink>
            <em className="text-gray-300">{session.user?.name} logged in</em>
            <button onClick={() => signOut()} className="hover:text-gray-300">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
