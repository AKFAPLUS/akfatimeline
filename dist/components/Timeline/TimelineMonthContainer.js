import React from "react";
import TimelineHeader from "./TimelineHeader.jsx";
import TimelineContent from "./TimelineContent.jsx";

const TimelineMonthContainer = ({
  dates,
  month,
  groupedResources,
  collapsedGroups,
  toggleGroupCollapse,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Timeline Header */}
      <TimelineHeader dates={dates} monthHeaders={[{ month, startIndex: 0, endIndex: dates.length - 1 }]} />

      {/* Timeline Content */}
      <div style={{ display: "flex" }}>
        <TimelineContent
          groupedResources={groupedResources}
          dates={dates}
          collapsedGroups={collapsedGroups}
        />
      </div>
    </div>
  );
};

export default TimelineMonthContainer;
