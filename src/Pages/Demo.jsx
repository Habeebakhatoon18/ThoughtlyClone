import React,{useState} from "react";

const Demo = () => {
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Form submitted successfully!");
    }, 2000);
  };
  
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      phone: "",
      hearAbout: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  return (
    <div className="md:flex min-h-screen  bg-gray-100">
      {/* Sidebar */}
      <div className="md:w-1/3 w-full bg-[#f6f6f4] p-8 flex flex-col items-start">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <span className="text-green-600 text-3xl mr-2">&#9679;</span> thoughtly
        </h1>
        <p className="mt-10 font-bold">Additional Text 1</p>
      </div>
      
      {/* Form Section */}
      <div className="w-full md:max-w-1/2 bg-white shadow-lg md:p-15 p-8 rounded-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
        <h1 className="text-2xl font-bold">Get Started with Thoughtly</h1>
        <p className="text-gray-600 mb-6">
          The future of AI calling is here—let’s get you connected with our team.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">What's your first name?</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Steve"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>
          <div>
            <label className="block font-medium">What's your last name?</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Jobs"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>
          <div>
            <label className="block font-medium">What's your email?</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Steve@apple.com"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>
          <div>
            <label className="block font-medium">What's your website?</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="apple.com"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>
          <div>
            <label className="block font-medium">What's your phone number?</label>
            <div className="flex gap-2">
              <select className="border p-2 rounded-md">
                <option>+1 (🇺🇸)</option>
                <option>+44 (🇬🇧)</option>
                <option>+91 (🇮🇳)</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">How did you hear about us?</label>
            <select
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            >
              <option value="">Optional</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of Mouth">Word of Mouth</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-md hover:bg-green-800"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {message && <p className="text-green-600 mt-2 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Demo;  