import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
  const {
    id,
    image,
    category,
    title,
    price,
    card_bg,
    category_bg,
    text_color,
  } = donation;
  return (
    <div>
      <div
        className="relative flex h-[250px] w-full max-w-[48rem] flex-row rounded-lg bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: card_bg }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-[250px] w-full object-cover"
          />
        </div>
        <div className="p-6">
          <p
            className="mb-2 font-sans text-sm font-medium inline-flex leading-relaxed tracking-normal antialiased px-3 py-1 rounded-md"
            style={{ backgroundColor: category_bg, color: text_color }}
          >
            {category}
          </p>
          <h4 className="mb-2 block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-[#0B0B0B] antialiased">
            {title}
          </h4>

          <p
            className="font-sans text-base font-semibold leading-relaxed antialiased "
            style={{ color: text_color }}
          >
            ${price.toFixed(2)}
          </p>

          <Link to={`/campaign/${id}`}>
            <button
              className="btn absolute bottom-1 md:bottom-6 capitalize px-4 py-2 rounded-[4px] text-white border-0"
              style={{ backgroundColor: text_color }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationCard;
