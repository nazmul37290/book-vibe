import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getFromLocalStorage } from "../../utils/localStorage";
import useData from "../../Hooks/useData";
import Card from "../card/Card";

const ListedBooks = () => {
  const readBooks = getFromLocalStorage("read");
  const wishlistBooks = getFromLocalStorage("wishlist");
  const { jsonData } = useData();

  return (
    <div className="mt-8">
      <h1 className="text-3xl text-center font-bold p-10 bg-gray-100 rounded-2xl">
        Books
      </h1>
      <div className="flex justify-center mt-4">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-500 w-40 text-white text-lg m-1"
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 "
          >
            <li className="mx-auto">
              <a>Rating</a>
            </li>
            <li className="mx-auto">
              <a>Number of pages</a>
            </li>
            <li className="mx-auto">
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs here */}

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {readBooks.map((id, i) => {
            const readBook = jsonData.find((book) => book.bookId == id);

            return <Card key={i} readBook={readBook}></Card>;
          })}
        </TabPanel>
        <TabPanel>
          {wishlistBooks.map((id, i) => {
            const wishlistBook = jsonData.find((book) => book.bookId == id);

            return <Card key={i} readBook={wishlistBook}></Card>;
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
