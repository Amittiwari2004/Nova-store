import React from 'react';
import products from '../../data/product';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  return (
    <div className="bg-black p-4 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-zinc-900 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-white font-bold">{product.name}</h3>
              <p className="text-gray-400 text-sm">{product.description}</p>
              <div className="flex justify-around gap-5 text-center">
              <p className="text-white mt-2">${product.price.toFixed(2)} USD</p>
              <Link to={`/product/${product.id}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
                BUY NOW
              </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;