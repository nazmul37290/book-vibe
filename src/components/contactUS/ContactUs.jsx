import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5 ">Contact Us</h1>
      <div>
        <div>
          <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content w-full flex-col lg:flex-row justify-around">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold">Our Socials</h1>
                <div className="py-6 flex gap-5 text-3xl">
                  <FaFacebookSquare className="text-blue-600" />
                  <FaInstagram className="text-orange-600" />
                  <FaXTwitter />
                </div>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name of Book</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name of book"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name of Author</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name of Author"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-green-500 text-xl font-bold text-white">
                      Suggest Book
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
