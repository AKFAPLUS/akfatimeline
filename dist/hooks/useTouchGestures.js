// src/hooks/useTouchGestures.js

import { useRef, useCallback } from 'react';

/**
 * Touch gesture hook for mobile support
 * @param {Object} handlers - Gesture handlers
 * @returns {Object} - Touch event handlers
 */
export const useTouchGestures = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onPinch,
  minSwipeDistance = 50,
  enabled = true,
}) => {
  const touchStartRef = useRef(null);
  const touchStartTimeRef = useRef(null);
  const lastTouchRef = useRef(null);

  const handleTouchStart = useCallback((e) => {
    if (!enabled) return;
    
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
    touchStartTimeRef.current = Date.now();
    lastTouchRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }, [enabled]);

  const handleTouchMove = useCallback((e) => {
    if (!enabled || !touchStartRef.current) return;
    
    const touch = e.touches[0];
    if (lastTouchRef.current) {
      lastTouchRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    }
  }, [enabled]);

  const handleTouchEnd = useCallback((e) => {
    if (!enabled || !touchStartRef.current || !lastTouchRef.current) return;
    
    const touchEnd = e.changedTouches[0];
    const deltaX = touchEnd.clientX - touchStartRef.current.x;
    const deltaY = touchEnd.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartTimeRef.current;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    // Hızlı swipe kontrolü (300ms içinde)
    if (deltaTime < 300 && (absDeltaX > minSwipeDistance || absDeltaY > minSwipeDistance)) {
      if (absDeltaX > absDeltaY) {
        // Yatay swipe
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      } else {
        // Dikey swipe
        if (deltaY > 0 && onSwipeDown) {
          onSwipeDown();
        } else if (deltaY < 0 && onSwipeUp) {
          onSwipeUp();
        }
      }
    }
    
    touchStartRef.current = null;
    lastTouchRef.current = null;
  }, [enabled, minSwipeDistance, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
};

