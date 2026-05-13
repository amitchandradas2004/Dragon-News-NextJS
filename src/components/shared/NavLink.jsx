"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  // console.log(pathname);
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`${isActive ? "text-blue-800 font-medium border-b-2 border-blue-700" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
