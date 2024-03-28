import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getFromLocalStorage } from "../../utils/localStorage";
import useData from "../../Hooks/useData";
import Card from "../card/Card";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const readBooks = getFromLocalStorage("read");
  const wishlistBooks = getFromLocalStorage("wishlist");
  const { jsonData } = useData();
  const [sortedReadBooks, setSortedReadBooks] = useState([]);
  const [sortedWishBooks, setSortedWishBooks] = useState([]);

  // listed read book objects from local storage ids
  const readBooksList = [];
  readBooks.map((id) => {
    const readBook = jsonData.find((book) => book.bookId == id);
    readBooksList.push(readBook);
  });

  // listed wishlist book objects from local storage ids
  const readWishList = [];
  wishlistBooks.map((id) => {
    const wishBook = jsonData.find((book) => book.bookId == id);
    readWishList.push(wishBook);
  });

  // set default data for read book display
  useEffect(() => {
    const displayReadBooks = [];
    readBooks.map((id) => {
      const readBookDetails = jsonData.find((book) => book.bookId == id);
      displayReadBooks.push(readBookDetails);
    });

    setSortedReadBooks(displayReadBooks);
  }, [jsonData]);

  // set default data for read book display
  useEffect(() => {
    const displayWishBooks = [];
    wishlistBooks.map((id) => {
      const wishBookDetails = jsonData.find((book) => book.bookId == id);
      displayWishBooks.push(wishBookDetails);
    });

    setSortedWishBooks(displayWishBooks);
  }, [jsonData]);

  // set data using sort for read books
  const handleSort = (sortType) => {
    if (sortType === "pages") {
      const sortedBooks = readBooksList.sort((a, b) =>
        a.totalPages > b.totalPages ? -1 : a.totalPages < b.totalPages ? 1 : 0
      );

      setSortedReadBooks(sortedBooks);
    } else if (sortType === "rating") {
      const sortedBooks = readBooksList.sort((a, b) =>
        a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
      );

      setSortedReadBooks(sortedBooks);
    } else if (sortType === "publishYear") {
      const sortedBooks = readBooksList.sort((a, b) =>
        a.yearOfPublishing > b.yearOfPublishing
          ? -1
          : a.yearOfPublishing < b.yearOfPublishing
          ? 1
          : 0
      );

      setSortedReadBooks(sortedBooks);
    }
  };

  // set data using sort for wish books
  const handleWishSort = (sortType) => {
    if (sortType === "pages") {
      const sortedBooks = readWishList.sort((a, b) =>
        a.totalPages > b.totalPages ? -1 : a.totalPages < b.totalPages ? 1 : 0
      );

      setSortedWishBooks(sortedBooks);
    } else if (sortType === "rating") {
      const sortedBooks = readWishList.sort((a, b) =>
        a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
      );

      setSortedWishBooks(sortedBooks);
    } else if (sortType === "publishYear") {
      const sortedBooks = readWishList.sort((a, b) =>
        a.yearOfPublishing > b.yearOfPublishing
          ? -1
          : a.yearOfPublishing < b.yearOfPublishing
          ? 1
          : 0
      );

      setSortedWishBooks(sortedBooks);
    }
  };

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
              <a
                onClick={() => {
                  handleSort("rating");
                  handleWishSort("rating");
                }}
              >
                Rating
              </a>
            </li>
            <li className="mx-auto">
              <a
                onClick={() => {
                  handleSort("pages");
                  handleWishSort("pages");
                }}
              >
                Number of pages
              </a>
            </li>
            <li className="mx-auto">
              <a
                onClick={() => {
                  handleSort("publishYear");
                  handleWishSort("publishYear");
                }}
              >
                Published year
              </a>
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
          {sortedReadBooks.map((book, i) => {
            return <Card key={i} readBook={book}></Card>;
          })}
        </TabPanel>
        <TabPanel>
          {sortedWishBooks.map((book, i) => {
            return <Card key={i} readBook={book}></Card>;
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
