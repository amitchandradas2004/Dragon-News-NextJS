import Marquee from "react-fast-marquee";
const news = [
  {
    _id: 1,
    title: "Breaking News : Major Event Unfolds in the city",
  },
  {
    _id: 2,
    title: "Breaking News : New Policy Announced by the Government",
  },
  {
    _id: 3,
    title: "Breaking News : Sports team wins Championship",
  },
];
const BreakingNewsPage = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex justify-center items-center bg-gray-200 p-2 rounded-md">
        <button className="btn bg-red-700 text-white">Latest</button>
        <Marquee className="font-medium" pauseOnHover={true} speed={40}>
          {news.map((n) => (
            <span key={n._id}>{n.title}</span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNewsPage;
