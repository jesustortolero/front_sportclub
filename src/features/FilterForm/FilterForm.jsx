import React, { useState } from 'react'
import './FilterForm.css'

const FilterForm = ({ onFilterSubmit }) => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    isGBA: null,
  })

  const handleFilterSubmit = (e) => {
    e.preventDefault()
    onFilterSubmit(filters)
  }

  const handleReset = () => {
    setFilters({
      startDate: '',
      endDate: '',
      isGBA: null,
    })
    onFilterSubmit({
      startDate: '',
      endDate: '',
      isGBA: null,
    })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <form onSubmit={handleFilterSubmit} className="filter-form">
      <div className="filter-form__group">
        <label htmlFor="startDate" className="filter-form__label">Fecha de inicio:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="filter-form__input"
        />
      </div>
      <div className="filter-form__group">
        <label htmlFor="endDate" className="filter-form__label">Fecha de fin:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="filter-form__input"
        />
      </div>
      <div className="filter-form__group">
        <label className="filter-form__label">
          <input
            type="checkbox"
            name="isGBA"
            checked={filters.isGBA}
            onChange={handleChange}
            className="filter-form__checkbox"
          />
          Es de GBA
        </label>
      </div>
      <div className="filter-form__group flex">
        <button
          type="submit"
          className="filter-form__btn"
        >
          Filtrar
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="filter-form__btn filter-form__btn--margin-right"
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default FilterForm
export {FilterForm}
