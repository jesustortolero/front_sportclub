import React, { useState } from 'react';

const FilterForm = ({ onFilterSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isGBA, setIsGBA] = useState(null);

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    // Send field values to the parent component
    onFilterSubmit({
      startDate,
      endDate,
      isGBA,
    })
  }
  return (
    <form onSubmit={handleFilterSubmit} className="p-4 border rounded shadow-lg mt-10 bg-gray-200">
      <div className="mb-4">
        <label htmlFor="startDate" className="block font-semibold">Fecha de inicio:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="endDate" className="block font-semibold">Fecha de fin:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">
          <input
            type="checkbox"
            checked={isGBA}
            onChange={(e) => setIsGBA(e.target.checked)}
            className="mr-2"
          />
          Es de GBA
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded"
        >
          Filtrar
        </button>
      </div>
    </form>
  )
}

export default FilterForm;
