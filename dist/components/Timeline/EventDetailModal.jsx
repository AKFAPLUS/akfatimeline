import React, { useState, useEffect } from 'react';
import './Timeline.css';

const EventDetailModal = ({
  event,
  isOpen,
  onClose,
  onSave,
  onDelete,
  resources = [],
}) => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    resourceId: '',
    ...event,
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        startDate: event.startDate 
          ? new Date(event.startDate).toISOString().split('T')[0]
          : '',
        endDate: event.endDate
          ? new Date(event.endDate).toISOString().split('T')[0]
          : '',
        resourceId: event.resourceId || '',
        ...event,
      });
    }
  }, [event]);

  if (!isOpen || !event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      const updatedEvent = {
        ...event,
        ...formData,
        startDate: new Date(formData.startDate),
        endDate: new Date(formData.endDate),
      };
      onSave(updatedEvent);
    }
    onClose();
  };

  const handleDelete = () => {
    if (onDelete && window.confirm('Bu event\'i silmek istediğinize emin misiniz?')) {
      onDelete(event.id);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Event Düzenle</h2>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Başlık</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Resource</label>
            <select
              value={formData.resourceId}
              onChange={(e) => setFormData({ ...formData, resourceId: e.target.value })}
              required
            >
              <option value="">Seçiniz...</option>
              {resources.map((resource) => (
                <option key={resource.id} value={resource.id}>
                  {resource.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Başlangıç Tarihi</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Bitiş Tarihi</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-delete" onClick={handleDelete}>
              Sil
            </button>
            <div>
              <button type="button" className="btn-cancel" onClick={onClose}>
                İptal
              </button>
              <button type="submit" className="btn-save">
                Kaydet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventDetailModal;

