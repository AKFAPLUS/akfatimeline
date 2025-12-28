import React from 'react';
import './Timeline.css';

/**
 * Event Badge Component
 * Önemli event'ler için badge gösterir
 */
const EventBadge = ({ 
  text, 
  type = 'default', // 'default', 'important', 'urgent', 'new', 'custom'
  position = 'top-right', // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
  className = '',
  style = {}
}) => {
  return (
    <span 
      className={`event-badge event-badge-${type} event-badge-${position} ${className}`}
      style={style}
    >
      {text}
    </span>
  );
};

export default EventBadge;

