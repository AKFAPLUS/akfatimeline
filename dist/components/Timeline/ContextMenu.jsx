import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

/**
 * Context Menu Component
 * Sağ tık menüsü için özelleştirilebilir menü bileşeni
 */
const ContextMenu = ({ 
  isOpen, 
  position, 
  onClose, 
  menuItems = [],
  resource = null,
  date = null,
}) => {
  const menuRef = useRef(null);
  const [adjustedPosition, setAdjustedPosition] = useState(position);

  // Menü pozisyonunu mouse'a yakın tut ve ekran sınırları içinde tut
  useEffect(() => {
    if (!menuRef.current || !position || !isOpen) {
      setAdjustedPosition(position);
      return;
    }

    // Menü render edildikten sonra pozisyonu ayarla
    const updatePosition = () => {
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let adjustedX = position.x;
      let adjustedY = position.y;

      // Sağa taşma kontrolü
      if (position.x + menuRect.width > viewportWidth) {
        adjustedX = position.x - menuRect.width;
      }

      // Aşağıya taşma kontrolü
      if (position.y + menuRect.height > viewportHeight) {
        adjustedY = position.y - menuRect.height;
      }

      // Sola taşma kontrolü
      if (adjustedX < 10) {
        adjustedX = 10;
      }

      // Yukarıya taşma kontrolü
      if (adjustedY < 10) {
        adjustedY = 10;
      }

      setAdjustedPosition({ x: adjustedX, y: adjustedY });
    };

    // Menü render edildikten sonra pozisyonu güncelle
    setTimeout(updatePosition, 0);
  }, [position, isOpen]);

  // Menü dışına tıklanınca kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Scroll olduğunda menüyü kapat
      document.addEventListener('scroll', onClose, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('scroll', onClose, true);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !position) return null;

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick(resource, date);
    }
    if (item.closeOnClick !== false) {
      onClose();
    }
  };

  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{
        position: 'fixed',
        left: `${(adjustedPosition?.x ?? position.x) - 150}px`,
        top: `${(adjustedPosition?.y ?? position.y) - 150}px`,
        zIndex: 10005,
      }}
    >
      <div className="context-menu-content">
        {menuItems.length === 0 ? (
          <div className="context-menu-item context-menu-item-disabled">
            Menü öğesi yok
          </div>
        ) : (
          menuItems.map((item, index) => {
            if (item.separator) {
              return <div key={`separator-${index}`} className="context-menu-separator" />;
            }

            if (item.hidden) {
              return null;
            }

            return (
              <div
                key={item.id || index}
                className={`context-menu-item ${item.disabled ? 'context-menu-item-disabled' : ''} ${item.danger ? 'context-menu-item-danger' : ''}`}
                onClick={() => !item.disabled && handleItemClick(item)}
                title={item.tooltip || item.label}
              >
                {item.icon && <span className="context-menu-item-icon">{item.icon}</span>}
                <span className="context-menu-item-label">{item.label}</span>
                {item.shortcut && (
                  <span className="context-menu-item-shortcut">{item.shortcut}</span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContextMenu;

