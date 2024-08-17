import ProductCard from "../../UI/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../UI/RedSubHeading";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";

const ExploreSection = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => {
        const formattedProducts = json.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          rating: product.rating.rate,
          ratingCount: product.rating.count,
        }));

        const selectedProducts = [];
        while (selectedProducts.length < 8 && formattedProducts.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * formattedProducts.length
          );
          selectedProducts.push(formattedProducts.splice(randomIndex, 1)[0]);
        }

        setProducts(selectedProducts);
      });
  }, []);

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="explore-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Our Products" />
      <Heading text="Explore Our Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
    </div>
  );
};

export default ExploreSection;
