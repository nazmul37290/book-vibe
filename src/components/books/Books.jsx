import useData from "../../Hooks/useData";
import Book from "./Book";

const Books = () => {
  const { jsonData } = useData();
  console.log(jsonData);
  return (
    <div className="mt-16 ">
      <h1 className="text-center font-bold text-3xl">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {jsonData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
