import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Layout/Root.jsx";
import ListedBooks from "./components/listed books/ListedBooks.jsx";
import PagesToRead from "./components/pages to read/PagesToRead.jsx";
import Home from "./components/Homepage/Home.jsx";
import BookDetails from "./components/Book details/BookDetails.jsx";
import ErrorPage from "./components/error page/ErrorPage.jsx";
import Faq from "./components/Faq/Faq.jsx";
import ContactUs from "./components/contactUS/ContactUs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
