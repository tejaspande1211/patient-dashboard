import React, { useState, useEffect } from 'react';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';

function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const adapted = data.map((item, idx) => ({
          id: item.id,
          name: item.name,
          age: 25 + idx, // Demo age
          contact: item.phone,
          details: item.email
        }));
        setPatients(adapted);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not fetch data');
        setLoading(false);
      });
  }, []);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search patients by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row gy-4">
        {filtered.map(patient => (
          <div key={patient.id} className="col-12 col-md-6 col-lg-4">
            <PatientCard
              patient={patient}
              onViewDetails={() => setSelectedPatient(patient)}
            />
          </div>
        ))}
      </div>
      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
      <AddPatientForm onAdd={p => setPatients([...patients, p])} />
    </div>
  );
}

export default PatientsPage;
