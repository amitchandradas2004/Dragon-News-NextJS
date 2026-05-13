async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  const category = data.data.news_category;
  return category;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="grid grid-cols-12 container mx-auto gap-4 my-5">
      <div className="col-span-3">
        <h2 className="font-bold text-xl text-center">All Categories</h2>
        <ul className="flex flex-col gap-2 mt-5">
          {categories.map((category) => (
            <button
              key={category.category_id}
              className="p-2 rounded-full font-medium text-center btn"
            >
              {category.category_name}{" "}
            </button>
          ))}
        </ul>
      </div>
      <div className="font-bold text-xl bg-blue-200 col-span-6">All News</div>
      <div className="font-bold text-xl bg-purple-200 col-span-3">
        Social Icons
      </div>
    </div>
  );
}
