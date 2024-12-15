import React, { useState, useEffect } from "react";
import AdminSidebar from "../../adminheader/AdminSidebar";
import BookNavBar from "../../../AdminDash/Function/AdminBook/adminbooknav";
import img from "../../../../Assets/pay.jpg";
import "./adminpay.css";

const AdminPayment = () => {
  const [reportData, setReportData] = useState([
    { id: 1, status: "Paid", due: "$0" },
    { id: 2, status: "Unpaid", due: "$20" },
    { id: 3, status: "Unpaid", due: "$50" },
    { id: 4, status: "Paid", due: "$0" },
    { id: 5, status: "Unoaid", due: "$30" },
  ]);

  const [paymentDetails, setPaymentDetails] = useState([
    { id: 1, amount: "$50.00", method: "Bkash" },
    { id: 2, amount: "$25.00", method: "Rocket" },
    { id: 3, amount: "$75.00", method: "Nagad" },
    { id: 4, amount: "$100.00", method: "Bkash"},
    { id: 5, amount: "$40.00", method: "Rocket" },
  ]);

  const [filteredReports, setFilteredReports] = useState(reportData);
  const [filteredPayments, setFilteredPayments] = useState(paymentDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [averagePayment, setAveragePayment] = useState(0);

  // Calculate average payment
  useEffect(() => {
    if (paymentDetails.length > 0) {
      const total = paymentDetails.reduce((sum, payment) => {
        const amount = parseFloat(payment.amount.replace("$", ""));
        return sum + amount;
      }, 0);
      setAveragePayment((total / paymentDetails.length).toFixed(2));
    } else {
      setAveragePayment(0);
    }
  }, [paymentDetails]);

  // Handle search and filtering for reports
  useEffect(() => {
    let updatedReports = [...reportData];

    if (searchTerm) {
      updatedReports = updatedReports.filter((report) =>
        report.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCriteria === "id") {
      updatedReports.sort((a, b) => a.id - b.id);
    } else if (filterCriteria === "due") {
      updatedReports.sort(
        (a, b) =>
          parseFloat(b.due.replace("$", "")) - parseFloat(a.due.replace("$", ""))
      );
    }

    setFilteredReports(updatedReports);
  }, [searchTerm, filterCriteria, reportData]);

  // Handle search and filtering for payments
  useEffect(() => {
    let updatedPayments = [...paymentDetails];

    if (searchTerm) {
      updatedPayments = updatedPayments.filter(
        (payment) =>
          payment.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payment.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCriteria === "id") {
      updatedPayments.sort((a, b) => a.id - b.id);
    } else if (filterCriteria === "amount") {
      updatedPayments.sort(
        (a, b) =>
          parseFloat(b.amount.replace("$", "")) -
          parseFloat(a.amount.replace("$", ""))
      );
    }

    setFilteredPayments(updatedPayments);
  }, [searchTerm, filterCriteria, paymentDetails]);

  // Delete functions for both tables
  const deleteReport = (id) => {
    setReportData(reportData.filter((report) => report.id !== id));
  };

  const deletePayment = (id) => {
    setPaymentDetails(paymentDetails.filter((payment) => payment.id !== id));
  };

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev);
  };

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
    setFilterVisible(false); // Close the dropdown
  };

  const handleSearch = (term) => {
    if (term) {
      setSearchTerm(term.trim());
    } else {
      setSearchTerm(""); // Reset if no input
    }
  };

  return (
    <div className="admin-payment-container">
      <AdminSidebar />
      <BookNavBar onSearch={handleSearch} />

      <div className="admain-content">
        <div className="adbook-welcome-bar">
          <div className="adbook-welcome-text">
            <h1>Payment Management</h1>
            <p>Manage payment reports and payment details efficiently.</p>
          </div>
          <div className="adbook-welcome-image">
            <img src={img} alt="Payment Management" />
          </div>
        </div>

        <div className="admin-payment-tables">
        {/* Payment Reports Table */}
        <div className="table-container">
          <h2>Reports</h2>
          <table className="admin-feedback-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Due</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {reportData.length > 0 ? (
                reportData.map((report) => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.status}</td>
                    <td>{report.due}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteReport(report.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No reports found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Payment Details Table */}
        <div className="table-container">
          <h2>Payment Details</h2>
          <table className="admin-feedback-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {paymentDetails.length > 0 ? (
                paymentDetails.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.method}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deletePayment(payment.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No payment details found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
    
  );
};


export default AdminPayment;
