import PropTypes from 'prop-types';
import CampaignCards from './CampaignCards';

const CampaignContainer = ({ campaigns }) => {
  //   console.log(campaigns);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-0">
      {campaigns?.map(campaign => (
        <CampaignCards key={campaign.id} campaign={campaign}></CampaignCards>
      ))}
    </div>
  );
};

CampaignContainer.propTypes = {
  campaigns: PropTypes.array,
};

export default CampaignContainer;
