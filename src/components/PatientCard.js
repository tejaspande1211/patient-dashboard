function PatientCard({ patient, onViewDetails }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-2">{patient.name}</h5>
        <p className="card-text mb-1"><strong>Age:</strong> {patient.age}</p>
        <p className="card-text mb-2"><strong>Contact:</strong> {patient.contact}</p>
        <button className="btn btn-outline-primary" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}
export default PatientCard;
