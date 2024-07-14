"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Productcard from "./Productcard";

function AllProducts() {
  const [allProducts, setAllProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const postperpage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://timbu-get-all-products.reavdev.workers.dev/`,
          {
            params: {
              organization_id: "22a1161314a84e37ab1c2fbf75025905",
              reverse_sort: "false",
              page: currentPage,
              size: 10,
              Appid: process.env.NEXT_PUBLIC_APP_ID,
              Apikey: process.env.NEXT_PUBLIC_API_KEY,
            },
          },
        );

        if (response?.data && response?.data?.items) {
          setAllProduct(response?.data?.items);
        } else {
          throw new Error("No data found for the given identifiers");
        }
        setIsLoading(false);
      } catch (error) {
        setError(error?.message || "Failed to fetch products");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  if (error) {
    return (
      <>
        <div>
          <p className="text-red-500 font-bold">Error Fetching Product</p>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <div className="w-full mx-auto grid grid-cols-4 gap-4 py-4">
          <div className="h-80 w-full bg-gray-300 animate-pulse rounded-lg "></div>

          <div className="h-80 w-full bg-gray-300 animate-pulse rounded-lg "></div>
          <div className="h-80 w-full bg-gray-300 animate-pulse rounded-lg "></div>
          <div className="h-80 w-full bg-gray-300 animate-pulse rounded-lg "></div>
        </div>
      </>
    );
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastProduct = currentPage * postperpage;
  const indexOfFirstProduct = indexOfLastProduct - postperpage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(allProducts?.length / postperpage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        {currentProducts?.map((product) => (
          <Productcard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Previous button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="border border-gray-500 text-gray-500 px-4 py-2 rounded-md mr-2"
        >
          Previous
        </button>
        {/* Page number buttons */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`border border-gray-500 text-primarycolor px-4 py-2 rounded-md mx-1 ${
              currentPage === number ? "bg-black" : ""
            }`}
          >
            {number}
          </button>
        ))}
        {/* Next button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-primarycolor text-white px-4 py-2 rounded-md ml-2"
        >
          Next
        </button>{" "}
      </div>
    </>
  );
}

export default AllProducts;
