import React from 'react';
import './Timeline.css';

/**
 * Loading Spinner Component
 * Yükleme durumlarında gösterilir
 */
const LoadingSpinner = ({ 
  size = 'medium', // 'small', 'medium', 'large'
  type = 'spinner', // 'spinner', 'dots', 'pulse'
  className = '',
  overlay = false // Overlay gösterilsin mi?
}) => {
  if (overlay) {
    return (
      <div className="loading-overlay">
        <div className={`loading-spinner loading-spinner-${type} loading-spinner-${size} ${className}`}>
          {type === 'spinner' && <div className="spinner-circle"></div>}
          {type === 'dots' && (
            <div className="dots-container">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {type === 'pulse' && <div className="pulse-circle"></div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`loading-spinner loading-spinner-${type} loading-spinner-${size} ${className}`}>
      {type === 'spinner' && <div className="spinner-circle"></div>}
      {type === 'dots' && (
        <div className="dots-container">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {type === 'pulse' && <div className="pulse-circle"></div>}
    </div>
  );
};

export default LoadingSpinner;

