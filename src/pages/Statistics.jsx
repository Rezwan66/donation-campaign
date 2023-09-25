import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cell, Pie, PieChart } from 'recharts';

const Statistics = () => {
  const [donationCount, setDonationCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const loadedTotalArr = useLoaderData();
  useEffect(() => {
    if (loadedTotalArr) {
      setTotalCount(loadedTotalArr.length);
    }
  }, [loadedTotalArr]);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem('donations'));
    if (storedDonations) {
      setDonationCount(storedDonations.length);
    }
  }, []);
  // const total = 12;
  // console.log(donationCount);
  const data = [
    { name: 'Total Donation', value: totalCount - donationCount },
    { name: 'Your Donation', value: donationCount },
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={20}
        fontWeight={700}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className="mt-8 mb-24 ">
      <div className="flex justify-center text-black">
        <PieChart width={425} height={425}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="80%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Legend width={420} iconSize={60} iconType="plainline"></Legend> */}
        </PieChart>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-10">
          <div className="flex items-center gap-4">
            <p className="text-[#0B0B0B]">Your Donation</p>
            <div className="w-20 h-3 rounded-sm bg-[#00C49F]"></div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[#0B0B0B]">Total Donation</p>
            <div className="w-20 h-3 rounded-sm bg-[#FF444A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
