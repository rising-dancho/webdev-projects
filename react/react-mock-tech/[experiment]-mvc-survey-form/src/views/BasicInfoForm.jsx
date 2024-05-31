import React from 'react';

function BasicInfoForm({ data, onChange, onNext }) {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Basic Info</h2>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="date"
        name="birthday"
        value={data.birthday}
        onChange={handleChange}
        placeholder="Birthday"
      />
      <input
        type="text"
        name="address"
        value={data.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="number"
        name="height"
        value={data.height}
        onChange={handleChange}
        placeholder="Height (cm)"
      />
      <input
        type="number"
        name="weight"
        value={data.weight}
        onChange={handleChange}
        placeholder="Weight (kg)"
      />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default BasicInfoForm;
