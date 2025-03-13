import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { Navbar } from "../components/Fragments/Navbar";

// let products = [
//   {
//     id: 1,
//     image: "/images/product-1.jpg",
//     title: "New Shoes",
//     price: 99,
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quisquam
//           quasi pariatur fugiat ratione est nam. Recusandae, autem id eligendi
//           dolorem suscipit dolor ducimus hic dolores. Molestiae vitae error
//           perferendis?`,
//   },
//   {
//     id: 2,
//     image: "/images/product-1.jpg",
//     title: "Popluar Shoes",
//     price: 199,
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quisquam
//           quasi pariatur fugiat ratione est nam. Recusandae, autem id eligendi
//           dolorem.`,
//   },
//   {
//     id: 3,
//     image: "/images/product-1.jpg",
//     title: "Super Red Shoes",
//     price: 500,
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quisquam
//           quasi pariatur fugiat ratione est nam.`,
//   },
// ];

const username = localStorage.getItem("username");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

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
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));

    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart])

  return (
    <>
      < Navbar username={username}/>
      < HeroSection />
      <div className="flex justify-center py-5 gap-3 h-screen pt-24">
        <div className="flex px-5 w-3/4 flex-wrap gap-2">
          {products.length > 0 && products.map((product) => (
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
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.length > 0 ? (
              ""
            ) : (
              <p className="text-slate-500">Cart is empty</p>
            )}
          </ul>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {(product.price * item.quantity).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};



function Card({ children, className }) {
  return <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>{children}</div>;
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Elevate Your Style with <br /> Trendy Style
            </h2>
            <p className="text-gray-600 mb-4">
              Discover the perfect blend of comfort and fashion with
              <span className="font-semibold"> our latest collection of premium clothes.</span>
            </p>
            <Button className="bg-black text-white px-10 py-2 rounded-full">Shop Now →</Button>
          </div>
          <Card className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
            <CardContent>
              <div className="flex justify-between items-center ">
                <div>
                  <span className="bg-white text-black px-2 py-1 rounded-full text-sm">100% Cotton Fabric</span>
                  <h3 className="text-2xl font-semibold mt-4">Trendy Oversized T-Shirt</h3>
                  <p className="text-sm mt-2">Soft, breathable, and perfect for any occasion.</p>
                  <p className="text-xl font-bold mt-4">$29.99</p>
                  <Button className="mt-4 text-black bg-white px-4 py-2 rounded-full">View More →</Button>
                </div>
                <div className="w-5/6 h-4/6">
                  <img
                    src="/images/banner.png"
                    alt="T-Shirt Banner"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;
