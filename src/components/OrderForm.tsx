import React, { useState } from 'react';
// import { placeOrder } from '../services/orderService';

const OrderForm: React.FC = () => {
    const [farmerName, setFarmerName] = useState('');
    const [landSize, setLandSize] = useState(0);
    const [seedType, setSeedType] = useState('');
    const [fertilizerType, setFertilizerType] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        // e.preventDefault();
        // try {
        //     await placeOrder({ farmerName, landSize, seedType, fertilizerType });
        //     alert('Order placed successfully');
        // } catch (error) {
        //     alert('Failed to place order');
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={farmerName} onChange={e => setFarmerName(e.target.value)} placeholder="Farmer Name" required />
            <input type="number" value={landSize} onChange={e => setLandSize(parseFloat(e.target.value))} placeholder="Land Size (in acres)" required />
            <input type="text" value={seedType} onChange={e => setSeedType(e.target.value)} placeholder="Seed Type" required />
            <input type="text" value={fertilizerType} onChange={e => setFertilizerType(e.target.value)} placeholder="Fertilizer Type" required />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm