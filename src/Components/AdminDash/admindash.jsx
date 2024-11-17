import React from "react";
import AdminNav from "./AdminNav";
import AdminSidebar from "./AdminSidebar";
import AdminWelcome from "./AdminWelcome";
import { Card, CardContent, Typography } from "@mui/material";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"; // Icon for Books
import BookIcon from "@mui/icons-material/Book"; // Icon for E-books
import PaymentIcon from "@mui/icons-material/Payment"; // Icon for Dues
import FeedbackIcon from "@mui/icons-material/Feedback"; // Icon for Feedback
import Feedback from './feedbackdeal';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import './admindash.css';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function AdminDash() {
  const cardData = [
    {
      title: "Total Members",
      count: 120,
      gradient: "linear-gradient(45deg, #ff6ec7, #ff7b9d)",
      chartData: [40, 30, 20, 10],
      chartType: "dot", // Dot chart type for "Total Members"
      icon: <LibraryBooksIcon style={{ fontSize: 40, color: "white" }} />, // Icon for Books
    },
    {
      title: "Total Books",
      count: 950,
      gradient: "linear-gradient(45deg, #36a2eb, #5a8fbf)",
      chartData: [35, 25, 25, 15],
      chartType: "bar",
      icon: <BookIcon style={{ fontSize: 40, color: "white" }} />, // Icon for E-books
    },
    {
      title: "Total E-books",
      count: 300,
      gradient: "linear-gradient(45deg, #ffce56, #ffdf74)",
      chartData: [50, 30, 10, 10],
      chartType: "bar",
      icon: <LibraryBooksIcon style={{ fontSize: 40, color: "white" }} />, // Icon for Books
    },
    {
      title: "Total Dues",
      count: 150,
      gradient: "linear-gradient(45deg, #4bc0c0, #6fe1e1)",
      chartData: [60, 25, 10, 5],
      chartType: "line",
      icon: <PaymentIcon style={{ fontSize: 40, color: "white" }} />, // Icon for Dues
    },
    {
      title: "Total Feedback",
      count: 45,
      gradient: "linear-gradient(45deg, #9966ff, #b38bff)",
      chartData: [15, 40, 25, 20],
      chartType: "bar",
      icon: <FeedbackIcon style={{ fontSize: 40, color: "white" }} />, // Icon for Feedback
    },
  ];

  const createDotChartData = (data, color) => ({
    labels: ["1", "2", "3", "4", "5"], // Dummy labels
    datasets: [
      {
        label: "Activity",
        data: data.map((d, idx) => ({
          x: idx + 1,
          y: d,
        })),
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2,
        pointRadius: 8, // Larger dot size for better visibility
        pointBorderColor: 'white', // Border around dots for contrast
        pointBackgroundColor: color, // Dot background color matches chart color
      },
    ],
  });

  // Define missing chart data for additional charts
  const doughnutData = {
    labels: ["Fancy", "Science", "thriller", "Mystery"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "New Members",
        backgroundColor: "#36A2EB",
        data: [10, 20, 30, 40, 50],
      },
    ],
  };
  const feedbackList = [
    { id: '01', comment: 'I think a book on Data Science would be a great addition to the library!' },
    { id: '02', comment: 'The website could use a dark mode feature to make it easier on the eyes.' },
    { id: '03', comment: 'How about adding more fantasy novels to the collection?' },
    { id: '04', comment: 'It would be great if we could filter books by their genre on the homepage.' },
  ];


  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Dues",
        borderColor: "#FF6384",
        data: [65, 59, 80, 81, 56],
        fill: false,
        pointBackgroundColor: "#FF6384", // Larger and more visible dots
        pointRadius: 7, // Make dots bigger
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-main-content">
        <AdminNav />
        <AdminWelcome />
        
        {/* Cards Section */}
        <div className="admin-dashboard-cards">
          {cardData.map((card, index) => (
            <Card key={index} className="admin-card" style={{ background: card.gradient }}>
              <CardContent>
                {/* Display the icon */}
                <div className="admin-card-icon">
                  {card.icon}
                </div>
                <Typography variant="h6" className="admin-card-title">
                  {card.title}
                </Typography>
                <Typography variant="h4" className="admin-card-count">
                  {card.count}
                </Typography>

                {/* Render chart based on chart type */}
                <div className="admin-card-chart">
                  {card.chartType === "line" && (
                    <Line
                      data={{
                        labels: ["1", "2", "3", "4", "5"], // Dummy labels
                        datasets: [
                          {
                            data: card.chartData,
                            borderColor: "white",
                            borderWidth: 2,
                            tension: 0.4,
                            pointRadius: 0,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                          x: { display: false },
                          y: { display: false },
                        },
                      }}
                    />
                  )}

                  {card.chartType === "bar" && (
                    <Bar
                      data={{
                        labels: ["1", "2", "3", "4", "5"], // Dummy labels
                        datasets: [
                          {
                            label: "Activity",
                            data: card.chartData,
                            backgroundColor: "white",
                            borderColor: "white",
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                          x: { display: false },
                          y: { ticks: { display: false } },
                        },
                      }}
                    />
                  )}
                  {card.chartType === "dot" && (
                    <Line
                      data={createDotChartData(card.chartData, card.gradient)}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                          x: { display: false },
                          y: { display: false },
                        },
                      }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Charts Section */}
        <div className="admin-charts">
          <div className="admin-chart">
            <Doughnut data={doughnutData} />
          </div>
          <div className="admin-chart">
            <Bar data={barData} />
          </div>
          <div className="admin-chart">
            <Line data={lineData} />
          </div>
        </div>
        <Feedback feedbackList={feedbackList} />
      </div>
    </div>
  );
}

export default AdminDash;
