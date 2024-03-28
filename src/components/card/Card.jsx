import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ readBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,

    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = readBook || {};
  return (
    <div>
      <div className="card grid lg:grid-cols-3 card-side bg-base-100 mt-2 border-2 shadow-xl p-0 lg:p-5">
        <div className="h-72 w-full col-span-1 ">
          <img
            className="rounded-2xl w-full h-72 object-cover"
            src={image}
            alt="Movie"
          />
        </div>
        <div className="card-body p-2 col-span-2">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <div className="h-fit">By: {author}</div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex flex-col lg:flex-row gap-2">
              <span className="font-bold">Tag:</span>
              {tags &&
                tags.map((tag, i) => (
                  <span
                    key={i}
                    className="mr-2 bg-green-50 text-green-500 py-2 px-3 rounded-3xl"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-lg" />
              Year of Publishing: {yearOfPublishing}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <IoPeopleOutline className="text-lg" />
              Publisher: {publisher}
            </div>
            <div className="flex items-center gap-2">
              <CiFileOn className="text-lg" /> Page: {totalPages}
            </div>
          </div>
          <div className="card-actions  pt-2 border-t-2">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full font-semibold">
              Category: {category}
            </div>
            <div className="bg-orange-200 text-orange-500 p-3 rounded-full font-semibold">
              Rating: {rating}
            </div>
            <Link
              to={`/book/${bookId}`}
              className="btn bg-green-500 rounded-full text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  readBook: PropTypes.object,
};
