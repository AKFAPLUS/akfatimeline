import Timeline from "./components/Timeline/Timeline.jsx";
import DailyView from "./components/Timeline/DailyView.jsx";
import ContextMenu from "./components/Timeline/ContextMenu.jsx";
import EventDetailModal from "./components/Timeline/EventDetailModal.jsx";
import EventIcon from "./components/Timeline/EventIcon.jsx";
import EventBadge from "./components/Timeline/EventBadge.jsx";
import LoadingSpinner from "./components/Timeline/LoadingSpinner.jsx";
import AutocompleteSelect from "./components/Timeline/AutocompleteSelect.jsx";

// Ana Timeline component'i default export
export default Timeline;

// Named exports - İsteğe bağlı kullanım için
export {
  DailyView,
  ContextMenu,
  EventDetailModal,
  EventIcon,
  EventBadge,
  LoadingSpinner,
  AutocompleteSelect,
};

// CSS dosyası package.json'da exports altında tanımlı
// Kullanım: import 'akfatimeline/components/Timeline/Timeline.css'
import "./components/Timeline/Timeline.css";

