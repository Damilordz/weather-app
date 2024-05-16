import React from "react";

// Form component for user input
const FormInput = ({ onSubmit, city, setCity }) => {
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(); // Call the onSubmit function passed as a prop
  };

  return (
    // Form element with handleSubmit as the submit handler
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        {/* Input field for entering city name */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name e.g London"
          value={city} // Value bound to the city state
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
        />
        {/* Button to submit the form */}
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </div>
    </form>
  );
};

export default FormInput;