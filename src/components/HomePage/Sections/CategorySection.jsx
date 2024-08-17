import { categories } from "../../../data/categories";
import RedSubHeading from "../../UI/RedSubHeading";
import Heading from "../../UI/Heading";

const CategorySection = () => {
  return (
    <div className="category-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Categories" />
      <Heading text="Browse By Category" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 md:p-8 border rounded-md hover:bg-red-100 transition"
          >
            <img
              src={`/assets/${category.icon}`}
              alt={category.label}
              className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4"
            />
            <span className="text-sm md:text-md">{category.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-16 border-b border-gray-200"></div>
    </div>
  );
};

export default CategorySection;
