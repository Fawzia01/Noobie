import React, { useState } from 'react';
import './paymentPage.css'; // Import the CSS file for styling
import bkashLogo from '../../../../Assets/bkash.jpeg';
import nogodLogo from '../../../../Assets/nagad.png';
import rocketLogo from '../../../../Assets/rocket.jpeg';
import Header from "../../../Header/header";
import img from '../../../../Assets/pay.jpg';

export default function PaymentPage() {
  const [dues, setDues] = useState(5000); // Initial dues amount
  const [status, setStatus] = useState(false); // Payment status: false = unpaid, true = paid
  const [showTransactionInput, setShowTransactionInput] = useState(false); // Show transaction input
  const [transactionId, setTransactionId] = useState(''); // Transaction ID
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Example state for sidebar (dummy)

  const clearDues = () => {
    if (transactionId.trim() !== '') {
      setDues(0); // Set dues to zero
      setStatus(true); // Mark as paid
      setShowTransactionInput(false); // Hide transaction input box
      setTransactionId(''); // Clear the transaction ID
    } else {
      alert('Please enter a valid transaction ID.');
    }
  };

  const handleBkashClick = () => {
    setShowTransactionInput(true); // Show transaction input box
  };

  return (
    <div className="payment-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className={`paymain-content ${isSidebarExpanded ? "shrink" : ""}`}>
        {/* Welcome Bar */}
        <div className="paywelcome-bar">
          <div className="paywelcome-text">
            <h1>Payment</h1>
            <p>Easily manage and pay your dues with our secure payment options.</p>
          </div>
          <div className="paywelcome-image">
            <img src={img} alt="Payment" />
          </div>
        </div>

        {/* Payment Details */}
        <div className="payment-details">
          <h3>
            Current Dues:{" "}
            <span className="dues-amount">
              {dues > 0 ? `${dues} BDT` : "No Dues"}
            </span>
          </h3>
          <div className="status">
            <span>Status: </span>
            <button className={`status-button ${status ? "paid" : "unpaid"}`}>
              {status ? "Paid" : "Unpaid"}
            </button>
          </div>
        </div>

        {/* Payment Options */}
        <h3>Payment Options</h3>
        <div className="payment-options-row">
          <div className="payment-option">
            <img src={bkashLogo} alt="bKash" className="payment-logo" />
            <button
              onClick={handleBkashClick}
              disabled={status}
              className="pay-button"
            >
              Pay with bKash
            </button>
          </div>
          <div className="payment-option">
            <img src={nogodLogo} alt="Nagad" className="payment-logo" />
            <button
              onClick={() => alert('This feature is not implemented yet.')}
              disabled={status}
              className="pay-button"
            >
              Pay with Nagad
            </button>
          </div>
          <div className="payment-option">
            <img src={rocketLogo} alt="Rocket" className="payment-logo" />
            <button
              onClick={() => alert('This feature is not implemented yet.')}
              disabled={status}
              className="pay-button"
            >
              Pay with Rocket
            </button>
          </div>
        </div>

        {/* Transaction ID Input */}
        {showTransactionInput && (
          <div className="transaction-input">
            <h4>Enter Transaction ID</h4>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Transaction ID"
              className="transaction-id-box"
            />
            <button onClick={clearDues} className="confirm-button">
              Confirm Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
