(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["AkfaTimeline"] = factory(require("react"));
	else
		root["AkfaTimeline"] = factory(root["react"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__155__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 27
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* AkfaTimeline - Glassmorphism Theme */

:root {
  /* Light Theme - Glassmorphism */
  --bg-primary: rgba(255, 255, 255, 0.7);
  --bg-secondary: rgba(255, 255, 255, 0.5);
  --bg-tertiary: rgba(255, 255, 255, 0.3);
  --bg-hover: rgba(255, 255, 255, 0.8);
  
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-tertiary: #6a6a6a;
  
  --border-color: rgba(0, 0, 0, 0.15);
  --border-hover: rgba(0, 0, 0, 0.25);
  --border-strong: rgba(0, 0, 0, 0.2);
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
  
  --accent-primary: rgba(99, 102, 241, 0.6);
  --accent-hover: rgba(99, 102, 241, 0.8);
  --accent-light: rgba(99, 102, 241, 0.2);
  
  --event-bg: rgba(99, 102, 241, 0.85);
  --event-text: #ffffff;
  --event-border: rgba(99, 102, 241, 0.3);
  --event-shadow: rgba(99, 102, 241, 0.4);
  
  --new-event-bg: rgba(236, 72, 153, 0.85);
  --new-event-text: #ffffff;
  
  --selected-bg: rgba(99, 102, 241, 0.25);
  --group-header-bg: rgb(176, 175, 175);
  
  --resource-width: 180px;
  --cell-height: 45px;
  --header-height: 70px;
  --header-total-height: 80px;
  --header-month-height: 40px;
  --header-day-height: 40px;
  --container-height: 600px;
  
  --blur-sm: blur(8px);
  --blur-md: blur(12px);
  --blur-lg: blur(16px);
}

/* Dark Theme - Glassmorphism */
.dark-mode {
  --bg-primary: rgba(17, 24, 39, 0.7);
  --bg-secondary: rgba(17, 24, 39, 0.5);
  --bg-tertiary: rgba(17, 24, 39, 0.3);
  --bg-hover: rgba(17, 24, 39, 0.85);
  
  --text-primary: #f3f4f6;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
  
  --border-color: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);
  --border-strong: rgba(255, 255, 255, 0.15);
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 20px rgba(139, 92, 246, 0.4);
  
  --accent-primary: rgba(139, 92, 246, 0.6);
  --accent-hover: rgba(139, 92, 246, 0.8);
  --accent-light: rgba(139, 92, 246, 0.25);
  
  --event-bg: rgba(139, 92, 246, 0.75);
  --event-text: #ffffff;
  --event-border: rgba(255, 255, 255, 0.25);
  --event-shadow: rgba(139, 92, 246, 0.5);
  
  --new-event-bg: rgba(236, 72, 153, 0.75);
  --new-event-text: #ffffff;
  
  --selected-bg: rgba(139, 92, 246, 0.3);
  --group-header-bg: rgba(16, 16, 26, 0.5);
}

/* Base Container */
.timeline-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  box-sizing: border-box;
  color: var(--text-primary);
  user-select: none;
}

/* Master Header */
.timeline-master-header {
  width: 100%;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-bottom: 1px solid var(--border-color);
  padding: 15px 20px;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: var(--shadow-sm);
}

/* Timeline Body */
.timeline-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Resources Container */
.timeline-resources-container {
  width: var(--resource-width);
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-right: 1px solid var(--border-color);
  position: sticky;
  left: 0;
  top: var(--header-total-height);
  z-index: 5;
  overflow-y: auto;
  box-shadow: var(--shadow-md);
}

/* Resources Header */
.resources-header {
  background: var(--bg-tertiary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  text-align: center;
  width: var(--resource-width);
  font-weight: 600;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: var(--header-total-height);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--shadow-sm);
  padding: 12px;
}

/* Group Header Row */
.group-header-row {
  display: flex;
  height: var(--cell-height);
  background: var(--group-header-bg);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
}

.group-header-cell {
  flex: 1;
  border-right: 1px solid var(--border-color);
  text-align: center;
  background: transparent;
  color: var(--text-secondary);
  height: var(--cell-height);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  box-sizing: border-box;
}

/* Resource Groups */
.resource-group {
  display: flex;
  flex-direction: column;
}

.resource-group-header {
  background: var(--bg-tertiary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 13px;
  height: var(--cell-height);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.resource-group-header:hover {
  background: var(--bg-hover);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
}

/* Resource Cells */
.resource-cell {
  padding: 0 15px;
  text-align: left;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  height: var(--cell-height);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  box-sizing: border-box;
  font-size: 13px;
  transition: all 0.2s ease;
}

.resource-cell:hover {
  background: var(--bg-hover);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
}

/* Timeline Scrollable Container */
.timeline-scrollable-container {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--bg-primary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
}

/* Header Content Wrapper */
.timeline-header-content-wrapper {
  display: flex;
  flex-direction: column;
}

/* Timeline Header */
.timeline-header {
  display: flex;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  position: sticky;
  top: 0;
  z-index: 3;
  height: var(--header-total-height);
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

/* Timeline Content */
.timeline-content {
  display: flex;
  flex-direction: column;
}

/* Group Container */
.group-container {
  display: flex;
  flex-direction: column;
}

/* Resource Rows */
.resource-row {
  display: flex;
  box-sizing: border-box;
  position: relative;
  height: var(--cell-height);
  border-bottom: 1px solid var(--border-strong);
  overflow: visible;
}

/* Timeline Cells */
.timeline-cell {
  flex: 1;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  height: 100%;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s ease;
}

.timeline-cell:hover {
  background: var(--accent-light);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
}

.timeline-cell.selected {
  background: var(--selected-bg);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  box-shadow: inset 0 0 10px var(--accent-primary);
}

/* Timeline Event */
.timeline-event {
  position: absolute;
  background: var(--event-bg);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  color: var(--event-text);
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  padding-left: 20px; /* Drag handle için alan */
  border-radius: 12px;
  box-sizing: border-box;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--event-border);
  top: 5px;
  height: calc(var(--cell-height) - 10px);
  max-height: calc(var(--cell-height) - 10px);
  box-shadow: var(--shadow-md), 0 0 15px var(--event-shadow);
  cursor: default;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
}

.timeline-event:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), 0 0 20px var(--event-shadow);
  backdrop-filter: var(--blur-lg);
  -webkit-backdrop-filter: var(--blur-lg);
}

.timeline-event-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  display: inline-block;
}

/* Saatlik Rezervasyon Stilleri - Ana Timeline'da Gruplanmış Görünüm */
.timeline-event-hourly {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.75), rgba(219, 39, 119, 0.75)) !important;
  border: 2px solid rgba(255, 255, 255, 0.6) !important;
  border-left: 4px solid rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 2px 8px rgba(236, 72, 153, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  opacity: 0.95;
  position: absolute !important;
  font-weight: 600;
  padding: 6px 6px !important; /* Kompakt padding - drag handle yok */
  padding-left: 24px !important; /* Saat ikonu için alan */
  min-width: 0 !important; /* Sütun genişliğini bozmaması için */
  max-width: calc(100% - 4px) !important; /* Border için alan bırak */
  box-sizing: border-box !important;
  overflow: hidden !important; /* Taşan içeriği gizle */
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: break-word !important;
}

.timeline-event-hourly::before {
  content: '⏰';
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  opacity: 0.95;
  line-height: 1;
}

.timeline-event-hourly:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  opacity: 1;
}

.timeline-event-hourly .timeline-event-title {
  padding-left: 0 !important; /* İkon zaten ::before ile eklendi */
  font-weight: 600;
  font-size: 12px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.timeline-event-hourly-time {
  font-size: 10px;
  opacity: 0.85;
  font-weight: 500;
  margin-left: 6px;
}

/* Saatlik rezervasyonlarda drag ve extend handle'ları gizle */
.timeline-event-hourly .timeline-event-drag-handle,
.timeline-event-hourly .timeline-event-extend-handle {
  display: none !important;
}

.dark-mode .timeline-event-hourly {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.65), rgba(219, 39, 119, 0.65)) !important;
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
  border-left: 4px solid rgba(255, 255, 255, 0.8) !important;
  box-shadow: 0 2px 8px rgba(236, 72, 153, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
}

/* Event Drag Handle - Sol Taraf */
.timeline-event-drag-handle {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  cursor: grab;
  z-index: 25;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-event-drag-handle::before {
  content: '⋮⋮';
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
  letter-spacing: -2px;
  line-height: 1;
}

.timeline-event-drag-handle:hover {
  background: rgba(255, 255, 255, 0.6);
  width: 20px;
}

.timeline-event-drag-handle:active {
  cursor: grabbing;
  background: rgba(255, 255, 255, 0.7);
}

/* Event Extend Handle */
.timeline-event-extend-handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  cursor: col-resize;
  z-index: 20;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  transition: all 0.2s ease;
}

.timeline-event-extend-handle:hover {
  background: rgba(255, 255, 255, 0.5);
  width: 16px;
}

/* Temp Event (Creating) */
.timeline-temp-event {
  position: absolute;
  background: var(--new-event-bg);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  color: var(--new-event-text);
  opacity: 0.8;
  border-radius: 12px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  top: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: var(--shadow-md);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

/* Timeline Header Container */
.timeline-header-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Month Row */
.timeline-header-month-row {
  display: flex;
  background: var(--bg-tertiary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 17px;
  height: var(--header-month-height);
  line-height: var(--header-month-height);
  border-bottom: 1px solid var(--border-color);
}

.timeline-header-month-cell {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-right: 1px solid var(--border-color);
}

/* Day Row */
.timeline-header-day-row {
  display: flex;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  border-bottom: -1px solid var(--border-strong);
}

.timeline-header-day-cell {
  height: var(--header-day-height);
  line-height: var(--header-day-height);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid var(--border-color);
}

/* Timeline Content Container */
.timeline-content-container {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

/* Timeline Group Container */
.timeline-group-container {
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
}

/* Group Header Row */
.timeline-group-header-row {
  display: flex;
  margin-top: 0;
}

.timeline-group-header-cell {
  flex: 1;
  height: var(--cell-height);
  background: var(--group-header-bg);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-right: 1px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Resource Row */
.timeline-resource-row {
  display: flex;
  position: relative;
  height: var(--cell-height);
  border-bottom: 1px solid var(--border-strong);
  box-sizing: border-box;
  overflow: visible;
}

/* Scrollbar Styling */
.timeline-scrollable-container::-webkit-scrollbar,
.timeline-resources-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.timeline-scrollable-container::-webkit-scrollbar-track,
.timeline-resources-container::-webkit-scrollbar-track {
  background: var(--bg-tertiary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
}

.timeline-scrollable-container::-webkit-scrollbar-thumb,
.timeline-resources-container::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.timeline-scrollable-container::-webkit-scrollbar-thumb:hover,
.timeline-resources-container::-webkit-scrollbar-thumb:hover {
  background: var(--accent-hover);
}

/* Master Header Styles */
.master-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background: transparent;
}

.master-header-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.master-header-btn {
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.master-header-btn:hover {
  background: var(--bg-hover);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.master-header-btn:active {
  transform: translateY(0);
}

.master-header-btn:focus {
  outline: none;
  box-shadow: var(--shadow-md), 0 0 0 3px var(--accent-light);
}

.master-header-date-picker {
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.master-header-date-picker:hover {
  background: var(--bg-hover);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.master-header-date-picker:focus {
  outline: none;
  box-shadow: var(--shadow-md), 0 0 0 3px var(--accent-light);
}

.master-header-select {
  margin-left: auto;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.master-header-select:hover {
  background: var(--bg-hover);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.master-header-select:focus {
  outline: none;
  box-shadow: var(--shadow-md), 0 0 0 3px var(--accent-light);
}

/* Zoom Controls */
.master-header-zoom-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
}

.master-header-zoom-level {
  min-width: 50px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  padding: 0 8px;
}

.master-header-zoom-controls .master-header-btn {
  min-width: 36px;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}

.master-header-zoom-controls .master-header-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.master-header-zoom-controls .master-header-btn:disabled:hover {
  transform: none;
  box-shadow: none;
}

/* ============================================
   Context Menu Styles
   ============================================ */
.context-menu {
  position: fixed;
  z-index: 10005;
  pointer-events: auto;
}

.context-menu-content {
  background: var(--bg-primary);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: 6px;
  min-width: 200px;
  max-width: 300px;
  overflow: hidden;
  animation: contextMenuFadeIn 0.15s ease-out;
}

@keyframes contextMenuFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-5px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.context-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  color: var(--text-primary);
  transition: all 0.2s ease;
  user-select: none;
  position: relative;
}

.context-menu-item:hover:not(.context-menu-item-disabled) {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.context-menu-item-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.context-menu-item-danger {
  color: var(--danger-color, #dc3545);
}

.context-menu-item-danger:hover:not(.context-menu-item-disabled) {
  background: rgba(220, 53, 69, 0.1);
  color: var(--danger-color, #dc3545);
}

.context-menu-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 14px;
  flex-shrink: 0;
}

.context-menu-item-label {
  flex: 1;
  font-weight: 500;
}

.context-menu-item-shortcut {
  font-size: 11px;
  color: var(--text-tertiary);
  font-family: monospace;
  padding: 2px 6px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  margin-left: auto;
}

.context-menu-separator {
  height: 1px;
  background: var(--border-color);
  margin: 4px 0;
}

/* Dark mode adjustments */
.dark-mode .context-menu-item-shortcut {
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

/* ============================================
   Daily View Styles
   ============================================ */
.daily-view-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 10006;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: dailyViewFadeIn 0.4s ease-out;
  overflow: hidden;
}

@keyframes dailyViewFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.daily-view-container {
  width: 95%;
  max-width: 1400px;
  height: 90vh;
  background: var(--bg-primary);
  backdrop-filter: var(--blur-lg);
  -webkit-backdrop-filter: var(--blur-lg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: dailyViewScaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

@keyframes dailyViewScaleIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(50px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.daily-view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
}

.daily-view-header-content {
  flex: 1;
}

.daily-view-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 5px 0;
}

.daily-view-date {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
  text-transform: capitalize;
}

.daily-view-close {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.daily-view-close:hover {
  background: var(--bg-hover);
  transform: rotate(90deg);
}

.daily-view-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.daily-view-hours {
  width: 100px;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  flex-shrink: 0;
}

.daily-view-hour-label {
  height: calc(100% / 24);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
  position: relative;
}

.daily-view-hour-label:last-child {
  border-bottom: none;
}

.daily-view-timeline {
  flex: 1;
  overflow-y: auto;
  position: relative;
  background: var(--bg-primary);
  cursor: crosshair;
}

.daily-view-hour-cell {
  height: calc(100% / 24);
  border-bottom: 1px solid var(--border-color);
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;
}

.daily-view-hour-cell:hover {
  background: var(--bg-hover);
}

.daily-view-hour-cell:last-child {
  border-bottom: none;
}

.daily-view-event {
  position: absolute;
  left: 5px;
  right: 5px;
  background: var(--event-bg);
  color: var(--event-text);
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--event-border);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.daily-view-event:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  z-index: 15;
}

.daily-view-event-title {
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.daily-view-event-time {
  font-size: 11px;
  opacity: 0.9;
  white-space: nowrap;
}

.daily-view-temp-event {
  position: absolute;
  left: 5px;
  right: 5px;
  background: var(--new-event-bg);
  color: var(--new-event-text);
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: var(--shadow-md);
  border: 2px dashed rgba(255, 255, 255, 0.5);
  z-index: 20;
  font-weight: 500;
  font-size: 13px;
  animation: dailyViewPulse 1.5s ease-in-out infinite;
}

@keyframes dailyViewPulse {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .daily-view-container {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
  
  .daily-view-hours {
    width: 80px;
  }
  
  .daily-view-title {
    font-size: 20px;
  }
}

/* Flatpickr Calendar Glassmorphism */
.flatpickr-calendar {
  background: var(--bg-primary) !important;
  backdrop-filter: var(--blur-lg) !important;
  -webkit-backdrop-filter: var(--blur-lg) !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: var(--shadow-lg) !important;
  border-radius: 16px !important;
  overflow: hidden;
}

.flatpickr-day {
  background: transparent !important;
  color: var(--text-primary) !important;
  border-radius: 8px !important;
  cursor: pointer;
  transition: all 0.2s ease;
}

.flatpickr-day:hover {
  background: var(--accent-light) !important;
  backdrop-filter: var(--blur-sm) !important;
  -webkit-backdrop-filter: var(--blur-sm) !important;
}

.flatpickr-day.selected {
  background: var(--accent-primary) !important;
  backdrop-filter: var(--blur-md) !important;
  -webkit-backdrop-filter: var(--blur-md) !important;
  color: white !important;
  box-shadow: var(--shadow-md);
}

.flatpickr-months .flatpickr-month {
  background: transparent !important;
  color: var(--text-primary) !important;
}

.flatpickr-prev-month,
.flatpickr-next-month {
  color: var(--text-primary) !important;
  cursor: pointer;
  transition: all 0.2s ease;
}

.flatpickr-prev-month:hover,
.flatpickr-next-month:hover {
  background: var(--accent-light) !important;
  backdrop-filter: var(--blur-sm) !important;
  -webkit-backdrop-filter: var(--blur-sm) !important;
  border-radius: 8px;
}

/* Event Time Style */
.event-time {
  font-size: 11px;
  margin-top: 2px;
  opacity: 0.9;
}

/* Legacy class support (for backward compatibility) */
.event {
  position: absolute;
  background: var(--event-bg);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  color: var(--event-text);
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--event-border);
  cursor: pointer;
  box-shadow: var(--shadow-md), var(--shadow-glow);
  transition: all 0.3s ease;
}

.event:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

/* Time-based Mode Styles */
.timeline-header-time-row {
  display: flex;
  background: var(--bg-tertiary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-bottom: 1px solid var(--border-strong);
  height: 60px;
}

.timeline-header-time-cell {
  flex: 1;
  border-right: 1px solid var(--border-color);
  position: relative;
  height: 100%;
}

.timeline-time-slots {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.timeline-time-slot {
  border-bottom: 1px solid var(--border-color);
  position: relative;
  box-sizing: border-box;
}

.timeline-time-label {
  position: absolute;
  left: 4px;
  top: 2px;
  font-size: 10px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  padding: 2px 4px;
  border-radius: 3px;
  z-index: 1;
}

/* Time-based Event Styles */
.timeline-event-time-based {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 20px;
}

.timeline-resource-row {
  position: relative;
  min-height: var(--cell-height);
  height: var(--cell-height);
  overflow: visible;
}

.timeline-resource-row.time-mode {
  min-height: 400px; /* Time mode için daha yüksek */
  height: auto;
}

/* Time mode için cell yüksekliği */
.timeline-cell.time-mode {
  min-height: 400px;
  height: auto;
  position: relative;
}

/* Event saat bilgisi */
.timeline-event-time {
  display: block;
  font-size: 10px;
  opacity: 0.8;
  margin-top: 2px;
  font-weight: 500;
}

.timeline-event-conflict-icon {
  display: inline-block;
  margin-left: 4px;
  font-size: 12px;
  animation: pulse-warning 2s ease-in-out infinite;
}

@keyframes pulse-warning {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Time-based event için daha iyi görünüm */
.timeline-event-time-based .timeline-event-title {
  font-size: 11px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.timeline-event-time-based {
  min-height: 30px;
  padding: 4px 8px;
}

/* Filter Panel Styles */
.filter-panel {
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: var(--shadow-md);
}

.filter-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
}

.filter-panel-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.filter-clear-btn {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
}

.filter-clear-btn:hover {
  background: var(--bg-primary);
  transform: translateY(-1px);
}

.filter-section {
  margin-bottom: 16px;
}

.filter-section label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
}

.filter-search-input,
.filter-date-input {
  width: 100%;
  padding: 8px 12px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 13px;
  transition: all 0.2s ease;
}

.filter-search-input:focus,
.filter-date-input:focus {
  outline: none;
  border-color: var(--border-hover);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.filter-date-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-date-range span {
  color: var(--text-secondary);
  font-size: 12px;
}

.filter-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
}

.filter-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
  color: var(--text-primary);
  padding: 4px 0;
}

.filter-checkbox input[type="checkbox"] {
  cursor: pointer;
  width: 16px;
  height: 16px;
  accent-color: rgba(99, 102, 241, 0.8);
}

.filter-checkbox span {
  user-select: none;
}

/* View Mode Styles */
.master-header-view-mode {
  display: flex;
  gap: 4px;
  margin-right: 12px;
}

.master-header-view-mode .master-header-btn {
  padding: 6px 12px;
  font-size: 12px;
  min-width: 50px;
}

.master-header-view-mode .master-header-btn.active {
  background: var(--bg-primary);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-sm);
  font-weight: 600;
}

/* ============================================
   MOBILE RESPONSIVE STYLES
   ============================================ */

@media (max-width: 768px) {
  /* Mobil için CSS değişkenleri */
  :root {
    --resource-width: 120px;
    --cell-height: 40px;
    --header-total-height: 70px;
    --header-month-height: 35px;
    --header-day-height: 35px;
    --container-height: 500px;
  }

  /* Timeline Container */
  .timeline-container {
    font-size: 12px;
  }

  /* Master Header */
  .master-header-container {
    flex-direction: column;
    gap: 8px;
    padding: 8px;
  }

  .master-header-buttons {
    flex-wrap: wrap;
    gap: 6px;
  }

  .master-header-btn {
    padding: 6px 10px;
    font-size: 11px;
    min-width: auto;
  }

  .master-header-date-picker {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }

  .master-header-select {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }

  /* Resources Header */
  .resources-header {
    font-size: 12px;
    padding: 8px;
  }

  .resource-group-header {
    font-size: 11px;
    padding: 8px 10px;
    height: var(--cell-height);
  }

  .resource-cell {
    font-size: 11px;
    padding: 0 10px;
    height: var(--cell-height);
  }

  /* Timeline Header */
  .timeline-header-month-cell {
    font-size: 11px;
    padding: 6px 4px;
  }

  .timeline-header-day-cell {
    font-size: 10px;
    padding: 4px 2px;
  }

  /* Timeline Events */
  .timeline-event {
    font-size: 10px;
    padding: 4px 6px;
    min-height: 32px;
    border-radius: 12px;
  }

  .timeline-event-title {
    font-size: 10px;
    line-height: 1.2;
  }

  .timeline-event-drag-handle {
    width: 12px;
  }

  .timeline-event-drag-handle:hover {
    width: 14px;
  }

  /* Timeline Cells */
  .timeline-cell {
    min-width: 40px;
  }

  /* Scrollable Container */
  .timeline-scrollable-container {
    -webkit-overflow-scrolling: touch; /* iOS smooth scrolling */
    scroll-behavior: smooth;
  }

  /* Group Header */
  .timeline-group-header-cell {
    font-size: 10px;
  }

  /* Tooltip */
  .event-tooltip {
    font-size: 11px;
    padding: 8px;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  /* Küçük mobil cihazlar için */
  :root {
    --resource-width: 100px;
    --cell-height: 35px;
    --header-total-height: 60px;
    --header-month-height: 30px;
    --header-day-height: 30px;
    --container-height: 400px;
  }

  .master-header-btn {
    padding: 5px 8px;
    font-size: 10px;
  }

  .timeline-header-month-cell {
    font-size: 10px;
    padding: 4px 2px;
  }

  .timeline-header-day-cell {
    font-size: 9px;
    padding: 3px 1px;
  }

  .timeline-event {
    font-size: 9px;
    padding: 3px 5px;
    min-height: 28px;
  }

  .timeline-event-title {
    font-size: 9px;
  }

  .resource-cell {
    font-size: 10px;
    padding: 0 8px;
  }

  .timeline-cell {
    min-width: 35px;
  }
}

/* Touch-friendly styles */
@media (hover: none) and (pointer: coarse) {
  /* Touch cihazlar için */
  .timeline-event {
    min-height: 44px; /* Touch target minimum size */
  }

  .master-header-btn {
    min-height: 44px;
    min-width: 44px;
  }

  .timeline-cell {
    min-height: 44px;
  }

  /* Hover efektlerini devre dışı bırak */
  .timeline-event:hover {
    transform: none;
  }

  .resource-cell:hover {
    background: var(--bg-secondary);
  }
}

/* Landscape orientation için */
@media (max-width: 768px) and (orientation: landscape) {
  :root {
    --container-height: 300px;
    --cell-height: 35px;
  }
}

/* Past Date Protection Styles - Disabled gibi görünüm */
.timeline-cell-past {
  cursor: not-allowed !important;
  pointer-events: none !important;
  position: relative;
  background: var(--group-header-bg, rgba(176, 175, 175, 0.8)) !important;
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-color: var(--border-strong) !important;
  opacity: 0.7;
  z-index: 0;
}

.timeline-cell-past::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 6px,
    rgba(0, 0, 0, 0.1) 6px,
    rgba(0, 0, 0, 0.1) 12px
  );
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
}

.dark-mode .timeline-cell-past {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.8)) !important;
  opacity: 0.6;
}

.dark-mode .timeline-cell-past::before {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 6px,
    rgba(255, 255, 255, 0.1) 6px,
    rgba(255, 255, 255, 0.1) 12px
  );
}

/* Grup header cell'lerde de geçmiş tarih stili */
.timeline-group-header-cell.timeline-cell-past {
  background: var(--group-header-bg, rgba(176, 175, 175, 0.8)) !important;
  cursor: not-allowed !important;
  pointer-events: none !important;
}

.dark-mode .timeline-group-header-cell.timeline-cell-past {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.8)) !important;
}

/* Disabled Dates Styles - Blok şeklinde, grup header gibi */
.timeline-cell-disabled {
  cursor: not-allowed !important;
  pointer-events: none !important;
  position: relative;
  background: var(--group-header-bg, rgba(176, 175, 175, 0.8)) !important;
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-color: var(--border-strong) !important;
  opacity: 0.7;
  z-index: 0;
}

.timeline-cell-disabled::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 6px,
    rgba(0, 0, 0, 0.1) 6px,
    rgba(0, 0, 0, 0.1) 12px
  );
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
}

.dark-mode .timeline-cell-disabled {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.8)) !important;
  opacity: 0.6;
}

.dark-mode .timeline-cell-disabled::before {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 6px,
    rgba(255, 255, 255, 0.1) 6px,
    rgba(255, 255, 255, 0.1) 12px
  );
}

/* Grup header cell'lerde de disabled stili */
.timeline-group-header-cell.timeline-cell-disabled {
  background: var(--group-header-bg, rgba(176, 175, 175, 0.8)) !important;
  cursor: not-allowed !important;
  pointer-events: none !important;
}

.dark-mode .timeline-group-header-cell.timeline-cell-disabled {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.8)) !important;
}

/* Weekend Highlighting Styles - Subtle, matching group header intensity */
/* Light mode: daha açık ve şeffaf */
.timeline-header-day-weekend {
  background: rgba(200, 200, 200, 0.15) !important;
}

.dark-mode .timeline-header-day-weekend {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.5)) !important;
}

.timeline-cell-weekend {
  background: rgba(200, 200, 200, 0.15) !important;
}

.dark-mode .timeline-cell-weekend {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.5)) !important;
}

.timeline-group-header-cell.timeline-cell-weekend {
  background: rgba(200, 200, 200, 0.15) !important;
}

.dark-mode .timeline-group-header-cell.timeline-cell-weekend {
  background: var(--group-header-bg, rgba(16, 16, 26, 0.5)) !important;
}

/* Autocomplete Select Styles */
.autocomplete-select-container {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.autocomplete-select-input {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px 12px;
  cursor: text;
  transition: all 0.2s ease;
}

.autocomplete-select-input:hover {
  border-color: var(--border-hover);
  background: var(--bg-hover);
}

.autocomplete-select-input.open {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px var(--accent-light);
}

.autocomplete-select-input-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  font-size: 14px;
  width: 100%;
}

.autocomplete-select-input-field::placeholder {
  color: var(--text-tertiary);
}

.autocomplete-select-arrow {
  margin-left: 8px;
  color: var(--text-secondary);
  font-size: 10px;
  pointer-events: none;
  transition: transform 0.2s ease;
}

.autocomplete-select-input.open .autocomplete-select-arrow {
  transform: rotate(180deg);
}

.autocomplete-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: var(--bg-primary);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  z-index: 10000 !important; /* Çok yüksek z-index - diğer elementlerin üstünde görünsün */
  max-height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
}

.autocomplete-select-option {
  padding: 10px 12px;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.2s ease;
  border-bottom: 1px solid var(--border-color);
}

.autocomplete-select-option:last-child {
  border-bottom: none;
}

.autocomplete-select-option:hover {
  background: var(--bg-hover);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
}

.autocomplete-select-option.selected {
  background: var(--accent-light);
  color: var(--accent-primary);
  font-weight: 600;
}

.autocomplete-select-no-results {
  padding: 12px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: 14px;
}

/* Resources Header içinde autocomplete için özel stil */
.resources-header-content .autocomplete-select-container {
  max-width: 100%;
  z-index: 10001 !important; /* Header içinde de yüksek z-index */
}

.resources-header {
  position: relative;
  z-index: 10000; /* Header'ın kendisi de yüksek z-index'e sahip olsun */
}

/* Cell Tooltip Styles */
.cell-tooltip {
  position: fixed;
  z-index: 10002;
  pointer-events: none;
}

.cell-tooltip-content {
  background: var(--bg-primary);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px 12px;
  color: var(--text-primary);
  font-size: 13px;
  box-shadow: var(--shadow-lg);
  white-space: nowrap;
  max-width: 300px;
  word-wrap: break-word;
}

.cell-tooltip-arrow {
  position: absolute;
  top: -6px;
  left: 10px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid var(--bg-primary);
  filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.2));
}

.dark-mode .cell-tooltip-arrow {
  border-bottom-color: var(--bg-primary);
}

/* Event Management Styles */
.timeline-event.selected {
  outline: 2px solid var(--accent-primary) !important;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--accent-light) !important;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
}

.modal-content {
  background: var(--bg-primary);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  color: var(--text-primary);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.modal-close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.modal-form {
  padding: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px 12px;
  background: var(--bg-secondary);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px var(--accent-light);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.btn-save,
.btn-cancel,
.btn-delete {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-save {
  background: var(--accent-primary);
  color: white;
  margin-left: 8px;
}

.btn-save:hover {
  background: var(--accent-hover);
}

.btn-cancel {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-cancel:hover {
  background: var(--bg-hover);
}

.btn-delete {
  background: rgba(220, 53, 69, 0.8);
  color: white;
}

.btn-delete:hover {
  background: rgba(220, 53, 69, 1);
}

/* ============================================
   Event Icons
   ============================================ */
.event-icon {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  font-size: 16px !important;
  line-height: 1;
  margin-right: 6px;
  flex-shrink: 0;
  animation: iconPulse 2s ease-in-out infinite;
  width: auto;
  height: auto;
  min-width: 18px;
  z-index: 15;
  position: relative;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: none;
}

.event-icon-balance-warning {
  color: #ffc107;
  filter: drop-shadow(0 0 2px rgba(255, 193, 7, 0.5));
}

.event-icon-important-note {
  color: #17a2b8;
  filter: drop-shadow(0 0 2px rgba(23, 162, 184, 0.5));
}

.event-icon-payment-pending {
  color: #ff9800;
}

.event-icon-confirmed {
  color: #28a745;
}

.event-icon-cancelled {
  color: #dc3545;
}

.event-icon-pending {
  color: #6c757d;
}

.event-icon-completed {
  color: #28a745;
  font-weight: bold;
}

.event-icon-in-progress {
  color: #007bff;
}

.event-icon-alert {
  color: #dc3545;
  animation: iconShake 0.5s ease-in-out infinite;
}

.event-icon-info {
  color: #17a2b8;
}

@keyframes iconPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

@keyframes iconShake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

/* ============================================
   Event Badges
   ============================================ */
.event-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  font-size: 9px;
  font-weight: 600;
  border-radius: 10px;
  white-space: nowrap;
  z-index: 30;
  animation: badgeFadeIn 0.3s ease-out;
  pointer-events: none;
  line-height: 1;
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  top: -6px;
}

.event-badge-top-right {
  top: -6px;
  right: -6px;
}

.event-badge-top-left {
  top: -6px;
  left: -6px;
}

.event-badge-bottom-right {
  bottom: -6px;
  right: -6px;
}

.event-badge-bottom-left {
  bottom: -6px;
  left: -6px;
}

.event-badge-default {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.event-badge-important {
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.4);
  animation: badgePulse 2s ease-in-out infinite;
}

.event-badge-urgent {
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: #000;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.4);
  animation: badgeShake 0.5s ease-in-out infinite;
}

.event-badge-new {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.4);
}

.event-badge-custom {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

@keyframes badgeFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes badgePulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.6);
  }
}

@keyframes badgeShake {
  0%, 100% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(-2px) rotate(-2deg);
  }
  75% {
    transform: translateX(2px) rotate(2deg);
  }
}

/* ============================================
   Loading Spinner
   ============================================ */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: overlayFadeIn 0.2s ease-out;
}

.loading-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner-small {
  width: 20px;
  height: 20px;
}

.loading-spinner-medium {
  width: 40px;
  height: 40px;
}

.loading-spinner-large {
  width: 60px;
  height: 60px;
}

/* Spinner Type: Circle */
.spinner-circle {
  width: 100%;
  height: 100%;
  border: 3px solid var(--border-color);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spinnerRotate 1s linear infinite;
}

/* Spinner Type: Dots */
.dots-container {
  display: flex;
  gap: 4px;
  align-items: center;
}

.dots-container span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-primary);
  animation: dotsBounce 1.4s ease-in-out infinite both;
}

.dots-container span:nth-child(1) {
  animation-delay: -0.32s;
}

.dots-container span:nth-child(2) {
  animation-delay: -0.16s;
}

.dots-container span:nth-child(3) {
  animation-delay: 0s;
}

/* Spinner Type: Pulse */
.pulse-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--accent-primary);
  animation: pulseScale 1.5s ease-in-out infinite;
}

@keyframes spinnerRotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dotsBounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulseScale {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ============================================
   Event Animations
   ============================================ */
.timeline-event {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-event:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.timeline-event.selected {
  animation: eventSelectPulse 0.3s ease-out;
}

.timeline-event-enter {
  animation: eventFadeIn 0.4s ease-out;
}

.timeline-event-exit {
  animation: eventFadeOut 0.3s ease-in;
}

@keyframes eventFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes eventFadeOut {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
}

@keyframes eventSelectPulse {
  0% {
    box-shadow: 0 0 0 0 var(--accent-primary);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 123, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 0 0 var(--accent-primary);
  }
}

/* Timeline Container Animations */
.timeline-container {
  animation: containerFadeIn 0.5s ease-out;
}

@keyframes containerFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Cell Hover Animation */
.timeline-cell {
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.timeline-cell:hover {
  transform: scale(1.02);
}

/* Smooth Scroll Animation */
.timeline-scrollable-container {
  scroll-behavior: smooth;
}

/* Loading State for Timeline */
.timeline-loading {
  position: relative;
  min-height: 200px;
}

.timeline-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spinnerRotate 1s linear infinite;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ 155
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Timeline_Timeline)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/Timeline.css
var Timeline = __webpack_require__(27);
;// ./src/components/Timeline/Timeline.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Timeline/* default */.A, options);




       /* harmony default export */ const Timeline_Timeline = (Timeline/* default */.A && Timeline/* default */.A.locals ? Timeline/* default */.A.locals : undefined);

;// ./src/components/Timeline/MasterHeader.jsx


const MasterHeader = _ref => {
  let {
    selectedDate,
    onDateSelect,
    onToday,
    onAdvance,
    onRetreat,
    onMonthAdvance,
    onMonthRetreat,
    dayRange,
    setDayRange,
    zoomLevel = 1.0,
    setZoomLevel,
    zoomOn = true,
    minZoomLevel = 0.5,
    maxZoomLevel = 3.0,
    zoomStep = 0.25,
    showDefaultButtons = true,
    // Varsayılan butonları göster/gizle
    customButtons = [] // Özel butonlar: [{ id, label, onClick, icon?, disabled?, className? }]
  } = _ref;
  const formattedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000 - selectedDate.getTimezoneOffset() * 60000).toISOString().split("T")[0]; // YYYY-MM-DD formatı

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "master-header-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "master-header-buttons"
  }, showDefaultButtons && /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onMonthRetreat
  }, "1 Ay Geri"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onRetreat
  }, "5 G\xFCn Geri"), /*#__PURE__*/external_react_default().createElement("input", {
    type: "date",
    className: "master-header-date-picker",
    value: formattedDate // Seçili tarih burada gösteriliyor
    ,
    onChange: e => onDateSelect(e.target.value) // Tarih seçimi
    ,
    onKeyDown: e => e.preventDefault() // Manuel girişleri engelle
  }), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onAdvance
  }, "5 G\xFCn \u0130leri"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onMonthAdvance
  }, "1 Ay \u0130leri"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onToday
  }, "Bug\xFCn")), customButtons && customButtons.length > 0 && customButtons.map(button => /*#__PURE__*/external_react_default().createElement("button", {
    key: button.id,
    className: button.className || "master-header-btn",
    onClick: button.onClick,
    disabled: button.disabled,
    title: button.tooltip || button.label
  }, button.icon && /*#__PURE__*/external_react_default().createElement("span", {
    style: {
      marginRight: button.label ? '4px' : '0'
    }
  }, button.icon), button.label))), /*#__PURE__*/external_react_default().createElement("select", {
    className: "master-header-select",
    value: dayRange,
    onChange: e => setDayRange(parseInt(e.target.value, 10))
  }, /*#__PURE__*/external_react_default().createElement("option", {
    value: 30
  }, "30 G\xFCn"), /*#__PURE__*/external_react_default().createElement("option", {
    value: 60
  }, "60 G\xFCn"), /*#__PURE__*/external_react_default().createElement("option", {
    value: 90
  }, "90 G\xFCn")), zoomOn && setZoomLevel && /*#__PURE__*/external_react_default().createElement("div", {
    className: "master-header-zoom-controls"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: () => {
      const newZoom = Math.max(minZoomLevel, zoomLevel - zoomStep);
      setZoomLevel(newZoom);
    },
    disabled: zoomLevel <= minZoomLevel,
    title: "Zoom Out (".concat(Math.round((zoomLevel - zoomStep) * 100), "%)")
  }, "\u2212"), /*#__PURE__*/external_react_default().createElement("span", {
    className: "master-header-zoom-level"
  }, Math.round(zoomLevel * 100), "%"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: () => {
      const newZoom = Math.min(maxZoomLevel, zoomLevel + zoomStep);
      setZoomLevel(newZoom);
    },
    disabled: zoomLevel >= maxZoomLevel,
    title: "Zoom In (".concat(Math.round((zoomLevel + zoomStep) * 100), "%)")
  }, "+")));
};
/* harmony default export */ const Timeline_MasterHeader = (MasterHeader);
;// ./src/components/Timeline/ResourcesHeader.jsx
// ResourcesHeader.jsx


const ResourcesHeader = _ref => {
  let {
    content
  } = _ref;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "resources-header"
  }, content);
};
/* harmony default export */ const Timeline_ResourcesHeader = (ResourcesHeader);
;// ./src/components/Timeline/Resources.jsx

const Resources = _ref => {
  let {
    groupedResources = [],
    // Kaynakların listesi
    collapsedGroups = {},
    // Grupların açık/kapalı durumunu tutan nesne
    toggleGroupCollapse,
    // Grupları açma/kapama fonksiyonu
    resourceSettings = {
      showIdAsName: false,
      // Varsayılan: `name` varsa onu göster, yoksa `id`
      isGrouped: true,
      // Varsayılan: Gruplama açık
      isCollapsible: true // Varsayılan: Gruplar açılıp kapanabilir
    }
  } = _ref;
  const {
    showIdAsName,
    isGrouped,
    isCollapsible
  } = resourceSettings;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-resources"
  }, isGrouped ?
  // Gruplama aktif
  groupedResources.map((group, groupIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: groupIndex,
    className: "resource-group"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "resource-group-header",
    onClick: () => isCollapsible && toggleGroupCollapse(group.groupName)
  }, group.groupName, " ", isCollapsible && (collapsedGroups[group.groupName] ? "▲" : "▼")), !collapsedGroups[group.groupName] && group.resources.map((resource, resourceIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: resourceIndex,
    className: "resource-cell"
  }, showIdAsName ? resource.id : resource.name || resource.id)))) :
  // Gruplama yok
  groupedResources.flatMap(group => group.resources).map((resource, resourceIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: resourceIndex,
    className: "resource-cell"
  }, showIdAsName ? resource.id : resource.name || resource.id)));
};
/* harmony default export */ const Timeline_Resources = (Resources);
;// ./src/utils/dateUtils.js
// src/utils/dateUtils.js

/**
 * "dd/mm/yyyy" formatındaki bir tarih string'ini Date objesine dönüştürür.
 * Eğer dateInput bir string değilse, direkt Date objesini döndürür.
 * @param {string | Object | Date} dateInput - "dd/mm/yyyy" formatında tarih stringi veya {fullDate: Date, display: string} objesi veya Date objesi.
 * @returns {Date} - Date objesi.
 */
const parseDate = dateInput => {
  if (dateInput instanceof Date) {
    return dateInput;
  }
  if (typeof dateInput === 'string') {
    // YYYY-MM-DD formatını kontrol et (ISO format)
    if (dateInput.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return new Date(dateInput + 'T00:00:00');
    }
    // dd/mm/yyyy formatını kontrol et
    if (dateInput.includes('/')) {
      const [day, month, year] = dateInput.split("/").map(Number);
      return new Date(year, month - 1, day);
    }
    // Diğer string formatlarını Date constructor'a bırak
    return new Date(dateInput);
  } else if (typeof dateInput === 'object' && dateInput.fullDate instanceof Date) {
    return new Date(dateInput.fullDate.getTime() + dateInput.fullDate.getTimezoneOffset() * 60000);
  } else {
    console.error("parseDate received invalid input:", dateInput);
    return new Date(); // veya hata fırlat
  }
};

/**
 * Bir tarihin belirli bir aralık içinde olup olmadığını kontrol eder.
 * @param {string | Object | Date} date - "dd/mm/yyyy" formatında tarih stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @param {string | Object | Date} startDate - "dd/mm/yyyy" formatında başlangıç tarihi stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @param {string | Object | Date} endDate - "dd/mm/yyyy" formatında bitiş tarihi stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @returns {boolean} - Tarih aralık içinde ise true, değilse false.
 */
const isDateInRange = (date, startDate, endDate) => {
  const d = parseDate(date);
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  return d >= start && d <= end;
};

/**
 * Bir tarihin disabled olup olmadığını kontrol eder.
 * @param {string | Object | Date} date - Kontrol edilecek tarih
 * @param {Object} disableDates - { mode: 'exclude' | 'include', dates: [], ranges: [] }
 * @returns {boolean} - Tarih disabled ise true, değilse false
 */
const isDateDisabled = (date, disableDates) => {
  if (!disableDates || !disableDates.mode) {
    return false; // DisableDates yoksa veya mode yoksa disabled değil
  }
  const dateObj = parseDate(date);
  // Sadece tarih kısmını karşılaştırmak için (saat bilgisi olmadan)
  const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
  const {
    mode,
    dates = [],
    ranges = []
  } = disableDates;

  // Tarihin listede veya aralıkta olup olmadığını kontrol et
  let isInList = false;

  // Tekil tarihleri kontrol et
  if (dates && dates.length > 0) {
    isInList = dates.some(d => {
      const dObj = parseDate(d);
      const dOnly = new Date(dObj.getFullYear(), dObj.getMonth(), dObj.getDate());
      return dOnly.getTime() === dateOnly.getTime();
    });
  }

  // Tarih aralıklarını kontrol et
  if (!isInList && ranges && ranges.length > 0) {
    isInList = ranges.some(range => {
      const start = parseDate(range.start);
      const end = parseDate(range.end);
      const startOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      const endOnly = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      return dateOnly >= startOnly && dateOnly <= endOnly;
    });
  }

  // Mode'a göre döndür
  if (mode === 'exclude') {
    // exclude modu: listede olan tarihler disabled
    return isInList;
  } else if (mode === 'include') {
    // include modu: listede olmayan tarihler disabled
    return !isInList;
  }
  return false;
};
;// ./src/components/Timeline/TimelineHeader.jsx

 // CSS dosyasını import etmeyi unutma

const TimelineHeader = _ref => {
  let {
    dates,
    monthHeaders,
    highlightWeekends = false
  } = _ref;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-month-row"
  }, monthHeaders.map((monthHeader, index) => /*#__PURE__*/external_react_default().createElement("div", {
    key: index,
    className: "timeline-header-month-cell",
    style: {
      flex: monthHeader.endIndex - monthHeader.startIndex + 1,
      borderRight: index < monthHeaders.length - 1 ? "1px solid var(--border-color)" : "none"
    }
  }, monthHeader.monthName, " ", monthHeader.year))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-day-row"
  }, dates.map((date, index) => {
    // Hafta sonu kontrolü
    let isWeekend = false;
    if (highlightWeekends) {
      const cellDate = parseDate(date.fullDate);
      const dayOfWeek = cellDate.getDay(); // 0 = Pazar, 6 = Cumartesi
      isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    }
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: index,
      className: "timeline-header-day-cell ".concat(isWeekend ? "timeline-header-day-weekend" : ""),
      style: {
        flex: 1,
        borderRight: index < dates.length - 1 ? "1px solid var(--border-color)" : "none"
      }
    }, date.display);
  })));
};
/* harmony default export */ const Timeline_TimelineHeader = (TimelineHeader);
;// ./src/hooks/useDragAndDrop.js
// src/hooks/useDragAndDrop.js

 // Named import

const useDragAndDrop = function () {
  let initialEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const [isDragging, setIsDragging] = (0,external_react_.useState)(false);
  const [dragStart, setDragStart] = (0,external_react_.useState)(null);
  const [dragEnd, setDragEnd] = (0,external_react_.useState)(null);
  const [events, setEvents] = (0,external_react_.useState)(initialEvents);

  // Sürükleme başlat
  const startDrag = (resourceId, date) => {
    setIsDragging(true);
    setDragStart({
      resourceId,
      date
    });
    setDragEnd({
      resourceId,
      date
    });
  };

  // Sürükleme hareketi
  const updateDrag = (resourceId, date) => {
    if (!isDragging) return;
    setDragEnd({
      resourceId,
      date
    });
  };

  // Sürükleme bitişi
  const endDrag = dates => {
    if (!isDragging || !dragStart || !dragEnd) return;
    if (dragStart.resourceId !== dragEnd.resourceId) {
      resetDrag();
      return;
    }
    const startDateIndex = dates.findIndex(d => parseDate(d.fullDate).toDateString() === parseDate(dragStart.date.fullDate).toDateString());
    const endDateIndex = dates.findIndex(d => parseDate(d.fullDate).toDateString() === parseDate(dragEnd.date.fullDate).toDateString());
    if (startDateIndex === -1 || endDateIndex === -1) {
      resetDrag();
      return;
    }
    const sortedStartIndex = Math.min(startDateIndex, endDateIndex);
    const sortedEndIndex = Math.max(startDateIndex, endDateIndex);
    const startDate = dates[sortedStartIndex].fullDate;
    const endDate = dates[sortedEndIndex].fullDate;
    const newEvent = {
      id: Date.now(),
      title: "Yeni Etkinlik",
      resourceId: dragStart.resourceId,
      startDate: startDate,
      endDate: endDate,
      color: "#ff7f50"
    };
    setEvents(prev => [...prev, newEvent]);
    resetDrag();
  };
  const resetDrag = () => {
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };
  return {
    events,
    isDragging,
    dragStart,
    dragEnd,
    startDrag,
    updateDrag,
    endDrag,
    setEvents
  };
};
/* harmony default export */ const hooks_useDragAndDrop = (useDragAndDrop);
;// ./src/hooks/useEventDragDrop.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const useEventDragDrop = function (events, setEvents, setDropInfo) {
  let onDragInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  const [draggingEvent, setDraggingEvent] = (0,external_react_.useState)(null);
  const [dragOffset, setDragOffset] = (0,external_react_.useState)(0);
  const [mode, setMode] = (0,external_react_.useState)(null); // "drag" veya "extend"

  const handleDragStart = (event, eventId) => {
    console.log("[useEventDragDrop] handleDragStart called:", {
      eventId,
      currentMode: mode
    });
    if (mode === "extend") {
      console.log("[useEventDragDrop] Extend mode active, skipping drag start");
      return; // Uzatma modundaysa taşıma işlemini başlatma
    }
    event.stopPropagation();
    const eventElement = event.target;
    const eventRect = eventElement.getBoundingClientRect();
    const offset = event.clientX - eventRect.left;
    setDraggingEvent(eventId);
    setDragOffset(offset);
    setMode("drag"); // Modu taşıma olarak ayarla

    console.log("[useEventDragDrop] Drag state set:", {
      eventId,
      offset,
      mode: "drag"
    });
    const draggedEvent = events.find(evt => evt.id === eventId);
    if (draggedEvent) {
      console.log("[useEventDragDrop] Dragging Event Start:", draggedEvent.startDate);
      console.log("[useEventDragDrop] Dragging Event End:", draggedEvent.endDate);
    } else {
      console.warn("[useEventDragDrop] Dragged event not found:", eventId);
    }
  };
  const handleExtendStart = (event, eventId) => {
    event.stopPropagation();
    setDraggingEvent(eventId);
    setMode("extend"); // Modu uzatma olarak ayarla
  };
  const handleDragOver = event => {
    event.preventDefault();
  };
  const handleDrop = (event, resourceId, targetDate) => {
    event.preventDefault();

    // State'i önce kaydet - handleDragEnd'den önce çağrılabilir
    const currentMode = mode;
    const currentDraggingEvent = draggingEvent;
    const currentDragOffset = dragOffset;
    console.log("[useEventDragDrop] handleDrop called:", {
      currentMode,
      currentDraggingEvent,
      resourceId,
      targetDate,
      onDragInfo: !!onDragInfo,
      setDropInfo: !!setDropInfo
    });
    if (currentMode === "drag" && currentDraggingEvent) {
      console.log("[useEventDragDrop] Drag mode detected, processing drop...");
      const draggedEvent = events.find(evt => evt.id === currentDraggingEvent);
      if (draggedEvent) {
        console.log("[useEventDragDrop] Dragged event found:", draggedEvent);
        const duration = draggedEvent.endDate - draggedEvent.startDate;
        const cellWidth = event.target.offsetWidth || 30;
        const offsetDays = Math.floor(currentDragOffset / cellWidth);
        const newStartDate = new Date(targetDate.getTime() - offsetDays * 24 * 60 * 60 * 1000);
        const newEndDate = new Date(newStartDate.getTime() + duration);

        // Callback kontrolü ve loglama
        const dragInfo = {
          id: currentDraggingEvent,
          newResourceId: resourceId,
          newStartDate,
          newEndDate
        };
        console.log("[useEventDragDrop] Drag info prepared:", dragInfo);
        if (setDropInfo) {
          console.log("[useEventDragDrop] Calling setDropInfo with:", dragInfo);
          setDropInfo(dragInfo);
        } else {
          console.warn("[useEventDragDrop] setDropInfo is not available");
        }

        // onDragInfo callback'ini çağır
        if (onDragInfo) {
          console.log("[useEventDragDrop] Calling onDragInfo callback with:", dragInfo);
          try {
            onDragInfo(dragInfo);
            console.log("[useEventDragDrop] onDragInfo callback executed successfully");
          } catch (error) {
            console.error("[useEventDragDrop] Error in onDragInfo callback:", error);
          }
        } else {
          console.warn("[useEventDragDrop] onDragInfo callback is not available");
        }

        // Event güncellemesi
        setEvents(prevEvents => prevEvents.map(evt => evt.id === currentDraggingEvent ? _objectSpread(_objectSpread({}, evt), {}, {
          resourceId,
          startDate: newStartDate,
          endDate: newEndDate
        }) : evt));
      } else {
        console.warn("[useEventDragDrop] Dragged event not found in events array");
      }
    } else {
      console.log("[useEventDragDrop] Not in drag mode or no dragging event:", {
        currentMode,
        currentDraggingEvent
      });
    }
    setDraggingEvent(null);
    setDragOffset(0);
    setMode(null);
  };
  const handleExtend = (event, eventId, newEndDate) => {
    if (mode !== "extend" || draggingEvent !== eventId) return;
    setEvents(prevEvents => prevEvents.map(evt => evt.id === eventId ? _objectSpread(_objectSpread({}, evt), {}, {
      endDate: newEndDate
    }) : evt));
    console.log("Extended Event ID:", eventId, "New End Date:", newEndDate);
    setDraggingEvent(null);
    setMode(null);
  };
  const handleDragEnd = () => {
    setDraggingEvent(null);
    setDragOffset(0);
    setMode(null);
  };
  return {
    handleDragStart,
    handleExtendStart,
    handleDragOver,
    handleDrop,
    handleExtend,
    handleDragEnd
  };
};
/* harmony default export */ const hooks_useEventDragDrop = (useEventDragDrop);
;// ./src/components/Timeline/Indicator.jsx

const Indicator = _ref => {
  let {
    todayIndex,
    totalDays
  } = _ref;
  if (todayIndex < 0 || todayIndex >= totalDays) {
    return null; // Bugün timeline dışında ise çizgiyi gösterme
  }
  return /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: "calc(".concat((todayIndex + 0.5) / totalDays, " * 100%)"),
      // Günün ortasına yerleştirmek için +0.5
      width: "2px",
      height: "100%",
      backgroundColor: "transparent",
      zIndex: 5,
      borderStyle: "dashed",
      // Kesikli çizgi için
      borderWidth: "0 0 0 2px",
      // Sadece sol tarafa kesikli çizgi
      borderColor: "red"
    }
  });
};
/* harmony default export */ const Timeline_Indicator = (Indicator);
;// ./src/components/Timeline/EventIcon.jsx



/**
 * Event Icon Component
 * Event'lerde gösterilecek ikonları render eder
 */
const EventIcon = _ref => {
  let {
    type,
    className = ''
  } = _ref;
  const getIconContent = () => {
    switch (type) {
      case 'balance-warning':
        return '⚠️';
      // Bakiye uyarısı
      case 'important-note':
        return '📝';
      // Önemli not
      case 'payment-pending':
        return '💳';
      // Ödeme bekliyor
      case 'confirmed':
        return '✅';
      // Onaylandı
      case 'cancelled':
        return '❌';
      // İptal edildi
      case 'pending':
        return '⏳';
      // Beklemede
      case 'completed':
        return '✓';
      // Tamamlandı
      case 'in-progress':
        return '▶️';
      // Devam ediyor
      case 'alert':
        return '🔔';
      // Uyarı
      case 'info':
        return 'ℹ️';
      // Bilgi
      default:
        return null;
    }
  };
  const iconContent = getIconContent();
  if (!iconContent) return null;
  return /*#__PURE__*/external_react_default().createElement("span", {
    className: "event-icon event-icon-".concat(type, " ").concat(className)
  }, iconContent);
};
/* harmony default export */ const Timeline_EventIcon = (EventIcon);
;// ./src/components/Timeline/EventBadge.jsx



/**
 * Event Badge Component
 * Önemli event'ler için badge gösterir
 */
const EventBadge = _ref => {
  let {
    text,
    type = 'default',
    // 'default', 'important', 'urgent', 'new', 'custom'
    position = 'top-right',
    // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
    className = '',
    style = {}
  } = _ref;
  return /*#__PURE__*/external_react_default().createElement("span", {
    className: "event-badge event-badge-".concat(type, " event-badge-").concat(position, " ").concat(className),
    style: style
  }, text);
};
/* harmony default export */ const Timeline_EventBadge = (EventBadge);
;// ./src/components/Timeline/ContextMenu.jsx



/**
 * Context Menu Component
 * Sağ tık menüsü için özelleştirilebilir menü bileşeni
 */
const ContextMenu = _ref => {
  var _adjustedPosition$x, _adjustedPosition$y;
  let {
    isOpen,
    position,
    onClose,
    menuItems = [],
    resource = null,
    date = null
  } = _ref;
  const menuRef = (0,external_react_.useRef)(null);
  const [adjustedPosition, setAdjustedPosition] = (0,external_react_.useState)(position);

  // Menü pozisyonunu mouse'a yakın tut ve ekran sınırları içinde tut
  (0,external_react_.useEffect)(() => {
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
      setAdjustedPosition({
        x: adjustedX,
        y: adjustedY
      });
    };

    // Menü render edildikten sonra pozisyonu güncelle
    setTimeout(updatePosition, 0);
  }, [position, isOpen]);

  // Menü dışına tıklanınca kapat
  (0,external_react_.useEffect)(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    const handleEscape = event => {
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
  const handleItemClick = item => {
    if (item.onClick) {
      item.onClick(resource, date);
    }
    if (item.closeOnClick !== false) {
      onClose();
    }
  };
  return /*#__PURE__*/external_react_default().createElement("div", {
    ref: menuRef,
    className: "context-menu",
    style: {
      position: 'fixed',
      left: "".concat(((_adjustedPosition$x = adjustedPosition === null || adjustedPosition === void 0 ? void 0 : adjustedPosition.x) !== null && _adjustedPosition$x !== void 0 ? _adjustedPosition$x : position.x) - 150, "px"),
      top: "".concat(((_adjustedPosition$y = adjustedPosition === null || adjustedPosition === void 0 ? void 0 : adjustedPosition.y) !== null && _adjustedPosition$y !== void 0 ? _adjustedPosition$y : position.y) - 150, "px"),
      zIndex: 10005
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "context-menu-content"
  }, menuItems.length === 0 ? /*#__PURE__*/external_react_default().createElement("div", {
    className: "context-menu-item context-menu-item-disabled"
  }, "Men\xFC \xF6\u011Fesi yok") : menuItems.map((item, index) => {
    if (item.separator) {
      return /*#__PURE__*/external_react_default().createElement("div", {
        key: "separator-".concat(index),
        className: "context-menu-separator"
      });
    }
    if (item.hidden) {
      return null;
    }
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: item.id || index,
      className: "context-menu-item ".concat(item.disabled ? 'context-menu-item-disabled' : '', " ").concat(item.danger ? 'context-menu-item-danger' : ''),
      onClick: () => !item.disabled && handleItemClick(item),
      title: item.tooltip || item.label
    }, item.icon && /*#__PURE__*/external_react_default().createElement("span", {
      className: "context-menu-item-icon"
    }, item.icon), /*#__PURE__*/external_react_default().createElement("span", {
      className: "context-menu-item-label"
    }, item.label), item.shortcut && /*#__PURE__*/external_react_default().createElement("span", {
      className: "context-menu-item-shortcut"
    }, item.shortcut));
  })));
};
/* harmony default export */ const Timeline_ContextMenu = (ContextMenu);
;// ./src/components/Timeline/TimelineContent.jsx
function TimelineContent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function TimelineContent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? TimelineContent_ownKeys(Object(t), !0).forEach(function (r) { TimelineContent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TimelineContent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TimelineContent_defineProperty(e, r, t) { return (r = TimelineContent_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function TimelineContent_toPropertyKey(t) { var i = TimelineContent_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function TimelineContent_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








// import "./Timeline.css"; // varsayalım "Timeline.css" globalde import ediliyor

const TimelineContent = _ref => {
  let {
    groupedResources,
    dates,
    collapsedGroups,
    events,
    setEvents,
    onEventClick,
    todayIndex,
    indicatorOn,
    resourceSettings,
    setDropInfo,
    eventsDragOn = true,
    eventsExtendOn = true,
    createNewEventOn = true,
    onDragInfo,
    onExtendInfo,
    onCreateEventInfo,
    onEventRightClick,
    onEventDoubleClick = null,
    selectedEvents = [],
    onEventSelect = null,
    eventTooltipOn = true,
    tooltipComponent: TooltipComponent,
    tempEventStyle = {},
    eventStyleResolver = () => ({}),
    // Event Alignment Mode
    eventAlignmentMode = "center",
    // "center" | "full"

    // Past Date Protection
    preventPastEvents = false,
    minDate = null,
    // Weekend Highlighting
    highlightWeekends = false,
    // Cell Tooltip
    cellTooltipOn = false,
    cellTooltipResolver = null,
    // Event Icons & Badges
    eventIconsOn = false,
    // İkonları göster/gizle
    eventIconResolver = null,
    // (event) => icon type döndüren fonksiyon
    eventBadgesOn = false,
    // Badge'leri göster/gizle
    eventBadgeResolver = null,
    // (event) => { text, type, position } döndüren fonksiyon

    // Loading State
    isLoading = false,
    loadingType = 'spinner',
    // 'spinner', 'dots', 'pulse'

    // Context Menu
    cellContextMenuOn = false,
    // Cell context menu'yu aç/kapa
    cellContextMenuItems = [],
    // Context menu öğeleri
    onCellContextMenu = null,
    // Context menu açıldığında çağrılacak callback

    // Disable Dates
    disableDates = null // { mode: 'exclude' | 'include', dates: [], ranges: [] }
  } = _ref;
  // ------------------- HOOKS & STATE -------------------
  const containerRef = (0,external_react_.useRef)(null);

  // Drag
  const {
    dragStart,
    dragEnd
  } = hooks_useDragAndDrop(events, setEvents);
  const {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd
  } = hooks_useEventDragDrop(events, setEvents, setDropInfo,
  // Doğrudan setDropInfo'yu geçiriyoruz
  onDragInfo // onDragInfo callback'ini de geçiriyoruz
  );

  // Extend
  // extendEvent removed - not used (extend logic handled manually)
  const [mode, setMode] = (0,external_react_.useState)(null); // null | "extend"
  const [extendingEvent, setExtendingEvent] = (0,external_react_.useState)(null);
  const [originalEndDate, setOriginalEndDate] = (0,external_react_.useState)(null);
  const [startMouseX, setStartMouseX] = (0,external_react_.useState)(null);

  // Create new event
  const [isCreating, setIsCreating] = (0,external_react_.useState)(false);
  const [tempEvent, setTempEvent] = (0,external_react_.useState)(null);

  // Cell Tooltip State
  const [cellTooltip, setCellTooltip] = (0,external_react_.useState)(null);
  const [cellTooltipPosition, setCellTooltipPosition] = (0,external_react_.useState)({
    top: 0,
    left: 0
  });

  // Context Menu State
  const [contextMenu, setContextMenu] = (0,external_react_.useState)({
    isOpen: false,
    position: null,
    resource: null,
    date: null
  });

  // Tooltip
  const [selectedEvent, setSelectedEvent] = (0,external_react_.useState)(null);
  const [tooltipPosition, setTooltipPosition] = (0,external_react_.useState)({
    top: 0,
    left: 0
  });
  const totalDays = dates.length;

  // ------------------- Tooltip Logic -------------------
  const handleEventClickInternal = (event, e) => {
    e.stopPropagation();
    // Eğer mod "extend" ise tooltip'i açma
    if (mode === "extend") {
      return;
    }

    // Multi-select için Ctrl+Click kontrolü
    if (onEventSelect && e.ctrlKey) {
      onEventSelect(event.id, true); // multiSelect = true
      return;
    }

    // Harici callback
    if (onEventClick) onEventClick(event, e);

    // Tooltip göstermek
    const eventElement = e.currentTarget;
    if (eventElement) {
      const rect = eventElement.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX
      });
      setSelectedEvent(event);
    }
  };
  const handleEventDoubleClickInternal = (event, e) => {
    e.stopPropagation();
    if (onEventDoubleClick) {
      onEventDoubleClick(event);
    }
  };
  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // ------------------- Context Menu -------------------
  const handleCellContextMenu = (0,external_react_.useCallback)((e, resource, dateObj) => {
    if (!cellContextMenuOn) return;
    e.preventDefault();
    e.stopPropagation();

    // Resource'u bul
    const resourceObj = groupedResources.flatMap(group => group.resources || []).find(r => r.id === resource.id || resource === r.id);

    // Mouse pozisyonunu doğrudan kullan (scroll offset'i dahil etme)
    setContextMenu({
      isOpen: true,
      position: {
        x: e.clientX,
        y: e.clientY
      },
      resource: resourceObj || resource,
      date: dateObj
    });
    if (onCellContextMenu) {
      onCellContextMenu(resourceObj || resource, dateObj, e);
    }
  }, [cellContextMenuOn, groupedResources, onCellContextMenu]);
  const handleCloseContextMenu = (0,external_react_.useCallback)(() => {
    setContextMenu({
      isOpen: false,
      position: null,
      resource: null,
      date: null
    });
  }, []);

  // ------------------- Create New Event -------------------
  const handleCellClick = (resourceId, date, e) => {
    if (!createNewEventOn) return; // create devrede değilse

    // Sağ tıklamayı engelle (button 2 = sağ tık, button 0 = sol tık)
    if (e.button === 2 || e.which === 3) {
      return;
    }
    const startDate = parseDate(date.fullDate);

    // Disabled tarih kontrolü - disabled hücrelerde event oluşturmayı engelle
    if (disableDates && isDateDisabled(startDate, disableDates)) {
      return;
    }

    // Geçmiş tarih kontrolü
    if (preventPastEvents && minDate) {
      const minDateObj = parseDate(minDate);
      // Sadece tarih karşılaştırması (saat bilgisi olmadan)
      const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
      if (startDateOnly < minDateOnly) {
        // Geçmiş tarihe tıklama engellendi
        return;
      }
    }
    const newEvent = {
      id: Date.now(),
      title: "1 Gece",
      startDate,
      endDate: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
      resourceId,
      // Mouse başlangıç pozisyonunu kaydet
      startX: (e === null || e === void 0 ? void 0 : e.clientX) || 0,
      startCellIndex: dates.findIndex(d => parseDate(d.fullDate).toDateString() === startDate.toDateString()),
      // color => var(--timeline-new-event-background-color) => => Sonra inline style yerine className
      color: "" // Bunu .css'te "var(--timeline-new-event-background-color)" atayabilirsin
    };
    setTempEvent(newEvent);
    setIsCreating(true);
  };
  (0,external_react_.useEffect)(() => {
    if (!createNewEventOn) return;
    if (!isCreating) return;
    if (mode === "extend") {
      console.log(">>> 'extend' mode, skip new event creation");
      return;
    }
    const handleMouseMove = e => {
      var _containerRef$current, _tempEvent$startCellI;
      if (!isCreating || !tempEvent) return;

      // Timeline container'ı bul
      const timelineContainer = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.closest('.timeline-scrollable-container');
      if (!timelineContainer) return;

      // Container'ın sol pozisyonunu al
      const containerRect = timelineContainer.getBoundingClientRect();
      const scrollLeft = timelineContainer.scrollLeft;

      // Mouse'un container içindeki pozisyonunu hesapla
      const mouseX = e.clientX - containerRect.left + scrollLeft;

      // Gerçek cell genişliğini hesapla (container genişliği / toplam gün sayısı)
      const containerWidth = timelineContainer.scrollWidth;
      const cellWidth = containerWidth / totalDays;

      // Hangi cell'in üzerinde olduğumuzu hesapla
      let currentCellIndex = Math.floor(mouseX / cellWidth);
      currentCellIndex = Math.max(0, Math.min(currentCellIndex, totalDays - 1)); // Sınırları kontrol et

      // Başlangıç cell index'ini al
      const startCellIndex = (_tempEvent$startCellI = tempEvent.startCellIndex) !== null && _tempEvent$startCellI !== void 0 ? _tempEvent$startCellI : 0;

      // Geçmiş tarih kontrolü - eğer aktifse, minimum tarihten önceki cell'lere gitmeyi engelle
      if (preventPastEvents && minDate && dates[currentCellIndex]) {
        const currentDate = parseDate(dates[currentCellIndex].fullDate);
        const minDateObj = parseDate(minDate);
        const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());

        // Eğer geçmiş tarihe gidiyorsak, minimum tarihe sabitle
        if (currentDateOnly < minDateOnly) {
          // Minimum tarihin cell index'ini bul
          const minDateIndex = dates.findIndex(d => {
            const dDate = parseDate(d.fullDate);
            const dDateOnly = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
            return dDateOnly.getTime() === minDateOnly.getTime();
          });
          if (minDateIndex !== -1) {
            currentCellIndex = Math.max(startCellIndex, minDateIndex);
          } else {
            currentCellIndex = startCellIndex; // Minimum tarih bulunamazsa başlangıç pozisyonuna dön
          }
        }
      }

      // Disabled tarih kontrolü - disabled hücrelere event uzamasını engelle
      if (disableDates && dates[currentCellIndex]) {
        const currentDate = parseDate(dates[currentCellIndex].fullDate);
        const isCurrentDisabled = isDateDisabled(currentDate, disableDates);
        if (isCurrentDisabled) {
          // Disabled hücreye geldiysek, son enabled hücreye kadar geri git
          // Başlangıçtan itibaren tarayarak son enabled hücreyi bul
          let lastEnabledIndex = startCellIndex;
          if (currentCellIndex > startCellIndex) {
            // İleri doğru gidiyorsak, başlangıçtan currentCellIndex'e kadar tarayalım
            for (let i = startCellIndex; i < currentCellIndex; i++) {
              if (dates[i]) {
                const checkDate = parseDate(dates[i].fullDate);
                if (!isDateDisabled(checkDate, disableDates)) {
                  lastEnabledIndex = i;
                } else {
                  // Disabled hücreye geldik, döngüyü kır
                  break;
                }
              }
            }
          } else {
            // Geri doğru gidiyorsak, currentCellIndex'ten başlangıca kadar tarayalım
            for (let i = currentCellIndex; i < startCellIndex; i++) {
              if (dates[i]) {
                const checkDate = parseDate(dates[i].fullDate);
                if (!isDateDisabled(checkDate, disableDates)) {
                  lastEnabledIndex = i;
                }
              }
            }
          }
          currentCellIndex = lastEnabledIndex;
        }
      }

      // Geçmiş tarih kontrolü - geçmiş tarihlere event uzamasını engelle (disabled kontrolünden sonra)
      if (preventPastEvents && minDate && dates[currentCellIndex]) {
        const currentDate = parseDate(dates[currentCellIndex].fullDate);
        const minDateObj = parseDate(minDate);
        const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());

        // Eğer geçmiş tarihe gidiyorsak, son geçerli tarihe sabitle
        if (currentDateOnly < minDateOnly) {
          // Minimum tarihin cell index'ini bul
          const minDateIndex = dates.findIndex(d => {
            const dDate = parseDate(d.fullDate);
            const dDateOnly = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
            return dDateOnly.getTime() === minDateOnly.getTime();
          });
          if (minDateIndex !== -1) {
            // Başlangıç tarihinden önceki bir tarihe gidiyorsak, minimum tarihe sabitle
            // Ama başlangıç tarihinden sonraki bir tarihe gidiyorsak, başlangıç tarihine sabitle
            if (currentCellIndex < startCellIndex) {
              currentCellIndex = Math.max(startCellIndex, minDateIndex);
            } else {
              currentCellIndex = Math.max(startCellIndex, minDateIndex);
            }
          } else {
            currentCellIndex = startCellIndex; // Minimum tarih bulunamazsa başlangıç pozisyonuna dön
          }
        }
      }

      // Kaç gün ekleneceğini hesapla (daha hassas)
      const daysToAdd = Math.max(1, Math.abs(currentCellIndex - startCellIndex) + 1);

      // Yeni bitiş tarihini hesapla
      const newEndDate = new Date(tempEvent.startDate.getTime());

      // Event alignment mode'a göre bitiş tarihini ayarla
      if (eventAlignmentMode === "full") {
        // Full mode: Son günün tamamı dahil, bitiş tarihi bir sonraki günün başlangıcı
        // Örnek: 1-5 Ocak seçilirse, bitiş tarihi 6 Ocak (5 Ocak'ın sonu = 6 Ocak'ın başı)
        newEndDate.setDate(newEndDate.getDate() + daysToAdd);
      } else {
        // Center mode: Gün ortasından gün ortasına, bitiş tarihi son günün ortası
        // Örnek: 1-5 Ocak seçilirse, bitiş tarihi 5 Ocak (gün ortası)
        newEndDate.setDate(newEndDate.getDate() + daysToAdd - 1); // -1 çünkü başlangıç günü dahil
      }
      setTempEvent(TimelineContent_objectSpread(TimelineContent_objectSpread({}, tempEvent), {}, {
        endDate: newEndDate,
        title: "".concat(daysToAdd, " Gece")
      }));
    };
    const handleMouseUp = () => {
      if (isCreating && tempEvent) {
        setEvents([...events, tempEvent]);
        if (onCreateEventInfo) {
          onCreateEventInfo(tempEvent);
        }
      }
      setTempEvent(null);
      setIsCreating(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [createNewEventOn, isCreating, mode, tempEvent, events, onCreateEventInfo, setEvents, totalDays, dates, preventPastEvents, minDate, disableDates]);

  // ------------------- Drag Logic -------------------
  const handleDragStartSafe = (e, eventId) => {
    console.log("[TimelineContent] handleDragStartSafe called:", {
      eventId,
      eventsDragOn
    });
    if (!eventsDragOn) {
      console.log("[TimelineContent] Events drag is disabled, preventing drag start");
      e.preventDefault();
      return;
    }
    console.log("[TimelineContent] Calling handleDragStart...");
    handleDragStart(e, eventId);
  };
  const handleDragEndSafe = e => {
    if (!eventsDragOn) {
      e.preventDefault();
      return;
    }
    handleDragEnd();
  };

  // ------------------- Extend Logic -------------------
  const handleMouseDownExtend = (mouseEvent, event) => {
    if (!eventsExtendOn) return;
    mouseEvent.stopPropagation();
    console.log(">>> Extend start ID:", event.id);
    setMode("extend");
    setExtendingEvent(event);
    setOriginalEndDate(event.endDate);
    setStartMouseX(mouseEvent.clientX);
  };
  const handleMouseMoveExtend = (0,external_react_.useCallback)(e => {
    if (mode !== "extend" || !extendingEvent) return;
    if (!eventsExtendOn) return;
    const currentMouseX = e.clientX;
    const deltaX = currentMouseX - (startMouseX !== null && startMouseX !== void 0 ? startMouseX : 0);
    const cellW = 30;
    const daysToAdd = Math.floor(deltaX / cellW);
    const newEndDate = new Date((originalEndDate !== null && originalEndDate !== void 0 ? originalEndDate : new Date()).getTime());
    newEndDate.setDate(newEndDate.getDate() + daysToAdd);
    setEvents(prev => prev.map(evt => evt.id === extendingEvent.id ? TimelineContent_objectSpread(TimelineContent_objectSpread({}, evt), {}, {
      endDate: newEndDate
    }) : evt));
  }, [mode, extendingEvent, eventsExtendOn, originalEndDate, startMouseX, setEvents]);
  const handleMouseUpExtend = (0,external_react_.useCallback)(() => {
    console.log(">>> Extend finished ID:", extendingEvent === null || extendingEvent === void 0 ? void 0 : extendingEvent.id);
    if (onExtendInfo && extendingEvent) {
      // callback
      const updatedEvent = events.find(ev => ev.id === extendingEvent.id);
      if (updatedEvent) {
        onExtendInfo({
          eventId: extendingEvent.id,
          newEndDate: updatedEvent.endDate
        });
      }
    }

    // Tooltip açılmasını engellemek için modun null olmasını geciktiriyoruz
    setTimeout(() => {
      setMode(null);
    }, 100); // 100ms gecikme
    setExtendingEvent(null);
    setOriginalEndDate(null);
    setStartMouseX(null);
  }, [extendingEvent, onExtendInfo, events]);
  (0,external_react_.useEffect)(() => {
    if (mode === "extend") {
      const onMove = e => handleMouseMoveExtend(e);
      const onUp = () => handleMouseUpExtend();
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      return () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
    }
  }, [mode, handleMouseMoveExtend, handleMouseUpExtend]);

  // ------------------- Right Click (context) -------------------
  const handleRightClickEvent = (evt, reactEvent) => {
    reactEvent.preventDefault();
    if (onEventRightClick) onEventRightClick(evt, reactEvent);
  };

  // ------------------- Helper isCellSelected -------------------
  const isCellSelected = (resourceId, date) => {
    if (!dragStart || !dragEnd) return false;
    if (resourceId !== dragStart.resourceId) return false;
    const startIndex = dates.findIndex(d => parseDate(d.fullDate).getTime() === parseDate(dragStart.date).getTime());
    const endIndex = dates.findIndex(d => parseDate(d.fullDate).getTime() === parseDate(dragEnd.date).getTime());
    const currentIndex = dates.findIndex(d => parseDate(d.fullDate).getTime() === parseDate(date.fullDate).getTime());
    if (startIndex === -1 || endIndex === -1 || currentIndex === -1) return false;
    return currentIndex >= Math.min(startIndex, endIndex) && currentIndex <= Math.max(startIndex, endIndex);
  };

  // ------------------- calculatePosition -------------------
  const calculatePosition = (ev, dateArr) => {
    const startDate = parseDate(ev.startDate);
    const endDate = parseDate(ev.endDate);
    const startIndex = dateArr.findIndex(d => parseDate(d.fullDate).toDateString() === startDate.toDateString());
    const endIndex = dateArr.findIndex(d => parseDate(d.fullDate).toDateString() === endDate.toDateString());
    const totalDays = dateArr.length;
    if (startIndex < 0 && endIndex < 0) {
      return {
        isVisible: false,
        left: 0,
        width: 0,
        isPartialStart: false,
        isPartialEnd: false
      };
    }
    if (startIndex >= totalDays && endIndex >= totalDays) {
      return {
        isVisible: false,
        left: 0,
        width: 0,
        isPartialStart: false,
        isPartialEnd: false
      };
    }
    const effectiveStartIndex = Math.max(startIndex, 0);
    const effectiveEndIndex = Math.min(endIndex, totalDays - 1);
    const isPartialStart = startIndex < 0;
    const isPartialEnd = endIndex >= totalDays;

    // Event alignment mode'a göre pozisyon hesaplama
    let leftPercentage, rightPercentage;
    if (eventAlignmentMode === "full") {
      // Full mode: Gün başından başlayıp gün sonunda bitiyor
      // Bitiş tarihi hariç (exclusive) - örn: 3 Ocak bitiş tarihi ise 2 Ocak'ın sonunda biter
      leftPercentage = effectiveStartIndex / totalDays * 100;
      // endIndex zaten bitiş tarihini gösteriyor, bu yüzden endIndex'in başlangıcı = bir önceki günün sonu
      rightPercentage = effectiveEndIndex / totalDays * 100;
    } else {
      // Center mode (varsayılan): Gün ortasından başlayıp gün ortasında bitiyor
      leftPercentage = (effectiveStartIndex + (isPartialStart ? 0 : 0.5)) / totalDays * 100;
      rightPercentage = (effectiveEndIndex + (isPartialEnd ? 1 : 0.5)) / totalDays * 100;
    }
    const widthPercentage = rightPercentage - leftPercentage;
    return {
      isVisible: true,
      left: "".concat(leftPercentage, "%"),
      width: "".concat(widthPercentage, "%"),
      isPartialStart,
      isPartialEnd
    };
  };

  // ------------------- RENDER -------------------
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, cellTooltip && cellTooltipOn && /*#__PURE__*/external_react_default().createElement("div", {
    className: "cell-tooltip",
    style: {
      position: 'fixed',
      top: "".concat(cellTooltipPosition.top - 152, "px"),
      // Mouse'un hemen altında
      left: "".concat(cellTooltipPosition.left - 168, "px"),
      // Mouse'un hemen sağında
      pointerEvents: 'none',
      zIndex: 10002
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "cell-tooltip-content"
  }, typeof cellTooltip.content === 'string' ? cellTooltip.content : cellTooltip.content), /*#__PURE__*/external_react_default().createElement("div", {
    className: "cell-tooltip-arrow"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    ref: containerRef,
    className: "timeline-content-container" // Yeni class, stilini timeline.css'e ekleyebilirsin
  }, indicatorOn && /*#__PURE__*/external_react_default().createElement(Timeline_Indicator, {
    todayIndex: todayIndex,
    totalDays: totalDays
  }), groupedResources.map((group, groupIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: groupIndex,
    className: "timeline-group-container"
  }, resourceSettings.isGrouped && /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-group-header-row"
  }, dates.map((dateObj, colIndex) => {
    // Hafta sonu kontrolü
    let isWeekend = false;
    if (highlightWeekends) {
      const cellDate = parseDate(dateObj.fullDate);
      const dayOfWeek = cellDate.getDay(); // 0 = Pazar, 6 = Cumartesi
      isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    }

    // Geçmiş tarih kontrolü
    let isPastDate = false;
    if (preventPastEvents && minDate) {
      const cellDate = parseDate(dateObj.fullDate);
      const minDateObj = parseDate(minDate);
      const cellDateOnly = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
      const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
      isPastDate = cellDateOnly < minDateOnly;
    }

    // Disabled tarih kontrolü
    const isDisabled = disableDates ? isDateDisabled(dateObj.fullDate, disableDates) : false;
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: "group-header-".concat(groupIndex, "-").concat(colIndex),
      className: "timeline-group-header-cell ".concat(isWeekend ? "timeline-cell-weekend" : "", " ").concat(isPastDate ? "timeline-cell-past" : "", " ").concat(isDisabled ? "timeline-cell-disabled" : "")
    });
  })), !collapsedGroups[group.groupName] && group.resources.map((resource, rowIndex) => {
    // Saatlik rezervasyonları ayrı işle
    const hourlyEvents = events.filter(ev => ev.resourceId === resource.id && ev.isHourly === true);
    const normalEvents = events.filter(ev => ev.resourceId === resource.id && ev.isHourly !== true);

    // Saatlik rezervasyonları günlere göre grupla ve tek event'e dönüştür
    const hourlyEventsGrouped = {};
    hourlyEvents.forEach(event => {
      const eventDate = new Date(event.startDate);
      const dateKey = "".concat(eventDate.getFullYear(), "-").concat(eventDate.getMonth(), "-").concat(eventDate.getDate());
      if (!hourlyEventsGrouped[dateKey]) {
        hourlyEventsGrouped[dateKey] = {
          events: [],
          startDate: new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()),
          endDate: new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate() + 1)
        };
      }
      hourlyEventsGrouped[dateKey].events.push(event);
    });

    // Gruplanmış saatlik rezervasyonları tek event'e dönüştür
    const groupedHourlyEvents = Object.values(hourlyEventsGrouped).map(group => {
      const count = group.events.length;
      const totalMinutes = group.events.reduce((sum, ev) => {
        return sum + (new Date(ev.endDate).getTime() - new Date(ev.startDate).getTime()) / (1000 * 60);
      }, 0);
      const totalHours = Math.round(totalMinutes / 60 * 10) / 10; // 1 ondalık basamak

      return {
        id: "hourly-group-".concat(group.startDate.getTime()),
        title: count > 1 ? "".concat(count, " Saatlik Rezervasyon (").concat(totalHours, " saat)") : "".concat(totalHours, " Saatlik Rezervasyon"),
        startDate: group.startDate,
        endDate: group.endDate,
        resourceId: resource.id,
        isHourly: true,
        isGrouped: true,
        hourlyCount: count,
        hourlyTotalHours: totalHours
      };
    });

    // Normal event'ler ve gruplanmış saatlik event'leri birleştir
    const resourceEvents = [...normalEvents, ...groupedHourlyEvents];
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: resource.id,
      className: "timeline-resource-row"
    }, resourceEvents.map(event => {
      const {
        isVisible,
        left,
        width,
        isPartialStart,
        isPartialEnd
      } = calculatePosition(event, dates);
      if (!isVisible) return null;

      // Kullanıcıdan gelen stil
      const eventStyle = eventStyleResolver ? eventStyleResolver(event) : {};

      // Icon ve Badge bilgilerini al
      const iconType = eventIconsOn && eventIconResolver ? eventIconResolver(event) : null;
      const badgeInfo = eventBadgesOn && eventBadgeResolver ? eventBadgeResolver(event) : null;

      // Saatlik rezervasyon kontrolü
      const isHourly = event.isHourly === true;

      // Event color'ı al (event.color varsa kullan, yoksa eventStyle'den al, yoksa varsayılan)
      const eventColor = event.color || (eventStyle === null || eventStyle === void 0 ? void 0 : eventStyle.backgroundColor) || '#8b5cf6';
      return /*#__PURE__*/external_react_default().createElement("div", {
        key: event.id,
        className: "timeline-event timeline-event-enter ".concat(selectedEvents.includes(event.id) ? "selected" : "", " ").concat(isHourly ? "timeline-event-hourly" : ""),
        draggable: false,
        onContextMenu: reactEvent => handleRightClickEvent(event, reactEvent),
        onClick: ev => handleEventClickInternal(event, ev),
        onDoubleClick: e => handleEventDoubleClickInternal(event, e),
        style: TimelineContent_objectSpread(TimelineContent_objectSpread({
          left,
          width: width,
          // Hesaplanan genişliği kullan
          maxWidth: isHourly ? width : "none",
          // Saatlik rezervasyonlar için max genişlik sınırlaması
          top: "5px",
          borderTopLeftRadius: isPartialStart ? "0px" : "20px",
          borderBottomLeftRadius: isPartialStart ? "0px" : "20px",
          borderTopRightRadius: isPartialEnd ? "0px" : "20px",
          borderBottomRightRadius: isPartialEnd ? "0px" : "20px",
          cursor: isHourly ? "default" : mode === "extend" ? "col-resize" : "default",
          pointerEvents: isHourly ? "none" : "auto"
        }, eventStyle), {}, {
          // Kullanıcı tarafından tanımlanan stiller
          backgroundColor: (eventStyle === null || eventStyle === void 0 ? void 0 : eventStyle.backgroundColor) || eventColor // Event color'ı kullan (eventStyle.backgroundColor varsa onu kullan, yoksa eventColor)
        })
      }, badgeInfo && /*#__PURE__*/external_react_default().createElement(Timeline_EventBadge, {
        text: badgeInfo.text,
        type: badgeInfo.type || 'default',
        position: badgeInfo.position || 'top-right',
        style: badgeInfo.style
      }), eventsDragOn && mode !== "extend" && !isHourly && /*#__PURE__*/external_react_default().createElement("div", {
        className: "timeline-event-drag-handle",
        draggable: eventsDragOn,
        onDragStart: e => {
          if (mode === "extend") {
            e.preventDefault();
            return;
          }
          console.log("[TimelineContent] Event drag start:", event.id);
          handleDragStart(e, event.id);
          e.stopPropagation();

          // Tüm event elementini drag image olarak ayarla
          const eventElement = e.currentTarget.closest('.timeline-event');
          if (eventElement) {
            // Mouse pozisyonunu event elementine göre hesapla
            const eventRect = eventElement.getBoundingClientRect();
            const handleRect = e.currentTarget.getBoundingClientRect();
            const offsetX = handleRect.left - eventRect.left + handleRect.width / 2;
            const offsetY = handleRect.top - eventRect.top + handleRect.height / 2;

            // Geçici bir görüntü oluştur
            const dragImage = eventElement.cloneNode(true);
            dragImage.style.position = 'absolute';
            dragImage.style.top = '-1000px';
            dragImage.style.left = '-1000px';
            dragImage.style.opacity = '0.8';
            dragImage.style.pointerEvents = 'none';
            dragImage.style.transform = 'none';
            dragImage.style.width = eventRect.width + 'px';
            document.body.appendChild(dragImage);

            // Drag image'i ayarla
            e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);

            // Geçici elementi temizle
            setTimeout(() => {
              if (document.body.contains(dragImage)) {
                document.body.removeChild(dragImage);
              }
            }, 0);
          }
          handleDragStartSafe(e, event.id);
        },
        onDragEnd: e => {
          if (mode === "extend") {
            e.preventDefault();
            return;
          }
          handleDragEndSafe(e);
        },
        onMouseDown: e => {
          e.stopPropagation();
        }
      }), iconType && /*#__PURE__*/external_react_default().createElement(Timeline_EventIcon, {
        type: iconType
      }), /*#__PURE__*/external_react_default().createElement("span", {
        className: "timeline-event-title"
      }, event.title), eventsExtendOn && !isHourly && /*#__PURE__*/external_react_default().createElement("div", {
        className: "timeline-event-extend-handle",
        onMouseDown: mouseEvent => {
          mouseEvent.stopPropagation();
          handleMouseDownExtend(mouseEvent, event);
        }
      }));
    }), tempEvent && tempEvent.resourceId === resource.id && /*#__PURE__*/external_react_default().createElement("div", {
      className: "timeline-temp-event",
      style: TimelineContent_objectSpread(TimelineContent_objectSpread({}, calculatePosition(tempEvent, dates)), tempEventStyle)
    }, tempEvent.title), dates.map((dateObj, colIndex) => {
      // Geçmiş tarih kontrolü
      let isPastDate = false;
      if (preventPastEvents && minDate) {
        const cellDate = parseDate(dateObj.fullDate);
        const minDateObj = parseDate(minDate);
        const cellDateOnly = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
        const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
        isPastDate = cellDateOnly < minDateOnly;
      }

      // Hafta sonu kontrolü
      let isWeekend = false;
      if (highlightWeekends) {
        const cellDate = parseDate(dateObj.fullDate);
        const dayOfWeek = cellDate.getDay(); // 0 = Pazar, 6 = Cumartesi
        isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      }

      // Disabled tarih kontrolü
      const isDisabled = disableDates ? isDateDisabled(dateObj.fullDate, disableDates) : false;
      return /*#__PURE__*/external_react_default().createElement("div", {
        key: "cell-".concat(groupIndex, "-").concat(rowIndex, "-").concat(colIndex),
        className: "timeline-cell ".concat(isCellSelected(resource.id, dateObj) ? "selected" : "", " ").concat(isPastDate ? "timeline-cell-past" : "", " ").concat(isWeekend ? "timeline-cell-weekend" : "", " ").concat(isDisabled ? "timeline-cell-disabled" : ""),
        "data-date": JSON.stringify(dateObj),
        "data-resource-id": resource.id,
        onMouseDown: e => {
          // Sağ tıklamayı engelle (sadece sol tık ile event oluştur)
          if (e.button === 2 || e.which === 3) {
            return;
          }
          // Disabled veya geçmiş tarihe tıklamayı engelle
          if (!isPastDate && !isDisabled) {
            handleCellClick(resource.id, dateObj, e);
          }
        },
        onContextMenu: e => {
          // Disabled veya geçmiş tarih hücrelerde context menu'yu engelle
          if (isDisabled || isPastDate) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          e.preventDefault(); // Varsayılan context menu'yu engelle
          e.stopPropagation(); // Event bubbling'i durdur
          if (cellContextMenuOn) {
            handleCellContextMenu(e, resource, dateObj);
          }
        },
        onMouseEnter: e => {
          if (cellTooltipOn && cellTooltipResolver) {
            const tooltipContent = cellTooltipResolver(resource, dateObj);
            if (tooltipContent) {
              // Mouse pozisyonunu kullan
              setCellTooltip({
                content: tooltipContent,
                resource: resource,
                date: dateObj
              });
              setCellTooltipPosition({
                top: e.clientY,
                left: e.clientX
              });
            }
          }
        },
        onMouseMove: e => {
          if (cellTooltipOn && cellTooltip) {
            // Mouse hareket ettikçe tooltip'i takip et
            setCellTooltipPosition({
              top: e.clientY,
              left: e.clientX
            });
          }
        },
        onMouseLeave: () => {
          if (cellTooltipOn) {
            setCellTooltip(null);
          }
        },
        onDragOver: e => {
          // Disabled veya geçmiş tarih hücrelerde drag&drop'u engelle
          if (isDisabled || isPastDate) {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'none';
            return false;
          }
          e.preventDefault();
          e.stopPropagation();
          console.log("[TimelineContent] onDragOver called for resource:", resource.id);
          handleDragOver(e);
        },
        onDrop: e => {
          // Disabled veya geçmiş tarih hücrelerde drop'u engelle
          if (isDisabled || isPastDate) {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'none';
            return false;
          }
          e.preventDefault();
          e.stopPropagation();
          console.log("[TimelineContent] onDrop called for resource:", resource.id, "date:", dateObj.fullDate);
          handleDrop(e, resource.id, parseDate(dateObj.fullDate));
        }
      });
    }));
  }))), eventTooltipOn && selectedEvent && TooltipComponent && mode !== "extend" && /*#__PURE__*/external_react_default().createElement(TooltipComponent, {
    event: selectedEvent,
    position: tooltipPosition,
    onClose: handleCloseTooltip
  }), cellContextMenuOn && /*#__PURE__*/external_react_default().createElement(Timeline_ContextMenu, {
    isOpen: contextMenu.isOpen,
    position: contextMenu.position,
    onClose: handleCloseContextMenu,
    menuItems: cellContextMenuItems,
    resource: contextMenu.resource,
    date: contextMenu.date
  })));
};
/* harmony default export */ const Timeline_TimelineContent = (TimelineContent);
;// ./src/components/Timeline/EventTooltip.jsx
// src/components/Timeline/EventTooltip.jsx

const EventTooltip = _ref => {
  let {
    event,
    position = {
      top: 0,
      left: 0
    },
    onClose,
    onEdit,
    onDelete
  } = _ref;
  if (!event) return null;
  const {
    top,
    left
  } = position;

  // Rezervasyon durumuna göre renk belirleme
  const getStatusColor = status => {
    switch (status) {
      case "Confirmed":
        return "#4caf50";
      // Yeşil
      case "Pending":
        return "#ff9800";
      // Turuncu
      case "Cancelled":
        return "#f44336";
      // Kırmızı
      case "Completed":
        return "#2196f3";
      // Mavi
      default:
        return "#9e9e9e";
      // Gri
    }
  };
  const statusColor = getStatusColor(event.status);
  return /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      position: "absolute",
      top: top - 200,
      // Tooltip'in biraz yukarıda görünmesi için
      left: left + 70,
      transform: "translateX(-50%)",
      backgroundColor: "#ffffff",
      color: "#333333",
      borderRadius: "10px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      fontSize: "16px",
      zIndex: 1000,
      pointerEvents: "auto",
      // Tooltip'in tıklanabilir olmasını sağlar
      whiteSpace: "normal",
      maxWidth: "400px",
      width: "100%",
      transition: "opacity 0.3s ease, transform 0.3s ease"
    }
  }, onClose && /*#__PURE__*/external_react_default().createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "10px",
      right: "15px",
      background: "transparent",
      border: "none",
      color: "#aaa",
      fontSize: "24px",
      cursor: "pointer",
      transition: "color 0.2s"
    },
    "aria-label": "Kapat",
    onMouseOver: e => e.target.style.color = "#000",
    onMouseOut: e => e.target.style.color = "#aaa"
  }, "\xD7"), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      backgroundColor: statusColor,
      color: "#ffffff",
      padding: "15px 20px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      fontWeight: "bold",
      fontSize: "18px"
    }
  }, event.title), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      fontSize: "14px"
    }
  }, "Rezervasyon ID: ", event.reservationId)), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }
  }, Array.isArray(event.guestNames) && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Misafirler:"), " ", event.guestNames.join(", ")), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Giri\u015F:"), " ", new Date(event.startDate).toLocaleDateString()), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "\xC7\u0131k\u0131\u015F:"), " ", new Date(event.endDate).toLocaleDateString())), (event.totalAmount !== undefined || event.amountPaid !== undefined) && /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px"
    }
  }, event.amountPaid !== undefined && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "\xD6denen Miktar:"), " $", event.amountPaid.toFixed(2)), event.totalAmount !== undefined && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Toplam Bor\xE7:"), " $", event.totalAmount.toFixed(2))), event.status && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Durum:"), " ", event.status), event.note && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Not:"), " ", event.note)), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      padding: "15px 20px",
      borderTop: "1px solid #ddd",
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px"
    }
  }, onEdit && /*#__PURE__*/external_react_default().createElement("button", {
    onClick: () => onEdit(event),
    style: {
      padding: "8px 16px",
      backgroundColor: "#2196f3",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "background-color 0.2s"
    },
    onMouseOver: e => e.target.style.backgroundColor = "#1976d2",
    onMouseOut: e => e.target.style.backgroundColor = "#2196f3"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    role: "img",
    "aria-label": "D\xFCzenle"
  }, "\u270F\uFE0F"), "D\xFCzenle"), onDelete && /*#__PURE__*/external_react_default().createElement("button", {
    onClick: () => onDelete(event.id),
    style: {
      padding: "8px 16px",
      backgroundColor: "#f44336",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "background-color 0.2s"
    },
    onMouseOver: e => e.target.style.backgroundColor = "#d32f2f",
    onMouseOut: e => e.target.style.backgroundColor = "#f44336"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    role: "img",
    "aria-label": "Sil"
  }, "\uD83D\uDDD1\uFE0F"), "Sil")));
};
/* harmony default export */ const Timeline_EventTooltip = (EventTooltip);
;// ./src/components/Timeline/EventDetailModal.jsx
function EventDetailModal_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function EventDetailModal_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? EventDetailModal_ownKeys(Object(t), !0).forEach(function (r) { EventDetailModal_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : EventDetailModal_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function EventDetailModal_defineProperty(e, r, t) { return (r = EventDetailModal_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function EventDetailModal_toPropertyKey(t) { var i = EventDetailModal_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function EventDetailModal_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


const EventDetailModal = _ref => {
  let {
    event,
    isOpen,
    onClose,
    onSave,
    onDelete,
    resources = []
  } = _ref;
  const [formData, setFormData] = (0,external_react_.useState)(EventDetailModal_objectSpread({
    title: '',
    startDate: '',
    endDate: '',
    resourceId: ''
  }, event));
  (0,external_react_.useEffect)(() => {
    if (event) {
      setFormData(EventDetailModal_objectSpread({
        title: event.title || '',
        startDate: event.startDate ? new Date(event.startDate).toISOString().split('T')[0] : '',
        endDate: event.endDate ? new Date(event.endDate).toISOString().split('T')[0] : '',
        resourceId: event.resourceId || ''
      }, event));
    }
  }, [event]);
  if (!isOpen || !event) return null;
  const handleSubmit = e => {
    e.preventDefault();
    if (onSave) {
      const updatedEvent = EventDetailModal_objectSpread(EventDetailModal_objectSpread(EventDetailModal_objectSpread({}, event), formData), {}, {
        startDate: new Date(formData.startDate),
        endDate: new Date(formData.endDate)
      });
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
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/external_react_default().createElement("h2", null, "Event D\xFCzenle"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/external_react_default().createElement("form", {
    onSubmit: handleSubmit,
    className: "modal-form"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/external_react_default().createElement("label", null, "Ba\u015Fl\u0131k"), /*#__PURE__*/external_react_default().createElement("input", {
    type: "text",
    value: formData.title,
    onChange: e => setFormData(EventDetailModal_objectSpread(EventDetailModal_objectSpread({}, formData), {}, {
      title: e.target.value
    })),
    required: true
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/external_react_default().createElement("label", null, "Resource"), /*#__PURE__*/external_react_default().createElement("select", {
    value: formData.resourceId,
    onChange: e => setFormData(EventDetailModal_objectSpread(EventDetailModal_objectSpread({}, formData), {}, {
      resourceId: e.target.value
    })),
    required: true
  }, /*#__PURE__*/external_react_default().createElement("option", {
    value: ""
  }, "Se\xE7iniz..."), resources.map(resource => /*#__PURE__*/external_react_default().createElement("option", {
    key: resource.id,
    value: resource.id
  }, resource.name)))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/external_react_default().createElement("label", null, "Ba\u015Flang\u0131\xE7 Tarihi"), /*#__PURE__*/external_react_default().createElement("input", {
    type: "date",
    value: formData.startDate,
    onChange: e => setFormData(EventDetailModal_objectSpread(EventDetailModal_objectSpread({}, formData), {}, {
      startDate: e.target.value
    })),
    required: true
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/external_react_default().createElement("label", null, "Biti\u015F Tarihi"), /*#__PURE__*/external_react_default().createElement("input", {
    type: "date",
    value: formData.endDate,
    onChange: e => setFormData(EventDetailModal_objectSpread(EventDetailModal_objectSpread({}, formData), {}, {
      endDate: e.target.value
    })),
    required: true
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "btn-delete",
    onClick: handleDelete
  }, "Sil"), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "btn-cancel",
    onClick: onClose
  }, "\u0130ptal"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "submit",
    className: "btn-save"
  }, "Kaydet"))))));
};
/* harmony default export */ const Timeline_EventDetailModal = (EventDetailModal);
;// ./src/components/Timeline/DailyView.jsx
function DailyView_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function DailyView_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? DailyView_ownKeys(Object(t), !0).forEach(function (r) { DailyView_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DailyView_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function DailyView_defineProperty(e, r, t) { return (r = DailyView_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function DailyView_toPropertyKey(t) { var i = DailyView_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function DailyView_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/**
 * Daily View Component
 * Seçili resource ve tarih için günlük saat bazlı timeline görünümü
 */
const DailyView = _ref => {
  let {
    isOpen,
    onClose,
    resource,
    date,
    events = [],
    onEventCreate,
    onEventUpdate,
    onEventDelete,
    themeType = 'light'
  } = _ref;
  const [isCreating, setIsCreating] = (0,external_react_.useState)(false);
  const [tempEvent, setTempEvent] = (0,external_react_.useState)(null);
  const containerRef = (0,external_react_.useRef)(null);
  const timelineRef = (0,external_react_.useRef)(null);

  // Saatleri oluştur (0-23)
  const hours = Array.from({
    length: 24
  }, (_, i) => i);

  // O güne ait event'leri filtrele
  const dayEvents = events.filter(event => {
    if (!event.startDate || !date) return false;
    const eventDate = new Date(event.startDate);
    const selectedDate = new Date(date.fullDate || date);
    return eventDate.getFullYear() === selectedDate.getFullYear() && eventDate.getMonth() === selectedDate.getMonth() && eventDate.getDate() === selectedDate.getDate() && event.resourceId === (resource === null || resource === void 0 ? void 0 : resource.id);
  });

  // Saat bazlı event pozisyonu hesapla
  const getEventPosition = event => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const startHour = startDate.getHours() + startDate.getMinutes() / 60;
    const endHour = endDate.getHours() + endDate.getMinutes() / 60;
    const duration = endHour - startHour;
    return {
      top: "".concat(startHour / 24 * 100, "%"),
      height: "".concat(duration / 24 * 100, "%")
    };
  };

  // Timeline'a tıklandığında
  const handleTimelineClick = e => {
    if (!onEventCreate || !timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickedY = e.clientY - rect.top;
    const timelineHeight = rect.height;
    const totalMinutes = Math.max(0, Math.min(clickedY / timelineHeight * (24 * 60), 24 * 60));
    const startHour = Math.floor(totalMinutes / 60);
    const startMinutes = Math.floor(totalMinutes % 60);
    const startDate = new Date(date.fullDate || date);
    startDate.setHours(startHour, startMinutes, 0, 0);
    const endDate = new Date(startDate);
    endDate.setTime(startDate.getTime() + 30 * 60 * 1000); // Varsayılan 30 dakika

    setIsCreating(true);
    setTempEvent({
      startDate,
      endDate
    });
  };

  // Mouse hareketi ile event oluşturma
  const handleMouseMove = (0,external_react_.useCallback)(e => {
    if (!isCreating || !tempEvent || !timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const timelineHeight = rect.height;
    const totalMinutes = Math.max(0, Math.min(mouseY / timelineHeight * (24 * 60), 24 * 60));
    const endHour = Math.floor(totalMinutes / 60);
    const endMinutes = Math.floor(totalMinutes % 60);
    const newEndDate = new Date(tempEvent.startDate);
    newEndDate.setHours(endHour, endMinutes, 0, 0);

    // Bitiş saati başlangıçtan önce olamaz
    if (newEndDate <= tempEvent.startDate) {
      newEndDate.setTime(tempEvent.startDate.getTime() + 15 * 60 * 1000); // En az 15 dakika
    }
    setTempEvent(prev => DailyView_objectSpread(DailyView_objectSpread({}, prev), {}, {
      endDate: newEndDate
    }));
  }, [isCreating, tempEvent]);

  // Mouse bırakıldığında event oluştur
  const handleMouseUp = (0,external_react_.useCallback)(() => {
    if (!isCreating || !tempEvent || !onEventCreate) return;

    // Minimum süre kontrolü (en az 15 dakika)
    const duration = tempEvent.endDate.getTime() - tempEvent.startDate.getTime();
    if (duration < 15 * 60 * 1000) {
      setIsCreating(false);
      setTempEvent(null);
      return; // Çok kısa, event oluşturma
    }
    const newEvent = {
      id: "daily-".concat(Date.now()),
      title: 'Yeni Randevu',
      startDate: tempEvent.startDate,
      endDate: tempEvent.endDate,
      resourceId: resource === null || resource === void 0 ? void 0 : resource.id,
      isHourly: true // Saatlik rezervasyon flag'i
    };
    onEventCreate(newEvent);
    setIsCreating(false);
    setTempEvent(null);
  }, [isCreating, tempEvent, onEventCreate, resource]);

  // Global mouse event listener'ları
  (0,external_react_.useEffect)(() => {
    if (!isCreating) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isCreating, handleMouseMove, handleMouseUp]);

  // Tarih formatı
  const formatDate = dateObj => {
    if (!dateObj) return '';
    const d = new Date(dateObj.fullDate || dateObj);
    return d.toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Saat formatı
  const formatHour = hour => {
    return "".concat(hour.toString().padStart(2, '0'), ":00");
  };
  if (!isOpen || !resource || !date) return null;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "daily-view-overlay ".concat(themeType === 'dark' ? 'dark-mode' : ''),
    onClick: onClose
  }, /*#__PURE__*/external_react_default().createElement("div", {
    ref: containerRef,
    className: "daily-view-container",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "daily-view-header"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "daily-view-header-content"
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: "daily-view-title"
  }, resource.name || resource.id), /*#__PURE__*/external_react_default().createElement("p", {
    className: "daily-view-date"
  }, formatDate(date))), /*#__PURE__*/external_react_default().createElement("button", {
    className: "daily-view-close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "daily-view-body"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "daily-view-hours"
  }, hours.map(hour => /*#__PURE__*/external_react_default().createElement("div", {
    key: hour,
    className: "daily-view-hour-label"
  }, formatHour(hour)))), /*#__PURE__*/external_react_default().createElement("div", {
    ref: timelineRef,
    className: "daily-view-timeline",
    onClick: handleTimelineClick
  }, hours.map(hour => /*#__PURE__*/external_react_default().createElement("div", {
    key: hour,
    className: "daily-view-hour-cell"
  })), dayEvents.map(event => {
    const position = getEventPosition(event);
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: event.id,
      className: "daily-view-event",
      style: position,
      onClick: e => {
        e.stopPropagation();
        // Event detayları göster
      }
    }, /*#__PURE__*/external_react_default().createElement("span", {
      className: "daily-view-event-title"
    }, event.title), /*#__PURE__*/external_react_default().createElement("span", {
      className: "daily-view-event-time"
    }, new Date(event.startDate).toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    }), " - ", new Date(event.endDate).toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    })));
  }), isCreating && tempEvent && /*#__PURE__*/external_react_default().createElement("div", {
    className: "daily-view-temp-event",
    style: getEventPosition({
      startDate: tempEvent.startDate,
      endDate: tempEvent.endDate
    })
  }, "Yeni Randevu")))));
};
/* harmony default export */ const Timeline_DailyView = (DailyView);
;// ./src/utils/timelineUtils.js
// src/utils/timelineUtils.js

const generateTimelineData = (startYear, endYear) => {
  const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const dates = [];
  const monthHeaders = [];
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();
      const startIndex = dates.length;
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayName = dayNames[date.getDay()];
        dates.push({
          fullDate: date,
          display: "".concat(day, " ").concat(dayName)
        });
      }
      const endIndex = dates.length - 1;
      monthHeaders.push({
        monthName: monthNames[month - 1],
        year,
        startIndex,
        endIndex,
        totalDays: endIndex - startIndex + 1
      });
    }
  }
  return {
    dates,
    monthHeaders
  };
};
;// ./src/hooks/useTouchGestures.js
// src/hooks/useTouchGestures.js



/**
 * Touch gesture hook for mobile support
 * @param {Object} handlers - Gesture handlers
 * @returns {Object} - Touch event handlers
 */
const useTouchGestures = _ref => {
  let {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    minSwipeDistance = 50,
    enabled = true
  } = _ref;
  const touchStartRef = (0,external_react_.useRef)(null);
  const touchStartTimeRef = (0,external_react_.useRef)(null);
  const lastTouchRef = (0,external_react_.useRef)(null);
  const handleTouchStart = (0,external_react_.useCallback)(e => {
    if (!enabled) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
    touchStartTimeRef.current = Date.now();
    lastTouchRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  }, [enabled]);
  const handleTouchMove = (0,external_react_.useCallback)(e => {
    if (!enabled || !touchStartRef.current) return;
    const touch = e.touches[0];
    if (lastTouchRef.current) {
      lastTouchRef.current = {
        x: touch.clientX,
        y: touch.clientY
      };
    }
  }, [enabled]);
  const handleTouchEnd = (0,external_react_.useCallback)(e => {
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
    onTouchEnd: handleTouchEnd
  };
};
;// ./src/hooks/useKeyboardShortcuts.js


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
const useKeyboardShortcuts = _ref => {
  let {
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
    enabled = true
  } = _ref;
  // Default key mappings
  const defaultKeyMap = {
    navigateLeft: keyMap.navigateLeft || 'ArrowLeft',
    navigateRight: keyMap.navigateRight || 'ArrowRight',
    navigateUp: keyMap.navigateUp || 'ArrowUp',
    navigateDown: keyMap.navigateDown || 'ArrowDown',
    delete: keyMap.delete || 'Delete',
    undo: keyMap.undo || {
      key: 'z',
      ctrl: true
    },
    redo: keyMap.redo || {
      key: 'y',
      ctrl: true
    },
    copy: keyMap.copy || {
      key: 'c',
      ctrl: true
    },
    paste: keyMap.paste || {
      key: 'v',
      ctrl: true
    },
    zoomIn: keyMap.zoomIn || {
      key: '=',
      ctrl: true
    },
    zoomOut: keyMap.zoomOut || {
      key: '-',
      ctrl: true
    }
  };
  const handleKeyDown = (0,external_react_.useCallback)(e => {
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
    else if (isCtrl && key.toLowerCase() === defaultKeyMap.undo.key.toLowerCase() && onUndo) {
      e.preventDefault();
      onUndo();
    }
    // Ctrl+Y (Redo)
    else if (isCtrl && key.toLowerCase() === defaultKeyMap.redo.key.toLowerCase() && onRedo) {
      e.preventDefault();
      onRedo();
    }
    // Ctrl+C (Copy)
    else if (isCtrl && key.toLowerCase() === defaultKeyMap.copy.key.toLowerCase() && onCopy) {
      e.preventDefault();
      onCopy();
    }
    // Ctrl+V (Paste)
    else if (isCtrl && key.toLowerCase() === defaultKeyMap.paste.key.toLowerCase() && onPaste) {
      e.preventDefault();
      onPaste();
    }
    // Ctrl+= or Ctrl++ (Zoom In)
    else if (isCtrl && (key === '=' || key === '+' || key === '=' && e.shiftKey) && onZoomIn) {
      e.preventDefault();
      onZoomIn();
    }
    // Ctrl+- (Zoom Out)
    else if (isCtrl && key === '-' && onZoomOut) {
      e.preventDefault();
      onZoomOut();
    }
  }, [enabled, defaultKeyMap, onNavigateLeft, onNavigateRight, onNavigateUp, onNavigateDown, onDelete, onUndo, onRedo, onCopy, onPaste, onZoomIn, onZoomOut]);
  (0,external_react_.useEffect)(() => {
    if (enabled) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [enabled, handleKeyDown]);
};
/* harmony default export */ const hooks_useKeyboardShortcuts = (useKeyboardShortcuts);
;// ./src/hooks/useEventManagement.js
function useEventManagement_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function useEventManagement_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? useEventManagement_ownKeys(Object(t), !0).forEach(function (r) { useEventManagement_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : useEventManagement_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useEventManagement_defineProperty(e, r, t) { return (r = useEventManagement_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function useEventManagement_toPropertyKey(t) { var i = useEventManagement_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function useEventManagement_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Event management hook - handles selection, undo/redo, copy/paste
 * @param {Array} initialEvents - Initial events array
 * @param {Function} onEventsChange - Callback when events change
 * @param {number} maxHistorySize - Maximum undo/redo history size
 */
const useEventManagement = function () {
  let initialEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let onEventsChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let maxHistorySize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  const [events, setEvents] = (0,external_react_.useState)(initialEvents);
  const [selectedEvents, setSelectedEvents] = (0,external_react_.useState)([]);
  const [copiedEvents, setCopiedEvents] = (0,external_react_.useState)([]);

  // Undo/Redo history
  const historyRef = (0,external_react_.useRef)([]);
  const historyIndexRef = (0,external_react_.useRef)(-1);
  const isUndoRedoRef = (0,external_react_.useRef)(false);

  // Update events and add to history
  const updateEvents = (0,external_react_.useCallback)(function (newEvents) {
    let addToHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setEvents(newEvents);
    if (onEventsChange) {
      onEventsChange(newEvents);
    }

    // Add to history (if not undo/redo operation)
    if (addToHistory && !isUndoRedoRef.current) {
      const history = historyRef.current;
      const historyIndex = historyIndexRef.current;

      // Remove any history after current index (if we're not at the end)
      const newHistory = history.slice(0, historyIndex + 1);

      // Add new state
      newHistory.push([...newEvents]);

      // Limit history size
      if (newHistory.length > maxHistorySize) {
        newHistory.shift();
      } else {
        historyIndexRef.current = newHistory.length - 1;
      }
      historyRef.current = newHistory;
    }
    isUndoRedoRef.current = false;
  }, [onEventsChange, maxHistorySize]);

  // Select event
  const selectEvent = (0,external_react_.useCallback)(function (eventId) {
    let multiSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setSelectedEvents(prev => {
      if (multiSelect) {
        // Toggle selection
        if (prev.includes(eventId)) {
          return prev.filter(id => id !== eventId);
        } else {
          return [...prev, eventId];
        }
      } else {
        // Single selection
        return [eventId];
      }
    });
  }, []);

  // Clear selection
  const clearSelection = (0,external_react_.useCallback)(() => {
    setSelectedEvents([]);
  }, []);

  // Delete selected events
  const deleteSelectedEvents = (0,external_react_.useCallback)(() => {
    if (selectedEvents.length === 0) return;
    const newEvents = events.filter(event => !selectedEvents.includes(event.id));
    updateEvents(newEvents);
    setSelectedEvents([]);
  }, [events, selectedEvents, updateEvents]);

  // Copy selected events
  const copySelectedEvents = (0,external_react_.useCallback)(() => {
    if (selectedEvents.length === 0) return;
    const eventsToCopy = events.filter(event => selectedEvents.includes(event.id));
    setCopiedEvents(eventsToCopy);
  }, [events, selectedEvents]);

  // Paste copied events
  const pasteEvents = (0,external_react_.useCallback)(function () {
    let targetDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let targetResourceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (copiedEvents.length === 0) return;
    const newEvents = [...events];
    const baseDate = targetDate || new Date();
    copiedEvents.forEach(event => {
      const newEvent = useEventManagement_objectSpread(useEventManagement_objectSpread({}, event), {}, {
        id: "".concat(event.id, "-copy-").concat(Date.now(), "-").concat(Math.random()),
        startDate: targetDate ? new Date(targetDate) : new Date(event.startDate),
        endDate: targetDate ? new Date(targetDate.getTime() + (new Date(event.endDate).getTime() - new Date(event.startDate).getTime())) : new Date(event.endDate),
        resourceId: targetResourceId || event.resourceId
      });
      newEvents.push(newEvent);
    });
    updateEvents(newEvents);
  }, [events, copiedEvents, updateEvents]);

  // Undo
  const undo = (0,external_react_.useCallback)(() => {
    const history = historyRef.current;
    const currentIndex = historyIndexRef.current;
    if (currentIndex > 0) {
      isUndoRedoRef.current = true;
      historyIndexRef.current = currentIndex - 1;
      const previousState = history[currentIndex - 1];
      setEvents([...previousState]);
      if (onEventsChange) {
        onEventsChange([...previousState]);
      }
    }
  }, [onEventsChange]);

  // Redo
  const redo = (0,external_react_.useCallback)(() => {
    const history = historyRef.current;
    const currentIndex = historyIndexRef.current;
    if (currentIndex < history.length - 1) {
      isUndoRedoRef.current = true;
      historyIndexRef.current = currentIndex + 1;
      const nextState = history[currentIndex + 1];
      setEvents([...nextState]);
      if (onEventsChange) {
        onEventsChange([...nextState]);
      }
    }
  }, [onEventsChange]);

  // Initialize history
  if (historyRef.current.length === 0) {
    historyRef.current = [[...events]];
    historyIndexRef.current = 0;
  }
  return {
    events,
    setEvents: updateEvents,
    selectedEvents,
    selectEvent,
    clearSelection,
    deleteSelectedEvents,
    copySelectedEvents,
    pasteEvents,
    copiedEvents,
    undo,
    redo,
    canUndo: historyIndexRef.current > 0,
    canRedo: historyIndexRef.current < historyRef.current.length - 1
  };
};
/* harmony default export */ const hooks_useEventManagement = (useEventManagement);
;// ./src/components/Timeline/Timeline.jsx
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Timeline_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Timeline_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Timeline_ownKeys(Object(t), !0).forEach(function (r) { Timeline_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Timeline_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Timeline_defineProperty(e, r, t) { return (r = Timeline_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Timeline_toPropertyKey(t) { var i = Timeline_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function Timeline_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }














const Timeline_Timeline_Timeline = _ref => {
  let {
    resources,
    programDate = null,
    events = [],
    resourceSettings = {
      showIdAsName: false,
      isGrouped: true,
      isCollapsible: true
    },
    indicatorOn = false,
    dropInfo: externalDropInfo,
    setDropInfo: externalSetDropInfo,
    masterHeaderView = true,
    resourceHeaderContent = "Akfa Timeline",
    // String veya React component olabilir

    // MasterHeader özelleştirme
    showDefaultHeaderButtons = true,
    // Varsayılan butonları göster/gizle
    customHeaderButtons = [],
    // Özel butonlar: [{ id, label, onClick, icon?, disabled?, className? }]
    eventsDragOn = true,
    eventsExtendOn = true,
    createNewEventOn = true,
    onDragInfo,
    onExtendInfo,
    onCreateEventInfo,
    // İsteğe bağlı event tıklama callback'leri
    onEventClick,
    onEventRightClick,
    // Yatay scroll özelliği aç/kapa
    horizontalScrollOn = false,
    // Varsayılan false

    dayRange = 30,
    setDayRange,
    themeType = "light",
    // Tema bilgisi varsayılan olarak light

    // Zoom özelliği
    zoomLevel = 1.0,
    // Zoom seviyesi (0.5 = %50, 1.0 = %100, 2.0 = %200)
    setZoomLevel,
    // Zoom seviyesini değiştiren fonksiyon
    zoomOn = true,
    // Zoom özelliğini aç/kapa
    minZoomLevel = 0.5,
    // Minimum zoom seviyesi
    maxZoomLevel = 3.0,
    // Maksimum zoom seviyesi
    zoomStep = 0.25,
    // Her zoom adımında değişecek miktar

    eventTooltipOn = true,
    tooltipComponent: TooltipComponent,
    // Özelleştirilebilir Tooltip bileşeni
    tempEventStyle = {},
    eventStyleResolver = () => ({}),
    indicatorDate = new Date(),
    onToday,
    onAdvance,
    onRetreat,
    onMonthAdvance,
    onMonthRetreat,
    // Event Alignment Mode
    eventAlignmentMode = "center",
    // "center" | "full" - center: gün ortasından başlar, full: gün başından başlar

    // Past Date Protection
    preventPastEvents = false,
    // Geçmiş tarihlere rezervasyon oluşturmayı engelle
    minDate = null,
    // Minimum tarih (eğer belirtilmezse indicatorDate kullanılır)

    // Weekend Highlighting
    highlightWeekends = false,
    // Hafta sonlarını farklı renkte göster

    // Cell Tooltip
    cellTooltipOn = false,
    // Cell tooltip'lerini aktif et
    cellTooltipResolver = null,
    // (resource, date) => tooltip content döndüren fonksiyon

    // Cell Context Menu
    cellContextMenuOn = false,
    // Cell context menu'yu aç/kapa
    cellContextMenuItems = [],
    // Context menu öğeleri: [{ id, label, icon, onClick, disabled, separator, danger, shortcut, tooltip, hidden }]
    onCellContextMenu = null,
    // Context menu açıldığında çağrılacak callback: (resource, date, event) => {}

    // Daily View
    dailyViewOn = true,
    // Daily view özelliğini aç/kapa

    // Event Icons & Badges
    eventIconsOn = false,
    // Event ikonlarını göster/gizle
    eventIconResolver = null,
    // (event) => icon type döndüren fonksiyon
    eventBadgesOn = false,
    // Event badge'lerini göster/gizle
    eventBadgeResolver = null,
    // (event) => { text, type, position } döndüren fonksiyon

    // Loading State
    isLoading = false,
    // Timeline yükleniyor mu?
    loadingType = 'spinner',
    // 'spinner', 'dots', 'pulse'

    // Event Management
    eventManagementOn = false,
    // Event yönetimi özelliklerini aktif et
    onEventDelete = null,
    // Event silme callback
    onEventUpdate = null,
    // Event güncelleme callback
    onEventCopy = null,
    // Event kopyalama callback
    onEventPaste = null,
    // Event yapıştırma callback

    // Keyboard Shortcuts
    keyboardShortcutsOn = false,
    // Keyboard shortcuts'ları aktif et
    keyboardShortcutsConfig = {
      onNavigateLeft: null,
      onNavigateRight: null,
      onNavigateUp: null,
      onNavigateDown: null,
      onDelete: null,
      onUndo: null,
      onRedo: null,
      onCopy: null,
      onPaste: null
    },
    keyboardShortcutsKeyMap = {},
    // Özelleştirilebilir tuş haritası

    // Disable Dates
    disableDates = null // { mode: 'exclude' | 'include', dates: [], ranges: [] }
    // mode: 'exclude' = belirtilen tarihler disabled, 'include' = belirtilen tarihler enabled (diğerleri disabled)
    // dates: ['2025-01-15', '2025-01-20', ...] veya [Date, Date, ...] - Tekil tarihler
    // ranges: [{ start: '2025-01-15', end: '2025-01-20' }, ...] veya [{ start: Date, end: Date }, ...] - Tarih aralıkları
  } = _ref;
  // ---------------------------------------------------------
  // 1) timelineData oluştur (dates, monthHeaders vs.)
  // ---------------------------------------------------------
  const timelineData = generateTimelineData(2020, 2030); // 10 yıllık veri
  const {
    dates,
    monthHeaders
  } = timelineData;
  const [selectedDate, setSelectedDate] = (0,external_react_.useState)(() => {
    const date = programDate ? new Date(programDate) : new Date();
    date.setDate(date.getDate() - 3); // Program tarihinden 3 gün öncesini al
    return date;
  });

  // programDate prop'u değiştiğinde selectedDate'i güncelle
  (0,external_react_.useEffect)(() => {
    if (programDate) {
      const date = new Date(programDate);
      date.setDate(date.getDate() - 3); // Program tarihinden 3 gün öncesini al
      setSelectedDate(date);
    }
  }, [programDate]);

  // ---------------------------------------------------------
  // 2) local state
  // ---------------------------------------------------------
  const [collapsedGroups, setCollapsedGroups] = (0,external_react_.useState)({});

  // Event Management
  const eventManagement = hooks_useEventManagement(events, newEvents => {
    setLocalEvents(newEvents);
    if (onEventUpdate) {
      onEventUpdate(newEvents);
    }
  });
  const [localEvents, setLocalEvents] = (0,external_react_.useState)(events);

  // dropInfo state - eğer external yoksa internal state kullan
  const [internalDropInfo, setInternalDropInfo] = (0,external_react_.useState)(null);
  const dropInfo = externalDropInfo !== undefined ? externalDropInfo : internalDropInfo;
  const setDropInfo = externalSetDropInfo || setInternalDropInfo;

  // Update local events when events prop changes
  (0,external_react_.useEffect)(() => {
    setLocalEvents(events);
  }, [events]);
  const [selectedEvent, setSelectedEvent] = (0,external_react_.useState)(null);
  const [tooltipPosition] = (0,external_react_.useState)({
    top: 0,
    left: 0
  });
  const [editingEvent, setEditingEvent] = (0,external_react_.useState)(null);
  const [isModalOpen, setIsModalOpen] = (0,external_react_.useState)(false);

  // Daily View State
  const [dailyView, setDailyView] = (0,external_react_.useState)({
    isOpen: false,
    resource: null,
    date: null
  });

  // dayRange = ekranda göstermeyi istediğimiz gün/hücre sayısı (ör. 30 gün)

  const [isDarkMode, setIsDarkMode] = (0,external_react_.useState)(themeType === "dark");
  (0,external_react_.useEffect)(() => {
    if (themeType !== undefined) {
      setIsDarkMode(themeType === "dark");
    }
  }, [themeType]);

  // toggleDarkMode removed - not used
  // ---------------------------------------------------------
  // 3) Zoom seviyesine göre hücre genişliği
  //    Container genişliği = dayRange * cellWidth
  // ---------------------------------------------------------
  const baseCellWidth = 56.95; // Temel hücre genişliği (zoom = 1.0 için)
  const cellWidth = baseCellWidth * zoomLevel; // Zoom seviyesine göre hücre genişliği
  const containerWidth = dayRange * cellWidth;

  // ---------------------------------------------------------
  // 4) Touch Gestures (Mobil desteği)
  // ---------------------------------------------------------
  const timelineContainerRef = (0,external_react_.useRef)(null);
  const touchGestures = useTouchGestures({
    onSwipeLeft: () => {
      if (onAdvance) onAdvance();
    },
    onSwipeRight: () => {
      if (onRetreat) onRetreat();
    },
    enabled: true
  });
  // örneğin dayRange=30 => containerWidth=30*56.95=1708.5 px

  // ---------------------------------------------------------
  // 4) Event Tooltip logic
  // ---------------------------------------------------------
  // handleEventClick removed - handled in TimelineContent

  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // Event Management Handlers
  const handleEventDoubleClick = event => {
    if (eventManagementOn) {
      setEditingEvent(event);
      setIsModalOpen(true);
    }
  };
  const handleEventRightClickInternal = (event, e) => {
    if (eventManagementOn) {
      e.preventDefault();
      eventManagement.selectEvent(event.id, false);
    }
    if (onEventRightClick) {
      onEventRightClick(event, e);
    }
  };
  const handleEventSave = updatedEvent => {
    if (eventManagementOn) {
      const newEvents = localEvents.map(ev => ev.id === updatedEvent.id ? updatedEvent : ev);
      eventManagement.setEvents(newEvents, true);
      if (onEventUpdate) {
        onEventUpdate(newEvents);
      }
    }
    setIsModalOpen(false);
    setEditingEvent(null);
  };
  const handleEventDelete = eventId => {
    if (eventManagementOn) {
      const newEvents = localEvents.filter(ev => ev.id !== eventId);
      eventManagement.setEvents(newEvents, true);
      if (onEventDelete) {
        onEventDelete([eventId]);
      }
    }
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  // ---------------------------------------------------------
  // 5) Tarih filtreleme => filteredDates
  // ---------------------------------------------------------
  const startIndex = dates.findIndex(d => d.fullDate >= selectedDate);
  const endIndex = startIndex + dayRange;
  const filteredDates = startIndex !== -1 ? dates.slice(startIndex, Math.min(endIndex, dates.length)) : [];
  const today = programDate ? new Date(programDate) : new Date();
  today.setDate(today.getDate() - 3);

  // Indicator için tarih index'ini bul
  const todayIndex = indicatorDate ? filteredDates.findIndex(d => {
    const dateStr = new Date(d.fullDate).toDateString();
    const indicatorStr = new Date(indicatorDate).toDateString();
    return dateStr === indicatorStr;
  }) : -1;

  // ---------------------------------------------------------
  // 6) Grupları aç/kapa
  // ---------------------------------------------------------
  const toggleGroupCollapse = groupName => {
    setCollapsedGroups(prev => Timeline_objectSpread(Timeline_objectSpread({}, prev), {}, {
      [groupName]: !prev[groupName]
    }));
  };

  // ---------------------------------------------------------
  // 7) Navigation fonksiyonları
  // ---------------------------------------------------------  const { dates, monthHeaders } = timelineData;

  const handleDateChange = newDate => {
    setSelectedDate(new Date(newDate));
  };
  const handleToday = () => {
    const today = programDate ? new Date(programDate) : new Date();
    today.setDate(today.getDate() - 3); // Program tarihinden 3 gün öncesini ayarla
    setSelectedDate(today);
    // App.js'teki callback'i de çağır
    if (onToday) onToday();
  };
  const handleAdvance = () => {
    setSelectedDate(prev => new Date(prev.getTime() + 5 * 24 * 60 * 60 * 1000));
    // App.js'teki callback'i de çağır
    if (onAdvance) onAdvance();
  };
  const handleRetreat = () => {
    setSelectedDate(prev => new Date(prev.getTime() - 5 * 24 * 60 * 60 * 1000));
    // App.js'teki callback'i de çağır
    if (onRetreat) onRetreat();
  };
  const handleMonthAdvance = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
    // App.js'teki callback'i de çağır
    if (onMonthAdvance) onMonthAdvance();
  };
  const handleMonthRetreat = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
    // App.js'teki callback'i de çağır
    if (onMonthRetreat) onMonthRetreat();
  };

  // ---------------------------------------------------------
  // 8) Dark Mode
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // 8.5) Zoom handlers
  // ---------------------------------------------------------
  const handleZoomIn = (0,external_react_.useCallback)(() => {
    if (setZoomLevel && zoomOn) {
      setZoomLevel(prev => Math.min(maxZoomLevel, prev + zoomStep));
    }
  }, [setZoomLevel, zoomOn, maxZoomLevel, zoomStep]);
  const handleZoomOut = (0,external_react_.useCallback)(() => {
    if (setZoomLevel && zoomOn) {
      setZoomLevel(prev => Math.max(minZoomLevel, prev - zoomStep));
    }
  }, [setZoomLevel, zoomOn, minZoomLevel, zoomStep]);

  // ---------------------------------------------------------
  // 8.6) Keyboard Shortcuts
  // ---------------------------------------------------------
  hooks_useKeyboardShortcuts({
    enabled: keyboardShortcutsOn,
    onNavigateLeft: keyboardShortcutsConfig.onNavigateLeft || onRetreat,
    onNavigateRight: keyboardShortcutsConfig.onNavigateRight || onAdvance,
    onNavigateUp: keyboardShortcutsConfig.onNavigateUp || (() => console.log("Navigate Up")),
    onNavigateDown: keyboardShortcutsConfig.onNavigateDown || (() => console.log("Navigate Down")),
    onDelete: keyboardShortcutsConfig.onDelete || (eventManagementOn ? eventManagement.deleteSelectedEvents : null),
    onUndo: keyboardShortcutsConfig.onUndo || (eventManagementOn ? eventManagement.undo : null),
    onRedo: keyboardShortcutsConfig.onRedo || (eventManagementOn ? eventManagement.redo : null),
    onCopy: keyboardShortcutsConfig.onCopy || (eventManagementOn ? eventManagement.copySelectedEvents : null),
    onPaste: keyboardShortcutsConfig.onPaste || null,
    onZoomIn: keyboardShortcutsConfig.onZoomIn || (zoomOn ? handleZoomIn : null),
    onZoomOut: keyboardShortcutsConfig.onZoomOut || (zoomOn ? handleZoomOut : null),
    keyMap: keyboardShortcutsKeyMap
  });

  // ---------------------------------------------------------
  // 9) Ay başlıklarını filtrele
  // ---------------------------------------------------------
  const filteredMonthHeaders = monthHeaders.map(header => {
    const adjustedStartIndex = Math.max(header.startIndex, startIndex);
    const adjustedEndIndex = Math.min(header.endIndex, endIndex - 1);
    return Timeline_objectSpread(Timeline_objectSpread({}, header), {}, {
      startIndex: adjustedStartIndex,
      endIndex: adjustedEndIndex
    });
  }).filter(header => header.startIndex <= header.endIndex);

  // ---------------------------------------------------------
  // 10) Return
  // ---------------------------------------------------------
  return /*#__PURE__*/external_react_default().createElement("div", _extends({
    className: "timeline-container ".concat(isDarkMode ? "dark-mode" : ""),
    ref: timelineContainerRef
  }, touchGestures), masterHeaderView && /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-master-header"
  }, /*#__PURE__*/external_react_default().createElement(Timeline_MasterHeader, {
    selectedDate: selectedDate // Seçili tarihi gönder
    ,
    onDateSelect: handleDateChange,
    onToday: handleToday,
    onAdvance: handleAdvance,
    onRetreat: handleRetreat,
    onMonthAdvance: handleMonthAdvance,
    onMonthRetreat: handleMonthRetreat,
    dayRange: dayRange,
    setDayRange: setDayRange,
    zoomLevel: zoomLevel,
    setZoomLevel: setZoomLevel,
    zoomOn: zoomOn,
    minZoomLevel: minZoomLevel,
    maxZoomLevel: maxZoomLevel,
    zoomStep: zoomStep,
    showDefaultButtons: showDefaultHeaderButtons,
    customButtons: customHeaderButtons
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-body"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-resources-container",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/external_react_default().createElement(Timeline_ResourcesHeader, {
    content: resourceHeaderContent
  }), /*#__PURE__*/external_react_default().createElement(Timeline_Resources, {
    groupedResources: resources,
    toggleGroupCollapse: toggleGroupCollapse,
    collapsedGroups: collapsedGroups,
    resourceSettings: resourceSettings
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-scrollable-container",
    style: {
      overflowX: horizontalScrollOn ? "auto" : "hidden"
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-content-wrapper",
    style: {
      width: horizontalScrollOn ? "".concat(containerWidth, "px") : "100%"
    }
  }, /*#__PURE__*/external_react_default().createElement(Timeline_TimelineHeader, {
    dates: filteredDates,
    monthHeaders: filteredMonthHeaders,
    highlightWeekends: highlightWeekends
  }), /*#__PURE__*/external_react_default().createElement(Timeline_TimelineContent, {
    groupedResources: resources,
    dates: filteredDates,
    collapsedGroups: collapsedGroups,
    events: localEvents,
    setEvents: setLocalEvents,
    onEventClick: onEventClick,
    onEventDoubleClick: eventManagementOn ? handleEventDoubleClick : null,
    onEventRightClick: eventManagementOn ? handleEventRightClickInternal : onEventRightClick,
    selectedEvents: eventManagementOn ? eventManagement.selectedEvents : [],
    onEventSelect: eventManagementOn ? eventManagement.selectEvent : null,
    todayIndex: todayIndex,
    indicatorOn: indicatorOn,
    resourceSettings: resourceSettings,
    toggleGroupCollapse: toggleGroupCollapse,
    setDropInfo: setDropInfo,
    eventsDragOn: eventsDragOn,
    eventsExtendOn: eventsExtendOn,
    createNewEventOn: createNewEventOn,
    onDragInfo: onDragInfo,
    onExtendInfo: onExtendInfo,
    onCreateEventInfo: onCreateEventInfo,
    eventTooltipOn: eventTooltipOn // Tooltip kontrolü
    ,
    tooltipComponent: TooltipComponent // Özelleştirilebilir Tooltip bileşeni
    ,
    tempEventStyle: tempEventStyle,
    eventStyleResolver: eventStyleResolver,
    eventAlignmentMode: eventAlignmentMode,
    preventPastEvents: preventPastEvents,
    minDate: minDate || indicatorDate,
    highlightWeekends: highlightWeekends,
    cellTooltipOn: cellTooltipOn,
    cellTooltipResolver: cellTooltipResolver,
    cellContextMenuOn: cellContextMenuOn,
    cellContextMenuItems: cellContextMenuItems.map(item => {
      // Daily timeline item'ını özel handle et
      if (item.id === 'daily-timeline' && dailyViewOn) {
        return Timeline_objectSpread(Timeline_objectSpread({}, item), {}, {
          onClick: (resource, date) => {
            setDailyView({
              isOpen: true,
              resource,
              date
            });
            if (item.onClick) {
              item.onClick(resource, date);
            }
          }
        });
      }
      return item;
    }),
    onCellContextMenu: onCellContextMenu,
    eventIconsOn: eventIconsOn,
    eventIconResolver: eventIconResolver,
    eventBadgesOn: eventBadgesOn,
    eventBadgeResolver: eventBadgeResolver,
    isLoading: isLoading,
    loadingType: loadingType,
    disableDates: disableDates
  }), selectedEvent && /*#__PURE__*/external_react_default().createElement(Timeline_EventTooltip, {
    event: selectedEvent,
    position: tooltipPosition,
    onClose: handleCloseTooltip,
    onDelete: eventId => setLocalEvents(prev => prev.filter(e => e.id !== eventId))
  })))), eventManagementOn && /*#__PURE__*/external_react_default().createElement(Timeline_EventDetailModal, {
    event: editingEvent,
    isOpen: isModalOpen,
    onClose: () => {
      setIsModalOpen(false);
      setEditingEvent(null);
    },
    onSave: handleEventSave,
    onDelete: handleEventDelete,
    resources: resources.flatMap(group => group.resources || [])
  }), dailyViewOn && /*#__PURE__*/external_react_default().createElement(Timeline_DailyView, {
    isOpen: dailyView.isOpen,
    onClose: () => setDailyView({
      isOpen: false,
      resource: null,
      date: null
    }),
    resource: dailyView.resource,
    date: dailyView.date,
    events: localEvents,
    onEventCreate: newEvent => {
      const updatedEvents = [...localEvents, newEvent];
      setLocalEvents(updatedEvents);
      if (onEventUpdate) {
        onEventUpdate(updatedEvents);
      }
    },
    onEventUpdate: updatedEvent => {
      const updatedEvents = localEvents.map(e => e.id === updatedEvent.id ? updatedEvent : e);
      setLocalEvents(updatedEvents);
      if (onEventUpdate) {
        onEventUpdate(updatedEvents);
      }
    },
    onEventDelete: eventId => {
      const updatedEvents = localEvents.filter(e => e.id !== eventId);
      setLocalEvents(updatedEvents);
      if (onEventUpdate) {
        onEventUpdate(updatedEvents);
      }
    },
    themeType: themeType
  }));
};
/* harmony default export */ const components_Timeline_Timeline = (Timeline_Timeline_Timeline);
/******/ 	return __webpack_exports__;
/******/ })()
;
});