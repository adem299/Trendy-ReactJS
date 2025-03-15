export const Sidebar = () => {
    return (
      <div className="w-1/4 ml-2 p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-4">Filters</h3>
        <div>
          <h4 className="font-semibold">Categories</h4>
          <ul>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Jeans</li>
          </ul>
        </div>
      </div>
    );
};