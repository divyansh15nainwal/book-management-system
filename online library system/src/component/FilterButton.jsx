import { useState } from "react";
import { Bookdetail } from "../Utils/MockData";

function FilterButton() {
  const [filteredBooks, setFilteredBooks] = useState(Bookdetail);

  // Generic filter function
  function filterByCategory(category) {
    const result = Bookdetail.filter((book) =>
      book.categories.includes(category)
    );
    setFilteredBooks(result);
  }

  return (
    <>
      <h5 className="mb-2 text-2xl m-10 font-bold tracking-tight text-gray-900 dark:text-white">
        Book Categories
      </h5>

      <div className="flex w-max gap-4 mx-10">
        <button
          onClick={() => filterByCategory("Fiction")}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Fiction
        </button>
        <button
          onClick={() => filterByCategory("Classic")}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Classic
        </button>
        <button
          onClick={() => filterByCategory("Drama")}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Drama
        </button>
        <button
          onClick={() => filterByCategory("Romance")}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Romance
        </button>
        <button
          onClick={() => filterByCategory("Epic")}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Epic
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 my-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="p-8 m-4 max-w-xs bg-slate-100 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          >
            <img
              className="h-60 w-56 shadow rounded-lg overflow-hidden border"
              src={book.image}
              alt="Book Thumbnail"
            />
            <div className="mt-8 text-center">
              <h4 className="font-bold text-2xl">{book.name}</h4>
              <h6 className="font-bold text-l">{book.author}</h6>
              <p className="mt-2 text-gray-600">Price: ₹{book.price}</p>
              <p className="mt-2 text-gray-600">{book.description}</p>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900"
                >
                  View More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FilterButton;
