import React from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-pink-600">
                            ❤️ MatchMaker
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
                        <Link to="/search" className="text-gray-700 hover:text-pink-600">Search</Link>
                        <Link to="/profiles" className="text-gray-700 hover:text-pink-600 border border-black px-4 py-2 rounded">
                            Matches
                        </Link>

                        <Link to="/messages" className="text-gray-700 hover:text-pink-600">Messages</Link>
                        <Link to="/profile" className="text-gray-700 hover:text-pink-600">Profile</Link>
                    </div>

                    {/* <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div> */}
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4">
                    <Link to="/" className="block py-2 text-gray-700 hover:text-pink-600">Home</Link>
                    <Link to="/search" className="block py-2 text-gray-700 hover:text-pink-600">Search</Link>
                    <Link to="/profiles" className="block py-2 text-gray-700 hover:text-pink-600">Matches</Link>
                    <Link to="/messages" className="block py-2 text-gray-700 hover:text-pink-600">Messages</Link>
                    <Link to="/profile" className="block py-2 text-gray-700 hover:text-pink-600">Profile</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
