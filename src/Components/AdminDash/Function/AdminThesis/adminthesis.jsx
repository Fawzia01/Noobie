import React, { useState, useEffect } from "react";
import AdminSidebar from "../../adminheader/AdminSidebar";
import BookNavBar from "../../../AdminDash/Function/AdminBook/adminbooknav";
import img from "../../../../Assets/thesis.jpg";
import "./adminthesis.css";

const initialTheses = [
  {
    id: 1,
    title: "Facial Recognition Using CNN",
    author: "Maria Akter",
    year: 2025,
    topic: "Machine Learning",
    link: "https://drive.google.com/fake-thesis-1",
  },
  {
    id: 2,
    title: "Blockchain-Based Voting",
    author: "Ayan Chowdhury",
    year: 2025,
    topic: "Blockchain",
    link: "https://drive.google.com/fake-thesis-2",
  },
  {
    id: 3,
    title: "Smart Healthcare Monitoring",
    author: "Nishi Rahman",
    year: 2025,
    topic: "Healthcare",
    link: "https://drive.google.com/fake-thesis-3",
  },
  {
    id: 4,
    title: "Secure Cloud Data Storage",
    author: "Rahul Sharma",
    year: 2024,
    topic: "Cybersecurity",
    link: "https://drive.google.com/fake-thesis-4",
  },
  {
    id: 5,
    title: "Progressive Web App Performance",
    author: "Tania Ahmed",
    year: 2024,
    topic: "Web Development",
    link: "https://drive.google.com/fake-thesis-5",
  },
  {
    id: 6,
    title: "AI-Driven Crop Yield Prediction",
    author: "Kamal Hassan",
    year: 2023,
    topic: "Artificial Intelligence",
    link: "https://drive.google.com/fake-thesis-6",
  },
  {
    id: 7,
    title: "Quantum Computing in Cryptography",
    author: "Priya Patel",
    year: 2023,
    topic: "Cybersecurity",
    link: "https://drive.google.com/fake-thesis-7",
  },
  {
    id: 8,
    title: "Decentralized Finance Protocols",
    author: "Ahmed Khan",
    year: 2024,
    topic: "Blockchain",
    link: "https://drive.google.com/fake-thesis-8",
  },
];

const AdminThesis = () => {
  const [theses, setTheses] = useState(initialTheses);
  const [filteredTheses, setFilteredTheses] = useState(initialTheses);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [newThesis, setNewThesis] = useState({
    title: "",
    author: "",
    year: "",
    topic: "",
    link: "",
  });

  useEffect(() => {
    let updated = [...theses];

    if (searchTerm) {
      updated = updated.filter((t) =>
        t.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCriteria === "year") {
      updated.sort((a, b) => b.year - a.year);
    } else if (filterCriteria === "topic") {
      updated.sort((a, b) => a.topic.localeCompare(b.topic));
    }

    setFilteredTheses(updated);
  }, [searchTerm, filterCriteria, theses]);

  const deleteThesis = (id) => {
    setTheses(theses.filter((t) => t.id !== id));
  };

  const addThesis = (e) => {
    e.preventDefault();
    const { title, author, year, topic, link } = newThesis;

    if (!title || !author || !year || !topic || !link) {
      alert("Please fill all fields.");
      return;
    }

    const id = Math.max(...theses.map((t) => t.id)) + 1;
    setTheses([
      ...theses,
      { ...newThesis, id, year: Number(newThesis.year) },
    ]);

    setNewThesis({ title: "", author: "", year: "", topic: "", link: "" });
  };

  const toggleFilter = () => setFilterVisible((prev) => !prev);
  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
    setFilterVisible(false);
  };

  const handleSearch = (term) => {
    if (typeof term === "string" && term.trim() !== "") {
      setSearchTerm(term.trim());
    } else {
      setSearchTerm("");
    }
  };

  return (
    <div className="admin-book-container">
      <AdminSidebar />
      <BookNavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          hidepart={true}
        />


      <div className="adfeed-content">
        <div className="adfeed-welcome-bar">
          <div className="adfeed-welcome-text">
            <h1>Thesis Management</h1>
            <p>Manage academic theses - add, delete, and review.</p>
          </div>
          <div className="adfeed-welcome-image">
            <img src={img} alt="Thesis" />
          </div>
        </div>

        {/* Add Thesis Form */}
        <form className="adthesis-add-form" onSubmit={addThesis}>
          <input
            type="text"
            placeholder="Title"
            value={newThesis.title}
            onChange={(e) =>
              setNewThesis({ ...newThesis, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={newThesis.author}
            onChange={(e) =>
              setNewThesis({ ...newThesis, author: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Year"
            value={newThesis.year}
            onChange={(e) =>
              setNewThesis({ ...newThesis, year: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Topic"
            value={newThesis.topic}
            onChange={(e) =>
              setNewThesis({ ...newThesis, topic: e.target.value })
            }
            required
          />
          <input
            type="url"
            placeholder="Thesis Link (PDF/Drive)"
            value={newThesis.link}
            onChange={(e) =>
              setNewThesis({ ...newThesis, link: e.target.value })
            }
            required
          />
         
        </form>
         <button type="submit" className="add-button">
            Add Thesis
          </button>

        {/* Thesis Table */}
        <table className="admin-thesis-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Topic</th>
              <th>Link</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {filteredTheses.length > 0 ? (
              filteredTheses.map((thesis) => (
                <tr key={thesis.id}>
                  <td>{thesis.id}</td>
                  <td>{thesis.title}</td>
                  <td>{thesis.author}</td>
                  <td>{thesis.year}</td>
                  <td>{thesis.topic}</td>
                  <td>
                    <a
                      href={thesis.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteThesis(thesis.id)}
                      aria-label={`Delete thesis ${thesis.title}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No theses found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminThesis;


