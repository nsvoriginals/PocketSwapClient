import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../store/user';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import { BACKEND_URL } from '../../urlfile'; // Ensure BACKEND_URL is imported

const Modal = ({ isOpen, onClose, name, id }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [sender,setSender] = useRecoilState(userInfoAtom);
  const senderId = sender.id;
  const recieverId = id;
  const token = localStorage.getItem('authToken');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (amount > sender.balance) {
        setError('Insufficient Balance');
        return;
    }

    try {
      
        const payment = await axios.post(`${BACKEND_URL}/users/payment`, {
            senderId,       
            recieverId,      
            amount,        
        }, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });

        if (payment) {
       
            setSender((prevData) => ({
                ...prevData,
                balance: prevData.balance-parseFloat(amount),
            }));
        
            setSuccess('Payment successful');
            setAmount('')
            onClose();
            
        }
    } catch (error) {
        if (error.response) {
            setError(error.response.data.message || 'Payment failed. Please try again.');
        } else {
            setError('Payment failed. Please try again.');
        }
        console.error('Payment error:', error);
    }
};
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-lg font-bold mb-4">Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Send money to</label>
            <h4 className='text-2xl'>{name}</h4>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          {error && <div className="text-red-500">{error}</div>} 
          {success && <div className="text-green-500">{success}</div>} 
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white font-semibold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
