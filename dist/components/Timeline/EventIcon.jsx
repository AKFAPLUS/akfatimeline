import React from 'react';
import './Timeline.css';

/**
 * Event Icon Component
 * Event'lerde gösterilecek ikonları render eder
 */
const EventIcon = ({ type, className = '' }) => {
  const getIconContent = () => {
    switch (type) {
      case 'balance-warning':
        return '⚠️'; // Bakiye uyarısı
      case 'important-note':
        return '📝'; // Önemli not
      case 'payment-pending':
        return '💳'; // Ödeme bekliyor
      case 'confirmed':
        return '✅'; // Onaylandı
      case 'cancelled':
        return '❌'; // İptal edildi
      case 'pending':
        return '⏳'; // Beklemede
      case 'completed':
        return '✓'; // Tamamlandı
      case 'in-progress':
        return '▶️'; // Devam ediyor
      case 'alert':
        return '🔔'; // Uyarı
      case 'info':
        return 'ℹ️'; // Bilgi
      default:
        return null;
    }
  };

  const iconContent = getIconContent();
  if (!iconContent) return null;

  return (
    <span className={`event-icon event-icon-${type} ${className}`}>
      {iconContent}
    </span>
  );
};

export default EventIcon;

