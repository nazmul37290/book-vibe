const Banner = () => {
  return (
    <div>
      <div className="hero space-y-5 rounded-2xl p-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="bannerbook.png" className="max-w-sm  rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold mb-10">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-green-500 text-white text-lg font-bold">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
