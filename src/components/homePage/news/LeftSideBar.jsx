import Link from "next/link";

const LeftSideBar = async ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-xl text-center">All Categories</h2>
      <ul className="flex flex-col gap-2 mt-5">
        {categories.map((category) => (
          <Link
            href={`/category/${category.category_id}`}
            key={category.category_id}
            className={`
              ${activeId === category.category_id && "btn-primary"}
              btn p-2 rounded-full font-medium text-center`}
          >
            {category.category_name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
