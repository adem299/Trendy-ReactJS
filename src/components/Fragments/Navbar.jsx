import Button from "../Elements/Button";
import { ShoppingCart, Search, User, Menu, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {username} = props;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    setIsOpen(false);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white p-4 shadow-md">
      <h1 className="text-xl font-bold px-5">Trendy</h1>
      <div className="flex gap-8">
        <a className="p-1 border-b-2 border-transparent hover:border-b-2 hover:border-gray-700 transition cursor-pointer">Products</a>
        <a className="p-1 border-b-2 border-transparent hover:border-b-2 hover:border-gray-700 transition cursor-pointer">About</a>
        <a className="p-1 border-b-2 border-transparent hover:border-b-2 hover:border-gray-700 transition cursor-pointer">Contact</a>

      </div>
      <div className="flex gap-4 relative">
        {/* <a className="bg-gray-50 p-1 rounded-full hover:bg-gray-300 px-2">
          <Search className="w-6 h-6 text-gray-700" />
        </a> */}
        <a className="bg-gray-50 p-1 rounded-full hover:bg-gray-300 px-2">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
        </a>
        <a
          className="bg-gray-50 p-1 rounded-full hover:bg-gray-300 px-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <User className="w-6 h-6 text-gray-700" />
        </a>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-12 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-10"
          >
            <div className="flex items-center w-full px-4 py-4 text-gray-700 hover:bg-gray-100 hover:rounded-lg">
                <User className="w-6 h-6 text-gray-700 mr-2" />
                <h2>{username}</h2>
            </div>
            <a
              href="#"
              className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-lg"
            >
              <Menu className="w-5 h-5 mr-2" /> Manage Account
            </a>
            <a
              className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-lg"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-2"/> Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
