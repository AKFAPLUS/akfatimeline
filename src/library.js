import Timeline from "./components/Timeline/Timeline.jsx";
import DailyView from "./components/Timeline/DailyView.jsx";
import ContextMenu from "./components/Timeline/ContextMenu.jsx";
import EventDetailModal from "./components/Timeline/EventDetailModal.jsx";
import EventIcon from "./components/Timeline/EventIcon.jsx";
import EventBadge from "./components/Timeline/EventBadge.jsx";
import LoadingSpinner from "./components/Timeline/LoadingSpinner.jsx";
import AutocompleteSelect from "./components/Timeline/AutocompleteSelect.jsx";

// CSS dosyası package.json'da exports altında tanımlı
// Kullanım: import 'akfatimeline/components/Timeline/Timeline.css'
import "./components/Timeline/Timeline.css";

// Ana Timeline component'i default export (import akfatimeline from 'akfatimeline' için)
export default Timeline;

// Named export (import { akfatimeline } from 'akfatimeline' için)
export { Timeline as akfatimeline };

// Diğer named exports - İsteğe bağlı kullanım için
export {
  DailyView,
  ContextMenu,
  EventDetailModal,
  EventIcon,
  EventBadge,
  LoadingSpinner,
  AutocompleteSelect,
};

