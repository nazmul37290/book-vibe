import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, rating, tags } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card md:h-[600px] bg-base-100 shadow-xl">
        <div className="w-full px-5 pt-5 object-cover">
          <img src={image} className="rounded-xl w-full h-72  object-cover " />
        </div>
        <div className="card-body items-center space-y-3 text-center">
          <div className="space-x-2">
            {tags.map((tag, i) => (
              <span
                className="p-2 bg-green-50 rounded-lg text-green-500"
                key={i}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title w-full text-start">{bookName}</h2>
          <p className="text-start w-full font-medium">By: {author}</p>
          <div className="flex justify-between w-full">
            <p className="text-start">{category}</p>
            <p className="flex items-center justify-end gap-1">
              {rating} <CiStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object,
};
