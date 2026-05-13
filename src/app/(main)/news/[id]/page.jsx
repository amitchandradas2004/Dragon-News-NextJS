import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  const { image_url, title, details } = news;

  return (
    <div className="container mx-auto grid grid-cols-6">
      <div className="col-span-4 border border-gray-400 bg-gray-100 shadow-2xl p-2 rounded-2xl">
        <div>
          <Image
            src={image_url}
            alt={title}
            height={50}
            width={100}
            className="w-full rounded-2xl"
          />
          <h3 className="font-bold text-xl p-2">{title}</h3>
          <p className="text-xs opacity-70 p-2">{details}</p>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn bg-red-600 text-white rounded-full">
              <FaArrowLeftLong />
              All news in this category
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default NewsDetailsPage;
