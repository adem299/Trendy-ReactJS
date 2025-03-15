const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p>
        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
      </p>
    </div>
  );
};

export { Card, CardContent, ProductCard };
