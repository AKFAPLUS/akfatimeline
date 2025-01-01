import React from 'react';
import './Timeline.css';

const TimelineResources = ({ resources }) => {
  return (
    <div className="timeline-resources">
      {resources.map((resource, index) => (
        <div key={index} className="resource-cell">
          {resource}
        </div>
      ))}
    </div>
  );
};

export default TimelineResources;
