import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { bookId } = useParams();
  const { jsonData } = useData();

  const [bookDetails, setBookDetails] = useState({});
  console.log(jsonData, bookId);
  useEffect(() => {
    const data = jsonData.find((book) => book.bookId == bookId);
    setBookDetails(data);
    console.log(bookDetails);
  }, [jsonData]);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookDetails || {};
  return (
    <div className="grid grid-cols-2 mt-16">
      <div className="bg-gray-300 flex justify-center items-center h-full">
        <img src={image} className="w-full h-full object-cover" alt="Album" />
      </div>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold p-2">{bookName}</h2>
        <h2 className="font-semibold p-2">By: {author}</h2>
        <h2 className=" border-y-2 p-2 text-lg">{category}</h2>
        <p>
          <span className="font-semibold">Review: </span>
          {review}
        </p>
        <p className="mt-4">
          <span>Tags:</span>
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-green-50 ml-3 p-2 rounded-md text-green-500"
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
