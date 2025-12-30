import { useEffect, useCallback, useMemo } from 'react';

/**
 * Keyboard shortcuts hook
 * @param {Object} config - Keyboard shortcuts configuration
 * @param {Function} config.onNavigateLeft - Left arrow key handler
 * @param {Function} config.onNavigateRight - Right arrow key handler
 * @param {Function} config.onNavigateUp - Up arrow key handler
 * @param {Function} config.onNavigateDown - Down arrow key handler
 * @param {Function} config.onDelete - Delete key handler
 * @param {Function} config.onUndo - Ctrl+Z handler
 * @param {Function} config.onRedo - Ctrl+Y handler
 * @param {Function} config.onCopy - Ctrl+C handler
 * @param {Function} config.onPaste - Ctrl+V handler
 * @param {Function} config.onZoomIn - Ctrl+= or Ctrl++ handler
 * @param {Function} config.onZoomOut - Ctrl+- handler
 * @param {Object} config.keyMap - Custom key mappings (optional)
 * @param {boolean} config.enabled - Enable/disable shortcuts
 */
const useKeyboardShortcuts = ({
  onNavigateLeft,
  onNavigateRight,
  onNavigateUp,
  onNavigateDown,
  onDelete,
  onUndo,
  onRedo,
  onCopy,
  onPaste,
  onZoomIn,
  onZoomOut,
  keyMap = {},
  enabled = true,
}) => {
  // Default key mappings - useMemo ile sarmaladık
  const defaultKeyMap = useMemo(() => ({
    navigateLeft: keyMap.navigateLeft || 'ArrowLeft',
    navigateRight: keyMap.navigateRight || 'ArrowRight',
    navigateUp: keyMap.navigateUp || 'ArrowUp',
    navigateDown: keyMap.navigateDown || 'ArrowDown',
    delete: keyMap.delete || 'Delete',
    undo: keyMap.undo || { key: 'z', ctrl: true },
    redo: keyMap.redo || { key: 'y', ctrl: true },
    copy: keyMap.copy || { key: 'c', ctrl: true },
    paste: keyMap.paste || { key: 'v', ctrl: true },
    zoomIn: keyMap.zoomIn || { key: '=', ctrl: true },
    zoomOut: keyMap.zoomOut || { key: '-', ctrl: true },
  }), [keyMap]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!enabled) return;

      const key = e.key;
      const isCtrl = e.ctrlKey || e.metaKey; // Mac için cmd tuşu desteği

      // Arrow keys
      if (key === defaultKeyMap.navigateLeft && onNavigateLeft) {
        e.preventDefault();
        onNavigateLeft();
      } else if (key === defaultKeyMap.navigateRight && onNavigateRight) {
        e.preventDefault();
        onNavigateRight();
      } else if (key === defaultKeyMap.navigateUp && onNavigateUp) {
        e.preventDefault();
        onNavigateUp();
      } else if (key === defaultKeyMap.navigateDown && onNavigateDown) {
        e.preventDefault();
        onNavigateDown();
      }
      // Delete key
      else if (key === defaultKeyMap.delete && onDelete) {
        e.preventDefault();
        onDelete();
      }
      // Ctrl+Z (Undo)
      else if (
        isCtrl &&
        key.toLowerCase() === defaultKeyMap.undo.key.toLowerCase() &&
        onUndo
      ) {
        e.preventDefault();
        onUndo();
      }
      // Ctrl+Y (Redo)
      else if (
        isCtrl &&
        key.toLowerCase() === defaultKeyMap.redo.key.toLowerCase() &&
        onRedo
      ) {
        e.preventDefault();
        onRedo();
      }
      // Ctrl+C (Copy)
      else if (
        isCtrl &&
        key.toLowerCase() === defaultKeyMap.copy.key.toLowerCase() &&
        onCopy
      ) {
        e.preventDefault();
        onCopy();
      }
      // Ctrl+V (Paste)
      else if (
        isCtrl &&
        key.toLowerCase() === defaultKeyMap.paste.key.toLowerCase() &&
        onPaste
      ) {
        e.preventDefault();
        onPaste();
      }
      // Ctrl+= or Ctrl++ (Zoom In)
      else if (
        isCtrl &&
        (key === '=' || key === '+' || (key === '=' && e.shiftKey)) &&
        onZoomIn
      ) {
        e.preventDefault();
        onZoomIn();
      }
      // Ctrl+- (Zoom Out)
      else if (
        isCtrl &&
        key === '-' &&
        onZoomOut
      ) {
        e.preventDefault();
        onZoomOut();
      }
    },
    [
      enabled,
      defaultKeyMap,
      onNavigateLeft,
      onNavigateRight,
      onNavigateUp,
      onNavigateDown,
      onDelete,
      onUndo,
      onRedo,
      onCopy,
      onPaste,
      onZoomIn,
      onZoomOut,
    ]
  );

  useEffect(() => {
    if (enabled) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [enabled, handleKeyDown]);
};

export default useKeyboardShortcuts;
