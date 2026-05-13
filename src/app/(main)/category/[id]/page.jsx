import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import RightSideBar from "@/components/homePage/news/RightSideBar";
async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  const category = data.data.news_category;
  return category;
}
async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data;
}
const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const categories = await getCategories();
  // console.log(categories);
  const news = await getNewsByCategoryId(id);
  // console.log(news);
  return (
    <div className="grid grid-cols-12 container mx-auto gap-4 my-5">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />{" "}
      </div>
      <div className="  bg-blue-200 col-span-6">
        <div>
          {news.data.length > 0 ? (
            news.data.map((n) => <div key={n._id}> {n.title}</div>)
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
