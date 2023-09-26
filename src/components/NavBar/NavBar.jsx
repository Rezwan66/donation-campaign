import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-0 flex justify-between items-center">
      <div>
        <img
          className="w-56 lg:w-52"
          src="https://i.ibb.co/MgyB9vk/Logo.png"
          alt=""
        />
      </div>
      <div>
        <ul className="flex flex-col md:flex-row md:gap-8 gap-1">
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
