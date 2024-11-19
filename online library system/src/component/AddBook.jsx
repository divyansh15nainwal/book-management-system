import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../Utils/cardSlice"; // Action to add books
import { useNavigate } from "react-router-dom"; // For redirection

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    categories: "",
    description: "",
    image: "",
    pages: "",
    price: "",
    rating: "",
    publishedDate: "",
  });

  const [errors, setErrors] = useState({});

  // Form field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form fields
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Book title is required.";
    if (!formData.author.trim()) errors.author = "Author name is required.";
    if (!formData.categories.trim())
      errors.categories = "Book category is required.";
    if (!formData.description.trim())
      errors.description = "Book description is required.";
    if (!formData.image.trim()) errors.image = "Image URL is required.";
    if (!formData.pages || formData.pages <= 0)
      errors.pages = "Number of pages must be greater than 0.";
    if (!formData.price || formData.price <= 0)
      errors.price = "Price must be greater than 0.";
    if (!formData.rating || formData.rating <= 0 || formData.rating > 5)
      errors.rating = "Rating must be between 1 and 5.";
    if (!formData.publishedDate.trim())
      errors.publishedDate = "Published date is required.";
    return errors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Add the book to Redux store
    dispatch(additem(formData));

    // Redirect to Browse Books page
    navigate("/browse-books");
  };

  return (
    <div className="py-20">
      <div className=" mx-10">
      <a href="/" className="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go to home
    </a>
      </div>
      <form
        className="border border-slate-200 shadow-lg w-[90%] sm:w-2/3 p-4 xs:p-6 outline-none mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-xl">Add New Book</h2>

        {/* Input fields */}
        {["name", "author", "categories", "description", "image"].map((field) => (
          <div key={field}>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="border focus:outline-none px-4 py-1 shadow-md w-full"
            />
            {errors[field] && <p className="text-red-500">{errors[field]}</p>}
          </div>
        ))}

        {/* Number and Date fields */}
        <div className="flex gap-4">
          <input
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            placeholder="Pages"
            type="number"
            className="border focus:outline-none px-4 py-1 shadow-md w-1/3"
          />
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            className="border focus:outline-none px-4 py-1 shadow-md w-1/3"
          />
          <input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating (1-5)"
            type="number"
            className="border focus:outline-none px-4 py-1 shadow-md w-1/3"
          />
        </div>
        {errors.pages && <p className="text-red-500">{errors.pages}</p>}
        {errors.price && <p className="text-red-500">{errors.price}</p>}
        {errors.rating && <p className="text-red-500">{errors.rating}</p>}

        <input
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          type="date"
          className="border focus:outline-none px-4 py-1 shadow-md w-full"
        />
        {errors.publishedDate && (
          <p className="text-red-500">{errors.publishedDate}</p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBook;
