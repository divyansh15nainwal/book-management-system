import React, { useState } from "react";
import BookCard from "./BookCard";
import Search from "./Search";
import { Bookdetail } from "../Utils/MockData";
import { Link } from "react-router-dom";


function BrowseBook()

{
  const [searchBookFilter, setSearchBookFilter] = useState(Bookdetail);

  
  function setFuncBook(filteredBooks) {
    setSearchBookFilter(filteredBooks);
    console.log("search filter", filteredBooks);
  }
  
 
  return(
    <div className="py-20">
      <Search filterBookData={setFuncBook} />
     
      
      <div className="flex flex-wrap justify-center mx-auto">
        {searchBookFilter.map((book) => (
          <Link key={book.id} to={`/Book/${book.id}`}>
            <BookCard bDetail={book} />
          </Link>
        ))}
      </div>
      
      
      

      
    
   
    </div>
  )
}
export default BrowseBook;