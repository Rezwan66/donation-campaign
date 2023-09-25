import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DetailsCard = ({ campaign }) => {
  const { id, image, title, description, text_color, price } = campaign;

  const handleAddToDonated = () => {
    const donatedArray = [];
    const storedDonations = JSON.parse(localStorage.getItem('donations'));
    if (!storedDonations) {
      donatedArray.push(campaign);
      localStorage.setItem('donations', JSON.stringify(donatedArray));
      swal(
        'Awesome!',
        `You have successfully donated $${price} to this campaign`,
        'success'
      );
    } else {
      const exists = storedDonations.find(campaign => campaign.id === id);
      if (!exists) {
        donatedArray.push(...storedDonations, campaign);
        localStorage.setItem('donations', JSON.stringify(donatedArray));
        swal(
          'Awesome!',
          `You have successfully donated $${price} to this campaign`,
          'success'
        );
      } else {
        swal('Error!', 'You have already donated to this campaign !', 'error');
      }
    }
  };
  return (
    <div>
      <div className="md:relative">
        <div>
          <img
            className="h-72 md:h-[650px] w-full object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="md:p-7 md:absolute md:bg-[#0B0B0B80] md:bg-opacity-60 md:bottom-0 w-full rounded-b-lg">
          <button
            onClick={handleAddToDonated}
            className="btn w-full md:w-auto mt-4 md:mt-0 capitalize px-7 py-4 rounded-[4px] text-white border-0"
            style={{ backgroundColor: text_color }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="mt-10 mb-24">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  campaign: PropTypes.object,
};

export default DetailsCard;
