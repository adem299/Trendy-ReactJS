import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { registerUser } from "../../services/product.service";


const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.target);
    const nameValue = formData.get("name");
    const usernameValue = formData.get("username");
    const passwordValue = formData.get("password");
    const confirmPasswordValue = formData.get("confirmPassword");

    if (passwordValue !== confirmPasswordValue) {
      alert("Password and confirm password do not match");
      setLoading(false);
      return;
    }

    registerUser(nameValue, usernameValue, passwordValue, (data) => {
      if (data) {
        localStorage.setItem("username", usernameValue);
        console.log("Token saved:", localStorage.getItem("token"));
          window.location.replace("/products");
      } else {
        alert("Registration failed");
      }
      setLoading(false);
    })
  }

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Name"
        type="text"
        name="name"
        placeholder="insert your name here..."
        ref={nameRef}
      />
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="insert your username here..."
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button className="bg-blue-600 w-full" type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Register"}
      </Button>
    </form>
  );
};

export default FormRegister;
