// ResourcesHeader.js
import React from "react";
import "./Timeline.css";

const ResourcesHeader = ({ content }) => {
  return (
    <div className="resources-header">
      {/* content => string veya React node */}
      {content}
    </div>
  );
};

export default ResourcesHeader;
