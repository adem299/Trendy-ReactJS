import { useState, useEffect } from "react";
import { ProductCard } from "../components/Elements/Card/Card";
import { Navbar } from "../components/Fragments/Navbar";
import { Pagination } from "../components/Fragments/Pagination";
import { Sidebar } from "../components/Fragments/SideBar";
import { getProducts } from "../services/product.service";

const username = localStorage.getItem("username");

// const ProductsPage = () => {
//     return (
//         <Navbar username={username}/>
//     );
// }

// export default ProductsPage;

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts((data) => {
          setProducts(data);
          console.log("Fetched Products:", data);
        });
      }, []);
    
  return (
    <>
      <Navbar username={username} />
      <div className="flex mt-20">
        <Sidebar />
        <div className="flex-1 p-5">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">Casual</h2>
                <div className="flex">
                    <p className="text-gray-600">Showing 1-6 of 12 results </p>
                    Sort by:
                </div>
            </div>
          <ProductList products={products} />
          <Pagination />
        </div>
      </div>
    </>
  );
};


const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length > 0 && products.slice(0, 6).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
