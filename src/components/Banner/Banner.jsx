import PropTypes from 'prop-types';

const Banner = ({ handleSearchTerm }) => {
  return (
    <div>
      <div
        className="hero h-[480px] mb-20"
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
            <form onSubmit={handleSearchTerm} className="join">
              <input
                type="text"
                name="searchTerm"
                className="input input-bordered text-[#0B0B0B] focus:outline-0 join-item md:w-80"
                placeholder="Search here..."
              />
              <button className="btn px-7 py-4 bg-[#FF444A] hover:text-[#0B0B0B] hover:bg-red-200 capitalize text-white join-item rounded-r-lg">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleSearchTerm: PropTypes.func,
};

export default Banner;
