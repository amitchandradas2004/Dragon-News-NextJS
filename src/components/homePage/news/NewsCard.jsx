import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewsCard = ({ news }) => {
  // console.log(news);
  const { author, title, details, image_url, rating, total_view, _id } = news;
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden mb-5 shadow-xl bg-gray-100">
      <div className="flex justify-between items-center bg-gray-100 p-2  ">
        <div className="flex items-center gap-2">
          <Image
            src={author.img}
            alt={title}
            height={60}
            width={60}
            className="rounded-full"
          />
          <span>
            {" "}
            <h2 className="font-bold">{author.name}</h2>
            <p>{author.published_date}</p>
          </span>
        </div>
        <div className="text-gray-500 flex gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <h2 className="text-xl font-bold p-2">{title}</h2>
      <div className="p-2">
        <Image
          src={image_url}
          alt={title}
          height={50}
          width={350}
          className="rounded-2xl mx-auto w-full "
        />
        <p className="text-xs opacity-70 p-2 line-clamp-3">{details}</p>
      </div>
      <div className="flex justify-between items-center py-3 p-2">
        <div>
          <span className="flex items-center">
            <span className="flex text-[#FF8C47] gap-1">
              {" "}
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
            <h3 className="font-bold pl-2">{rating.number}</h3>
          </span>
        </div>
        <div className="flex items-center font-bold gap-1">
          <span className="text-xl">
            <MdOutlineRemoveRedEye />
          </span>
          <h4>{total_view}</h4>
        </div>
      </div>
      <div className="pl-3 pb-3">
        <Link href={`/news/${_id}`}>
          <button className="btn btn-primary rounded-full">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
