import React from 'react';
import useData from '../../hooks/useData';
import HomePageInstruments from '../HomePageInstruments/HomePageInstruments';

const Home = () => {
    const [instruments] = useData();
    // console.log(instruments);
    return (
      <div>
        total instrument {instruments.length}
        {
        instruments.map(instrument =><HomePageInstruments key={instrument._id} instrument={instrument}/>).slice(0,6)
        }
      </div>
    );
};

export default Home;