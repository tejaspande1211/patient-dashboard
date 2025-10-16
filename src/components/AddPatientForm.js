import React, { useState } from 'react';

function AddPatientForm({ onAdd }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !contact) return;
    onAdd({
      id: Date.now(),
      name,
      age: Number(age),
      contact,
      details
    });
    setName('');
    setAge('');
    setContact('');
    setDetails('');
    setShowForm(false);
  };

  return (
    <div className="mt-4">
      {!showForm && (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add New Patient
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 mt-3 border rounded shadow-sm bg-white" style={{maxWidth: '350px'}}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              value={age}
              onChange={e => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Contact"
              value={contact}
              onChange={e => setContact(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Details (optional)"
              value={details}
              onChange={e => setDetails(e.target.value)}
              style={{ height: '50px' }}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success me-2">Add</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddPatientForm;
