import { useEffect, useState } from 'react';
import DonationCard from '../components/DonationCard/DonationCard';

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState('');
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem('donations'));
    if (storedDonations) {
      setDonations(storedDonations);
    } else {
      setNotFound('No donations made yet!');
    }
  }, []);
  console.log(donations);
  return (
    <div className="max-w-7xl mx-auto mt-8">
      {notFound ? (
        <h3>{notFound}</h3>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6 px-6 lg:px-0">
          {donations?.map(donation => (
            <DonationCard key={donation.id} donation={donation}></DonationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
