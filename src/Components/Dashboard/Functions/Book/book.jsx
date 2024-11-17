import React from "react";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const books = [
    { id: 1, cover: "https://via.placeholder.com/100", title: "Book One", author: "Author A", publishedDate: "2021-01-01", availableCopies: 3 },
    { id: 2, cover: "https://via.placeholder.com/100", title: "Book Two", author: "Author B", publishedDate: "2020-05-10", availableCopies: 5 },
    { id: 3, cover: "https://via.placeholder.com/100", title: "Book Three", author: "Author C", publishedDate: "2019-08-15", availableCopies: 2 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Catalogue</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
        border="1"
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", width: "5%" }}>ID</th>
            <th style={{ padding: "10px", width: "20%" }}>Cover</th>
            <th style={{ padding: "10px" }}>Title</th>
            <th style={{ padding: "10px" }}>Author</th>
            <th style={{ padding: "10px" }}>Published Date</th>
            <th style={{ padding: "10px" }}>Available Copies</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td style={{ padding: "10px", textAlign: "center" }}>{book.id}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: "80px", height: "100px", objectFit: "cover" }}
                />
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>{book.title}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{book.author}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{book.publishedDate}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{book.availableCopies}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <Link
                  to={`/book/${book.id}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "blue",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Catalogue;
