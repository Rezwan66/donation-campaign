import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import CampaignContainer from '../components/Campaigns/CampaignContainer';
import { useEffect, useState } from 'react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const loadedCampaigns = useLoaderData();
  //   console.log(campaigns);
  useEffect(() => {
    if (loadedCampaigns.length) {
      if (searchTerm) {
        const searchedCampaigns = loadedCampaigns.filter(campaign =>
          campaign.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCampaigns(searchedCampaigns);
      } else {
        setCampaigns(loadedCampaigns);
      }
    }
  }, [loadedCampaigns, searchTerm]);

  const handleSearchTerm = e => {
    e.preventDefault();
    // console.log(e.target.searchTerm.value);
    const searchValue = e.target.searchTerm.value;
    // console.log(typeof searchValue); // string
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <Banner handleSearchTerm={handleSearchTerm}></Banner>
      <div className="max-w-7xl mx-auto mb-24">
        <CampaignContainer campaigns={campaigns}></CampaignContainer>
      </div>
    </div>
  );
};

export default Home;
