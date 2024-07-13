"use client";

import { ProductContext } from "@/context/ProductContext";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

function SingleProduct({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { cartItems, setCartItems } = useContext(ProductContext);

  const addToCart = () => {
    const product = { id, name, current_price, review, sold, photos };
    setCartItems((prevItems) => [...prevItems, product]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const currentPage = 1; // Define the current page or derive it from somewhere

        const response = await axios.get(`/api/products/${productId}?`, {
          params: {
            organization_id: "22a1161314a84e37ab1c2fbf75025905",
            reverse_sort: "false",
            page: currentPage,
            size: 10,
            Appid: "LNMFWUMQW03F5IY",
            Apikey: "ffc05d0b42e046aa9f44d792cd4fe8cf20240713032447319882",
          },
        });

        if (response) {
          setProduct(response?.data);
          console.log(response); // Log the actual response
        } else {
          throw new Error("No data found for the given identifiers");
        }
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error(error); // Log the error
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg">
          {product.photos?.map((photo) => (
            <Image
              key={photo.id}
              src={`https://api.timbu.cloud/images/${photo.url}`}
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
              alt="Product Photo"
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <p className="text-lg">NGN {product?.current_price}.00</p>
          <p>{product.description}</p>
          <button
            onClick={addToCart}
            className="px-4 py-2 bg-primarycolor text-white rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
