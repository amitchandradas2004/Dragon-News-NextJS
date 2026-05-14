"use client";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Avater from "@/assets/user.png";
import { signOut } from "../../lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session, isPending);
  // console.log(user.name);
  // console.log(user.image);

  return (
    <div className="flex justify-between items-center py-2 container mx-auto">
      <div>
        {/* <h2>This is the user name</h2> */}
        {user ? <h2 className="font-semibold">Hello, {user.name}</h2> : ""}
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"}>Carrer</NavLink>
          </li>
        </ul>
      </div>
      {isPending ? (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-spinner text-primary w-10"> </span>
        </div>
      ) : user ? (
        <div className="flex items-center gap-2">
          <Image
            src={user.image || Avater}
            alt={"amit"}
            height={60}
            width={60}
            className="rounded-full border"
          />
          <button className="btn" onClick={async () => await signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="btn btn-neutral w-20 rounded-full">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
