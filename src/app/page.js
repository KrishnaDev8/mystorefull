'use client';
import Link from 'next/link';
import About from '../Components/About';
import Footer from '../Components/Footer';
import ItemCard from '../Components/itemCard';
import { useEffect, useState } from 'react';
import { get } from '../../config/axiosClient';
import ItemCardSkeleton from '../Components/skeleton/itemCardSkeleton';
import { useQueryContext } from '../context/queryContext';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const {searchString, priceRange, categoryId } = useQueryContext();

  async function getAllProducts() {
    try {
      setLoading(true);
      const response = await get(
        `/products?offset=${currentPage}&limit=${20}&price_min=${
          priceRange.min
        }&price_max=${priceRange.max}&title=${searchString}&categoryId=${categoryId}`
      );
      setProducts(response.data);
      
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    getAllProducts();
  }, [currentPage, searchString, priceRange, categoryId]);

  // function handleNextPage() {
  //   setCurrentPage((prev) => prev + 8);
  // }

  // function handlePrevPage() {
  //   setCurrentPage((prev) => prev - 8);
  // }

  return (
    
    // <main className="min-h-screen p-6">
      <main>
      <About />
    
      <div className="flex-center mt-10 justify-center justify-items-center h-c-screen">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Our products
        </h1>
      </div>
      <div
        className="mt-10 mr-10 ml-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
        justify-items-center justify-center gap-4 mb-20"
      >
        {loading
          ? new Array(20)
              .fill('')
              .map((products, index) => <ItemCardSkeleton key={index} />)
          : products.map((product, index) => (
              <Link href={`products/${product.id}`} key={product.id}>
                <ItemCard product={product} />
              </Link>
            ))}
      </div>
      {/* <div className="fixed left-1/2 bottom-5 bg-grey-9 p-4 rounded-lg -translate-x-1/2 flex justify-center gap-8 hover:px-10 transition-all">
        <button
          className="p-4 bg-primaryDark text-sm rounded-lg font-bold text-grey-1 disabled:bg-grey-3"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Prev
        </button>
        <button
          className="p-4 bg-primaryDark text-sm rounded-lg font-bold text-grey-1 disabled:bg-grey-3"
          disabled={products.length  <8}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div> */}
      <Footer />
    </main>
  );
}
