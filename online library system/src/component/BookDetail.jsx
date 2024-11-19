import { useParams } from "react-router-dom";
import { Bookdetail } from "../Utils/MockData";

function BookDetail() {
  const { id } = useParams();  
  const book = Bookdetail.find((book) => book.id === parseInt(id));  

  
  

  return (
     <>
   
      <a href="/" className="inline-block py-3 px-6 m-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go to home
      </a>
    
    
    <div className=" flex justify-center items-center py-20">
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300">
      
        <img className="w-4/5 p-10" src={book.image} alt="book cover" />
  
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.name}</div>
          <p className="text-gray-700 text-base">{book.description}</p>
        </div>

        
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {book.rating}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${book.price}
          </span>
        </div>
      </div>
    </div>
    </>

  );
}

export default BookDetail;
