import { useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
{/*
const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    dateTime: "",
    address: "",
    file: null,
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.serviceType || !formData.message || !formData.address || !formData.consent) {
      alert("Please fill in all required fields and agree to the terms.");
      return;
    }

    // Mock submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Electrical Service</h2>

      {submitted ? (
        <div className="text-green-600 font-medium">✅ Your request has been submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name *
          <div>
            <label className="block text-gray-700">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Email 
          <div>
            <label className="block text-gray-700">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Phone 
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Service Type 
          <div>
            <label className="block text-gray-700">Service Type <span className="text-red-500">*</span></label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="">Select a service</option>
              <option value="Wiring">Wiring</option>
              <option value="Repairs">Repairs</option>
              <option value="Installations">Installations</option>
              <option value="Inspections">Inspections</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message 
          <div>
            <label className="block text-gray-700">Message/Description <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              placeholder="Provide details about the service you need"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            ></textarea>
          </div>

          {/* Date and Time 
          <div>
            <label className="block text-gray-700">Preferred Date and Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Address 
          <div>
            <label className="block text-gray-700">Location Address <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* File Upload 
          <div>
            <label className="block text-gray-700">Upload Files (Optional)</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Consent Checkbox 
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <span className="text-gray-700">I agree to the terms and conditions. <span className="text-red-500">*</span></span>
            </label>
          </div>

          {/* Submit Button 
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};
*/}


const ServiceRequestPage = () => {
    return (
        <>
        <Navbar/>
        <Form/>
        </>
    )
}
export default ServiceRequestPage;