function BookCard(props){
  const{name,author,price,description,image}=props.bDetail;
  
  return(
    <>
    
     <div
  className="p-8 m-4 max-w-xs bg-slate-100 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
  href="#"
>
  <img className=" h-60 w-56 shadow rounded-lg overflow-hidden border"
    src={image}
    alt="Exercise Thumbnail"
    
  />
  <div className="mt-8 text-center">
    <h4 className="font-bold text-2xl">{name}</h4>
    <h6 className="font-bold text-l">{author}</h6>
    <p className="mt-2 text-gray-600">Price: rs {price} </p>
    <p className="mt-2 text-gray-600">{description} </p>
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

    </>
  )
}
export default BookCard;