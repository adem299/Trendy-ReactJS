const Button = (props) => {
  const {
    children,
    className = "bg-black text-white",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
