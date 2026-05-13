import Link from "next/link";
export const metadata = {
  title: "Not Found Page",
  description: "This page is not found",
};
const NotFoundPage = () => {
  return (
    <div className="h-screen bg-red-200 text-center flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold">
        {" "}
        Opps, this page does not exists. <br /> Sorry for the issue.
      </h3>
      <Link href="/">
        <button className="btn rounded-full w-50 font-bold text-red-800 btn-accent mt-5">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
