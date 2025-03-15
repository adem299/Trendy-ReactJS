import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { Navbar } from "../components/Fragments/Navbar";
import HeroSection from "../components/Fragments/HeroSection";
import About from "../components/Fragments/About";
import CustomerReviews from "../components/Fragments/CustomerReviews";

const username = localStorage.getItem("username");

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const totalPriceRef = useRef(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.quantity : 0);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  useEffect(() => {
    if (totalPriceRef.current) {
      totalPriceRef.current.style.display = cart.length > 0 ? "table-row" : "none";
    }
  }, [cart]);

  return (
    <>
      <Navbar username={username} />
      <HeroSection />
      <div className="flex-col justify-center py-5 pt-24">
        <h1 className="text-4xl font-bold text-center pb-10">Weekly Collections</h1>
        <div className="flex flex-wrap gap-4 max-w-screen-lg mx-auto justify-center">
          {products.length > 0 && products.slice(0, 6).map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
          <div className="w-full flex justify-center mt-2 mb-10">
            <button className="text-black font-semibold border border-gray-800 px-10 py-2 rounded-3xl cursor-pointer hover:bg-gray-800 hover:text-white">
              View More
            </button>
          </div>
        </div>
      </div>
      <About />
      <CustomerReviews />
    </>
  );
};

export default HomePage;