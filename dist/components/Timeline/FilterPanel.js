// src/components/Timeline/FilterPanel.js (Demo Component)

import React, { useState } from 'react';
import './Timeline.css';

const FilterPanel = ({ 
  events, 
  resources, 
  onFilterChange,
  onClearFilters 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResources, setSelectedResources] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Tüm unique status'leri bul
  const allStatuses = [...new Set(events.map(e => e.status).filter(Boolean))];

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    applyFilters({
      searchTerm: value,
      resourceIds: selectedResources,
      statuses: selectedStatuses,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    });
  };

  const handleResourceToggle = (resourceId) => {
    const newResources = selectedResources.includes(resourceId)
      ? selectedResources.filter(id => id !== resourceId)
      : [...selectedResources, resourceId];
    setSelectedResources(newResources);
    applyFilters({
      searchTerm,
      resourceIds: newResources,
      statuses: selectedStatuses,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    });
  };

  const handleStatusToggle = (status) => {
    const newStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status)
      : [...selectedStatuses, status];
    setSelectedStatuses(newStatuses);
    applyFilters({
      searchTerm,
      resourceIds: selectedResources,
      statuses: newStatuses,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    });
  };

  const handleDateChange = (type, value) => {
    if (type === 'start') {
      setStartDate(value);
      applyFilters({
        searchTerm,
        resourceIds: selectedResources,
        statuses: selectedStatuses,
        startDate: value ? new Date(value) : null,
        endDate: endDate ? new Date(endDate) : null,
      });
    } else {
      setEndDate(value);
      applyFilters({
        searchTerm,
        resourceIds: selectedResources,
        statuses: selectedStatuses,
        startDate: startDate ? new Date(startDate) : null,
        endDate: value ? new Date(value) : null,
      });
    }
  };

  const applyFilters = (filters) => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedResources([]);
    setSelectedStatuses([]);
    setStartDate('');
    setEndDate('');
    if (onClearFilters) {
      onClearFilters();
    }
  };

  // Tüm resource'ları düzleştir
  const allResources = resources.flatMap(group => group.resources || []);

  return (
    <div className="filter-panel">
      <div className="filter-panel-header">
        <h3>Filtreler</h3>
        <button onClick={handleClear} className="filter-clear-btn">
          Temizle
        </button>
      </div>

      <div className="filter-section">
        <label>Arama</label>
        <input
          type="text"
          placeholder="Event başlığına göre ara..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="filter-search-input"
        />
      </div>

      <div className="filter-section">
        <label>Tarih Aralığı</label>
        <div className="filter-date-range">
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleDateChange('start', e.target.value)}
            placeholder="Başlangıç"
            className="filter-date-input"
          />
          <span> - </span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => handleDateChange('end', e.target.value)}
            placeholder="Bitiş"
            className="filter-date-input"
          />
        </div>
      </div>

      <div className="filter-section">
        <label>Resource'lar</label>
        <div className="filter-checkbox-group">
          {allResources.map(resource => (
            <label key={resource.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedResources.includes(resource.id)}
                onChange={() => handleResourceToggle(resource.id)}
              />
              <span>{resource.name || resource.id}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <label>Status</label>
        <div className="filter-checkbox-group">
          {allStatuses.map(status => (
            <label key={status} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedStatuses.includes(status)}
                onChange={() => handleStatusToggle(status)}
              />
              <span>{status}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

