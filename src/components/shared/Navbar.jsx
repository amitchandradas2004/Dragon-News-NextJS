import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 container mx-auto">
      <div></div>
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
      <div className="flex items-center gap-2">
        <span className="border rounded-full p-1">
          {" "}
          <FaUserAlt className="w-8 h-8" />
        </span>
        <Link href={"/login"}>
          <button className="btn btn-neutral w-20 rounded-full">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
