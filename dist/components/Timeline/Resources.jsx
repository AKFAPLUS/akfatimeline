import React from "react";

const Resources = ({
  groupedResources = [], // Kaynakların listesi
  collapsedGroups = {}, // Grupların açık/kapalı durumunu tutan nesne
  toggleGroupCollapse, // Grupları açma/kapama fonksiyonu
  resourceSettings = {
    showIdAsName: false, // Varsayılan: `name` varsa onu göster, yoksa `id`
    isGrouped: true, // Varsayılan: Gruplama açık
    isCollapsible: true, // Varsayılan: Gruplar açılıp kapanabilir
  },
}) => {
  const { showIdAsName, isGrouped, isCollapsible } = resourceSettings;

  return (
    <div className="timeline-resources">
      {isGrouped ? (
        // Gruplama aktif
        groupedResources.map((group, groupIndex) => (
          <div key={groupIndex} className="resource-group">
            {/* Grup Başlığı */}
            <div
              className="resource-group-header"
              onClick={() => isCollapsible && toggleGroupCollapse(group.groupName)}
            >
              {group.groupName}{" "}
              {isCollapsible && (collapsedGroups[group.groupName] ? "▲" : "▼")}
            </div>

            {/* Grup İçindeki Kaynaklar */}
            {!collapsedGroups[group.groupName] &&
              group.resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className="resource-cell">
                  {showIdAsName ? resource.id : resource.name || resource.id}
                  {/* Eğer `name` yoksa `id` kullanılır */}
                </div>
              ))}
          </div>
        ))
      ) : (
        // Gruplama yok
        groupedResources.flatMap((group) => group.resources).map((resource, resourceIndex) => (
          <div key={resourceIndex} className="resource-cell">
            {showIdAsName ? resource.id : resource.name || resource.id}
            {/* Eğer `name` yoksa `id` kullanılır */}
          </div>
        ))
      )}
    </div>
  );
};

export default Resources;

