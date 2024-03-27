import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-5  items-center justify-center h-[calc(100vh-100px)]">
      <h1 className="text-8xl ">404</h1>
      <p className="text-3xl">Your requested path not found</p>
      <p className="text-6xl">Not Found</p>
      <Link className="btn bg-green-400 text-white text-xl" to={"/"}>
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
