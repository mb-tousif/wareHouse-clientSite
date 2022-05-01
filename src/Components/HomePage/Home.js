import React from 'react';
import useData from '../../hooks/useData';
import HomePageInstruments from '../HomePageInstruments/HomePageInstruments';
import TopBanner from '../topBanner/TopBanner';

const Home = () => {
    const [instruments] = useData();
    // console.log(instruments);
    return (
      <div>
        <TopBanner/>
        <div className="md:grid gap-10 md:grid-cols-3">
        {
        instruments.map(instrument =><HomePageInstruments key={instrument._id} instrument={instrument}/>).slice(4,10)
        }
        </div>
      </div>
    );
};

export default Home;