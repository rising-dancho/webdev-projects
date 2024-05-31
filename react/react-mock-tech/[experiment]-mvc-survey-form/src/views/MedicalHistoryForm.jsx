import React from 'react';

function MedicalHistoryForm({ data, onChange, onNext, onPrevious }) {
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    onChange({ [name]: type === 'checkbox' ? checked : value });
  }
  return (
    <div>
      <h2>Medical History</h2>
      <label>
        Do you drink alcohol?
        <input
          type="checkbox"
          name="drinkAlcohol"
          checked={data.drinkAlcohol}
          onChange={handleChange}
        />
      </label>
      {data.drinkAlcohol && (
        <textarea
          name="alcoholFrequency"
          value={data.alcoholFrequency}
          onChange={handleChange}
          placeholder="How often?"
        />
      )}
      <label>
        Do you smoke?
        <input
          type="checkbox"
          name="smoke"
          checked={data.smoke}
          onChange={handleChange}
        />
      </label>
      {data.smoke && (
        <textarea
          name="smokeFrequency"
          value={data.smokeFrequency}
          onChange={handleChange}
          placeholder="How often?"
        />
      )}
      <input
        type="text"
        name="bloodType"
        value={data.bloodType}
        onChange={handleChange}
        placeholder="Blood Type"
      />
      <textarea
        name="previousConditions"
        value={data.previousConditions}
        onChange={handleChange}
        placeholder="Other previous conditions"
      />
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default MedicalHistoryForm;
