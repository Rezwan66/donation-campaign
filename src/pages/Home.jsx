import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import CampaignContainer from '../components/Campaigns/CampaignContainer';

const Home = () => {
  const campaigns = useLoaderData();
  //   console.log(campaigns);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto mb-24">
        <CampaignContainer campaigns={campaigns}></CampaignContainer>
      </div>
    </div>
  );
};

export default Home;
