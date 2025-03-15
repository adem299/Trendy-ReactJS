
import { Search } from "lucide-react";
import Input from "../Elements/Input/Input";

export default function SearchBar() {
    return (
      <div className="relative w-full max-w-md">
        {/* <Search className="left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" /> */}
        <Input
          type="text"
          placeholder="Search for products..."
          className="rounded-xl"
          name="search"
        />
      </div>
    );
}
