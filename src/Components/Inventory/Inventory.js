import React from 'react';
import useData from '../../hooks/useData';
import InventoryItems from '../InventoryItems/InventoryItems';

const Inventory = () => {
    const [instruments] = useData();
    return (
      <div className="md:grid grid-cols-3">
        {instruments.map((instrument) => (
          <InventoryItems key={instrument._id} instrument={instrument} />
        ))}
      </div>
    );
};

export default Inventory;