import React, { useState } from 'react';
import './paymentPage.css'; // Import the CSS file for styling
import bkashLogo from '../../../../Assets/bkash.jpeg';
import nogodLogo from '../../../../Assets/nagad.png';
import rocketLogo from '../../../../Assets/rocket.jpeg';

export default function PaymentPage() {
  const [dues, setDues] = useState(5000); // Initial dues amount
  const [status, setStatus] = useState(false); // Payment status: false = unpaid, true = paid

  const clearDues = () => {
    if (dues > 0) {
      setDues(0); // Set dues to zero
      setStatus(true); // Mark as paid
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <div className="payment-details">
        <h3>Current Dues: <span className="dues-amount">{dues > 0 ? `${dues} BDT` : "No Dues"}</span></h3>
        <div className="status">
          <span>Status: </span>
          <button className={`status-button ${status ? "paid" : "unpaid"}`}>
            {status ? "Paid" : "Unpaid"}
          </button>
        </div>
      </div>

      {/* Payment Options */}
      <h3>Payment Options</h3>
      <div className="payment-options">
        <div className="payment-option">
          <img src={bkashLogo} alt="bKash" className="payment-logo" />
          <button onClick={clearDues} disabled={status} className="pay-button">Pay with bKash</button>
        </div>
        <div className="payment-option">
          <img src={nogodLogo} alt="Nagad" className="payment-logo" />
          <button onClick={clearDues} disabled={status} className="pay-button">Pay with Nagad</button>
        </div>
        <div className="payment-option">
          <img src={rocketLogo} alt="Rocket" className="payment-logo" />
          <button onClick={clearDues} disabled={status} className="pay-button">Pay with Rocket</button>
        </div>
      </div>
    </div>
  );
}
