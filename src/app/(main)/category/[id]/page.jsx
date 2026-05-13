import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBar from "@/components/homePage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);
  return (
    <div className="grid grid-cols-12 container mx-auto gap-4 my-5">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />{" "}
      </div>
      <div className="col-span-6">
        <h2 className="font-bold text-xl text-center">Dragon News Home</h2>
        <div>
          {news.data.length > 0 ? (
            news.data.map((n) => <NewsCard key={n._id} news={n}></NewsCard>)
          ) : (
            <div className="text-5xl font-bold text-center">no data found</div>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
