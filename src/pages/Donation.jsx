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
        <div className="text-center">
          <i>
            <h3>{notFound}</h3>
          </i>
        </div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-2 gap-6 px-6 lg:px-0">
            {isShown
              ? donations?.map(donation => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                  ></DonationCard>
                ))
              : donations
                  ?.slice(0, 4)
                  .map(donation => (
                    <DonationCard
                      key={donation.id}
                      donation={donation}
                    ></DonationCard>
                  ))}
          </div>
          <div className="text-center mt-10 mb-24">
            {donations.length > 4 && !isShown ? (
              <button
                onClick={() => setIsShown(!isShown)}
                className="btn capitalize px-7 py-3 rounded-[4px] text-white bg-[#009444] border-0 hover:bg-green-500"
              >
                See All
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
