import React, { useState } from "react";
import BookCard from "./BookCard";
import { Bookdetail } from "../Utils/MockData"; 
import FilterButton from "./FilterButton"; 
import { Link } from "react-router-dom";

function BookHome() {
  const [searchBookFilter, setSearchBookFilter] = useState(Bookdetail);

  // This function updates the filtered books list
  function setFuncBook(filteredBooks) {
    setSearchBookFilter(filteredBooks);
    console.log("search filter", filteredBooks);
  }

  return (
    <>
      <h5 className="mb-2 text-2xl m-10 font-bold tracking-tight text-gray-900">
        Welcome to BookNest
      </h5>
      <h5 className="mb-2 text-2xl m-10 font-bold tracking-tight text-gray-900">
        Popular Books
      </h5>
      <FilterButton/>

     
    </>
  );
}

export default BookHome;
