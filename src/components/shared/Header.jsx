import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
export const metadata = {
  title: "Header Page",
  description: "This is the Header Page",
};
const Header = () => {
  return (
    <div className="py-5 text-center space-y-2">
      <Image
        src={logo}
        alt="logo"
        height={200}
        width={300}
        className="mx-auto"
      />
      <p className="font-medium opacity-80">
        Journalism Without Fear or Favour
      </p>
      <p className="font-semibold">
        {format(new Date(), "EEEE, MMM-dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
