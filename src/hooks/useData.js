import { useEffect, useState } from 'react';

const useData = () => {
     const [instruments, setInstruments] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/instruments")
         .then((res) => res.json())
         .then((data) => setInstruments(data));
     }, []);
     return [instruments, setInstruments];
};

export default useData;