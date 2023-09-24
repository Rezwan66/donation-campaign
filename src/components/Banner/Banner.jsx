const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[480px]"
        style={{
          backgroundImage: 'url(https://i.ibb.co/6wjN83X/Rectangle-4281.png)',
        }}
      >
        <div className="hero-overlay bg-[#FFFFFF] bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-4xl lg:text-5xl text-black font-bold mb-10">
              I Grow By Helping People In Need
            </h1>
            <form className="join">
              <input
                type="text"
                name="searchTerm"
                className="input input-bordered join-item w-80"
                placeholder="Search here..."
              />
              <button className="btn px-7 py-4 bg-[#FF444A] capitalize text-white join-item rounded-r-lg">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
