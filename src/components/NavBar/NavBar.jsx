import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-0 flex justify-between items-center flex-col md:flex-row gap-8">
      <div>
        <img
          className="w-56 lg:w-52"
          src="https://i.ibb.co/MgyB9vk/Logo.png"
          alt=""
        />
      </div>
      <div>
        <ul className="flex flex-row md:gap-8 gap-4 shadow-lg md:shadow-none p-2 md:p-0 rounded-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#FF444A] underline'
                  : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#FF444A] underline'
                  : ''
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#FF444A] underline'
                  : ''
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
