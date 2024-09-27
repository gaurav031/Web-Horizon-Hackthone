import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-800 h-12 flex justify-center">
      <div className="w-full max-w-5xl text-white flex items-center justify-between px-4">
        <Link to="/" className="text-white no-underline">
          <span className="font-medium text-xl">lamabooking</span>
        </Link>
        <div className="space-x-4">
          <button className="px-4 py-1 bg-white text-blue-800 rounded-md">
            Register
          </button>
          <button className="px-4 py-1 bg-white text-blue-800 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
