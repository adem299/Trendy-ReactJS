import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";

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
    if(cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart])

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username ? <p>Hello, {username}</p> : <p>Hello Guest</p>}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-3">
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

export default ProductPage;
