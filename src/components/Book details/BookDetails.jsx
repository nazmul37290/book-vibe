import { useParams } from "react-router-dom";
import { useJsonData } from "../../Hooks/useData";

const BookDetails = () => {
  const { bookId } = useParams();
  const { jsonData } = useJsonData();
  const data = jsonData.find((book) => book.bookId == bookId);
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
  } = data;
  return (
    <div className="card lg:card-side bg-base-100">
      <div className="bg-gray-300">
        <img src={image} alt="Album" />
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold p-2">{bookName}</h2>
        <h2 className="font-semibold p-2">By: {author}</h2>
        <h2 className=" border-y-2 p-2">{category}</h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
