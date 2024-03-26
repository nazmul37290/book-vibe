import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../../utils/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const { jsonData } = useData();

  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    const data = jsonData.find((book) => book.bookId == bookId);
    setBookDetails(data);
  }, [jsonData]);

  const handleAddToRead = () => {
    addToLocalStorage("read", bookId);
  };
  const handleAddToWishlist = () => {
    const readed = getFromLocalStorage("read");

    if (readed.includes(bookId)) {
      return toast.error("You have already read this book");
    }
    addToLocalStorage("wishlist", bookId);
  };

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
      <div className=" flex justify-center items-center h-full">
        <img
          src={image}
          className="w-full h-full p-16 object-cover"
          alt="Album"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold p-2">{bookName}</h2>
        <h2 className="font-semibold p-2">By: {author}</h2>
        <h2 className=" border-y-2 p-2 text-lg">{category}</h2>
        <p>
          <span className="font-semibold">Review: </span>
          {review}
        </p>
        <p className="mt-4 ">
          <span>Tags:</span>
          {tags &&
            tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-50 ml-3 p-2 rounded-md text-green-500"
              >
                #{tag}
              </span>
            ))}
        </p>
        <div className="border-t-2 p-4 mt-3">
          <table>
            <tr className="h-8">
              <td>Number of Pages:</td>
              <td className="font-bold px-3">{totalPages}</td>
            </tr>
            <tr className="h-8">
              <td>Publisher:</td>
              <td className="font-bold px-3">{publisher}</td>
            </tr>
            <tr className="h-8">
              <td>Year of Publishing:</td>
              <td className="font-bold px-3">{yearOfPublishing}</td>
            </tr>
            <tr className="h-8">
              <td>Rating:</td>
              <td className="font-bold px-3">{rating}</td>
            </tr>
          </table>
        </div>
        <div className="card-actions  justify-start">
          <button
            onClick={handleAddToRead}
            className="btn bg-white border-black"
          >
            Read
          </button>
          <button onClick={handleAddToWishlist} className="btn btn-primary">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
