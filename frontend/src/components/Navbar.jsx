import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-100 h-16 flex justify-center border-b transition-colors duration-300">
      <div className="w-full max-w-6xl flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <img src="https://i.im.ge/2024/09/27/kdlet6.logo-removebg-preview.png" alt="logo" className="w-34 h-12" />
        </Link>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-4">
          {/* New elements */}
          <Link to={"/offers"} className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-bold">
            Offers
          </Link>
          <Link to={"/customer-service"} className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-bold">
            Customer Service
          </Link>
          <img src="https://i.im.ge/2024/09/27/kdlCkq.profile.jpeg" alt="Profile Photo" className="w-12 h-12 rounded-full" />
          <Link to={"/login"} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
            Sign in / Register
          </Link>

          
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;