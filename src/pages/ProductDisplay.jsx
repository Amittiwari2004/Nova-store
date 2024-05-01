import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import product from "../data/all_product.js";
import Breadcrumb from "../components/Breadcum/Breadcum.jsx";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(ProductContext); // Use useContext to access context

  const productId = parseInt(id);
  const selectedProduct = product.find((p) => p.id === productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }
  console.log("cart>>", cart);
  const breadcrumbLinks = [
    { to: "/", label: "Home" },
    { to: "/search", label: "Search" },
    {
      to: `/product/${id}`,
      label: selectedProduct ? selectedProduct.name : "Product",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => prevQuantity + change);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    // navigate("/cart", { state: { product: selectedProduct, quantity } });
    // add items to the cart
    addToCart({ productId: selectedProduct.id, quantity });
  };

  return (
    <div className="max-w-8xl mx-auto py-10 px-6">
      <Breadcrumb links={breadcrumbLinks} />
      <div className="bg-black p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={selectedProduct.images[selectedImageIndex].src}
              alt={selectedProduct.images[selectedImageIndex].alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="flex justify-center mt-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-16 h-16 rounded-full mx-1 cursor-pointer border-2 ${
                    index === selectedImageIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedProduct.name}
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              ${selectedProduct.price} USD
            </p>
            <div className="mb-4">
              <span className="text-white font-bold mr-2">Color:</span>
              {selectedProduct.colors.map((color) => (
                <span
                  key={color}
                  className={`text-gray-300 mr-2 px-2 py-1 rounded-full cursor-pointer ${
                    color === selectedColor
                      ? "bg-blue-500 text-white"
                      : `bg-[${color}]`
                  }`}
                  onClick={() => handleColorChange(color)}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="mb-6">
              <span className="text-white font-bold mr-2">Size:</span>
              {selectedProduct.sizes.map((size) => (
                <span
                  key={size}
                  className={`text-gray-300 mr-2 px-2 py-1 rounded-full cursor-pointer ${
                    size === selectedSize ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-6">{selectedProduct.description_}</p>
            <div className="flex items-center mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l disabled:bg-gray-500 disabled:cursor-not-allowed"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="text-white font-bold mx-4">{quantity}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleAddToCart}
            >
              Add To Cart ({quantity})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
