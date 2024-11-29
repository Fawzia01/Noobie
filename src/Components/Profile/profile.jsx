import React from 'react';
import './profile.css';

const UserInfoModal = ({ isOpen, onClose, student }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="User Information Modal"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Profile Picture */}
        <div className="user-profile-section">
          <img
            src={student.profilePicture || 'default-profile.jpg'}
            alt={`${student.name}'s profile`}
            className="user-profile-pic"
          />
        </div>

        {/* User Information */}
        <div className="user-details">
          <h3 className="user-name">{student.name}</h3>
          <p className="user-detail"><strong>Roll No:</strong> {student.Roll}</p>
          <p className="user-detail"><strong>Email:</strong> {student.email}</p>
          <p className="user-detail"><strong>Batch:</strong> {student.batch}</p>
          <p className="user-detail"><strong>Department:</strong> {student.department}</p>
          <p className="user-detail"><strong>Address:</strong> {student.address}</p>
          <p className="user-detail"><strong>Interest:</strong> {student.interest}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
