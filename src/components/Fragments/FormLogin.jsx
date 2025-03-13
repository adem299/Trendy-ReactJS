import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { loginUser } from "../../services/users.service.js";

const FormLogin = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
  
    const formData = new FormData(event.target);
    const usernameValue = formData.get("username");
    const passwordValue = formData.get("password");
  
    console.log("Username:", usernameValue);
  
    loginUser(usernameValue, passwordValue, (data) => {
  
      if (data?.token) {
        localStorage.setItem("username", usernameValue);
        localStorage.setItem("token", data.token);
  
        console.log("Token saved:", localStorage.getItem("token"));
  
          window.location.replace("/products");
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="insert your username here..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button className="bg-blue-600 w-full" type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default FormLogin;

