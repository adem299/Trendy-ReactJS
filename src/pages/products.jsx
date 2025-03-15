import { ProductCard } from "../components/Elements/Card/Card";
import { Navbar } from "../components/Fragments/Navbar";
import { Pagination } from "../components/Fragments/Pagination";
import { Sidebar } from "../components/Fragments/SideBar";

const username = localStorage.getItem("username");

// const ProductsPage = () => {
//     return (
//         <Navbar username={username}/>
//     );
// }

// export default ProductsPage;



const ProductsPage = () => {
  return (
    <>
    <Navbar username={username}/>
    <div className="flex mt-24">
      <Sidebar />
      <div className="flex-1 p-5">
        <h2 className="text-2xl font-bold mb-4">Casual</h2>
        <ProductList />
        <Pagination />
      </div>
    </div>
    </>
  );
};

const products = [
  { id: 1, name: "Gradient Graphic T-shirt", price: "$145", rating: 3.5 },
  { id: 2, name: "Polo with Tipping Details", price: "$180", rating: 4.5 },
  { id: 3, name: "Black Striped T-shirt", price: "$120", rating: 5.0 },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default ProductsPage;
