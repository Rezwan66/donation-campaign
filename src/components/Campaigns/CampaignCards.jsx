import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CampaignCards = ({ campaign }) => {
  //   console.log(campaign);
  const { id, image, category, title, card_bg, category_bg, text_color } =
    campaign;
  return (
    <div>
      <Link to={`/campaign/${id}`}>
        <div
          className="relative flex flex-col rounded-lg bg-clip-border h-72"
          style={{ backgroundColor: card_bg, color: text_color }}
        >
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img
              src={image}
              className="h-40 w-full object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <div
              className="mb-2 text-sm font-medium px-3 py-1 rounded-md inline-flex"
              style={{ backgroundColor: category_bg }}
            >
              <p>{category}</p>
            </div>

            <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

CampaignCards.propTypes = {
  campaign: PropTypes.object,
};

export default CampaignCards;
