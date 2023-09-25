import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from '../components/Campaigns/DetailsCard';

const CampaignDetails = () => {
  const [campaign, setCampaign] = useState({});
  const campaigns = useLoaderData();
  const { id } = useParams();
  //   console.log(campaigns, id);
  useEffect(() => {
    const findCampaign = campaigns.find(cam => cam.id === +id);
    setCampaign(findCampaign);
  }, [campaigns, id]);
  // console.log(campaign);
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 lg:px-0">
      <DetailsCard campaign={campaign}></DetailsCard>
    </div>
  );
};

export default CampaignDetails;
