import { useEffect, useState } from 'react';

const useData = () => {
     const [instruments, setInstruments] = useState([]);
     useEffect(() => {
       const url = "https://peaceful-springs-15043.herokuapp.com/instruments";
       fetch(url)
         .then((res) => res.json())
         .then((data) => setInstruments(data));
     }, [instruments]);
     return [instruments, setInstruments];
};

export default useData;