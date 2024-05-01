import React from "react";
import { Link } from "react-router-dom";
import product from "../data/all_product";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Hero = () => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-4 bg-zinc-900">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-zinc-900">
          {/* Large Container */}
          <div className="md:col-span-3 p-4 bg-black rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              {/* Product Image */}
              <div className="md:w-1/2">
                <img
                  src={product[18].images[0].src}
                  alt="Product Image"
                  className="mx-auto max-w-full"
                />
              </div>
              {/* Product Details */}
              <div className="md:w-1/2 md:ml-8">
                <h2 className="text-white text-2xl font-bold mb-4">
                  {product[17].name}
                </h2>
                <p className="text-gray-400 mb-6">{product[18].description}</p>
                <div className="flex items-center">
                  <Link to={`/product/${product[18].id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                      Buy Now
                    </button>
                  </Link>
                  <span className="text-white ml-4">{`$ ${product[18].price} USD`}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Container */}
          <div className="md:col-span-1 p-4 bg-black rounded-lg">
            {/* Product Image */}
            <div className="mb-4">
              <img
                src={product[3].images[0].src}
                alt="Product Image"
                className="mx-auto max-w-full"
              />
            </div>
            {/* Product Details */}
            <div className="md:w-full flex flex-col items-center">
              <h3 className="text-white text-2xl font-bold mb-2 text-center ml-9">
                {product[3].name}
              </h3>
              <p className="text-gray-400 mb-4 text-center mr-10">
                {product[3].description}
              </p>
              <div className="flex items-center justify-center mb-4">
                <Link to={`/product/${product[3].id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Buy Now
                  </button>
                </Link>
                <span className="text-white ml-4">{`$ ${product[3].price} USD`}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Our Products Section */}
        <div className="mt-8">
          <h2 className="text-white text-3xl font-bold mb-4">Our Products</h2>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Hero;
