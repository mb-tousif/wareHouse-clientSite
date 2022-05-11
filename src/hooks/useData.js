import { useEffect, useState } from 'react';

const useData = () => {
     const [instruments, setInstruments] = useState([]);
     useEffect(() => {
       const url = "http://localhost:5000/instruments";
       fetch(url)
         .then((res) => res.json())
         .then((data) => setInstruments(data));
     }, [instruments]);
     return [instruments, setInstruments];
};

export default useData;