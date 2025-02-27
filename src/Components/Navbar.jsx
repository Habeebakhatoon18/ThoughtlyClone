import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown} from "lucide-react";

const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="flex justify-evenly items-center px-20 py-10 bg-gray-50 shadow-sm w-full" style={{ fontFamily: "'Whyte', sans-serif" }}>
      <div className="text-2xl font-bold text-gray-800">thoughtly</div>
      
      <div className="hidden md:flex space-x-6 items-center">
        <a href="#" className="hover:bg-gray-100 px-4 text-sm py-2 rounded-lg transition">Platform</a>
        <a href="#" className="hover:bg-gray-100 px-4 py-2 rounded-lg text-sm transition">Agent Accelerator</a>
        
        <div className="relative">
          <button onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}
            className="flex items-center text-sm gap-1 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
            Resources <ChevronDown size={16} />
          </button>
          {resourcesOpen && (
            <div className="absolute flex top-full left-0 w-64 bg-white shadow-lg rounded-lg p-4" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <div><a href="#" className="block px-4 py-2 hover:bg-gray-100">Resources</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog Articles</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">News</a>
              </div > <div className="p-4"> <p className="mb-2">Features</p><img src="../resource.png" alt="" />
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}
            className="flex items-center gap-1 hover:bg-gray-200 text-sm px-4 py-2 rounded-lg transition">
            Company <ChevronDown size={16} />
          </button>
          {companyOpen && (
            <div className="absolute top-full left-0 w-40 bg-white shadow-lg rounded-lg p-4" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
            </div>
          )}
        </div>
        
        <a href="#" className="hover:bg-gray-100 px-4 py-2 rounded-lg text-sm transition">Docs</a>
      </div>
      
      <div className="flex items-center space-x-4">
      <button
      className="border-none px-6 py-4 rounded-lg text-gray-800 hover:bg-gray-200 transition flex items-center gap-2"
      onClick={() => navigate("/login")}
    >
      Sign In
    </button>
        <button className="bg-green-400 px-6 py-4 rounded-lg text-white font-semibold hover:bg-green-300 transition"
        onClick={() => navigate("/demo")}>
          Book a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
