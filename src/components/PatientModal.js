import React from 'react';

function PatientModal({ patient, onClose }) {
  if (!patient) return null;

  return (
    <div
      className="modal show fade"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
      tabIndex="-1"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{patient.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Details:</strong> {patient.details || "N/A"}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientModal;
