import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, className } = props;
return (
  <input
    type={type}
    className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50 ${className}`}
    placeholder={placeholder}
    name={name}
    id={name}
    ref={ref}
  />
);
});

export default Input;
