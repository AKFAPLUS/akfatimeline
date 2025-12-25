import Timeline from "./components/Timeline/Timeline";
import DailyView from "./components/Timeline/DailyView";
import ContextMenu from "./components/Timeline/ContextMenu";
import EventDetailModal from "./components/Timeline/EventDetailModal";
import EventIcon from "./components/Timeline/EventIcon";
import EventBadge from "./components/Timeline/EventBadge";
import LoadingSpinner from "./components/Timeline/LoadingSpinner";
import AutocompleteSelect from "./components/Timeline/AutocompleteSelect";

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

