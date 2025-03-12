import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
    const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </a>
  );
};

const Body = (props) => {
    const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-s text-white">
          {children.substring(0, 100)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
    const { id, price, handleAddToCart } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
      <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}> Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
