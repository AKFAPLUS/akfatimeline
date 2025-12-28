// src/components/Timeline/EventTooltip.jsx
import React from "react";

const EventTooltip = ({ event, position = { top: 0, left: 0 }, onClose, onEdit, onDelete }) => {
  if (!event) return null;

  const { top, left } = position;

  // Rezervasyon durumuna göre renk belirleme
  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "#4caf50"; // Yeşil
      case "Pending":
        return "#ff9800"; // Turuncu
      case "Cancelled":
        return "#f44336"; // Kırmızı
      case "Completed":
        return "#2196f3"; // Mavi
      default:
        return "#9e9e9e"; // Gri
    }
  };

  const statusColor = getStatusColor(event.status);

  return (
    <div
      style={{
        position: "absolute",
        top: top - 200, // Tooltip'in biraz yukarıda görünmesi için
        left: left + 70,
        transform: "translateX(-50%)",
        backgroundColor: "#ffffff",
        color: "#333333",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        fontSize: "16px",
        zIndex: 1000,
        pointerEvents: "auto", // Tooltip'in tıklanabilir olmasını sağlar
        whiteSpace: "normal",
        maxWidth: "400px",
        width: "100%",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Kapatma Butonu */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "transparent",
            border: "none",
            color: "#aaa",
            fontSize: "24px",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          aria-label="Kapat"
          onMouseOver={(e) => (e.target.style.color = "#000")}
          onMouseOut={(e) => (e.target.style.color = "#aaa")}
        >
          &times;
        </button>
      )}

      {/* Header */}
      <div
        style={{
          backgroundColor: statusColor,
          color: "#ffffff",
          padding: "15px 20px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>{event.title}</div>
        <div style={{ fontSize: "14px" }}>Rezervasyon ID: {event.reservationId}</div>
      </div>

      {/* İçerik */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
  {/* Misafirler */}
  {Array.isArray(event.guestNames) && (
    <div>
      <strong>Misafirler:</strong> {event.guestNames.join(", ")}
    </div>
  )}

  {/* Giriş ve Çıkış Tarihleri */}
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
    <div>
      <strong>Giriş:</strong> {new Date(event.startDate).toLocaleDateString()}
    </div>
    <div>
      <strong>Çıkış:</strong> {new Date(event.endDate).toLocaleDateString()}
    </div>
  </div>

  {/* Ödeme Bilgileri */}
  {(event.totalAmount !== undefined || event.amountPaid !== undefined) && (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      {event.amountPaid !== undefined && (
        <div>
          <strong>Ödenen Miktar:</strong> ${event.amountPaid.toFixed(2)}
        </div>
      )}
      {event.totalAmount !== undefined && (
        <div>
          <strong>Toplam Borç:</strong> ${event.totalAmount.toFixed(2)}
        </div>
      )}
    </div>
  )}

  {/* Rezervasyon Durumu */}
  {event.status && (
    <div>
      <strong>Durum:</strong> {event.status}
    </div>
  )}

  {/* Rezervasyon Notu */}
  {event.note && (
    <div>
      <strong>Not:</strong> {event.note}
    </div>
  )}
</div>


      {/* Footer */}
      <div
        style={{
          padding: "15px 20px",
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        {/* Düzenle Butonu */}
        {onEdit && (
          <button
            onClick={() => onEdit(event)}
            style={{
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
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2196f3")}
          >
            {/* Düzenle İkonu */}
            <span role="img" aria-label="Düzenle">✏️</span>
            Düzenle
          </button>
        )}

        {/* Sil Butonu */}
        {onDelete && (
          <button
            onClick={() => onDelete(event.id)}
            style={{
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
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
          >
            {/* Sil İkonu */}
            <span role="img" aria-label="Sil">🗑️</span>
            Sil
          </button>
        )}
      </div>
    </div>
  );
};

export default EventTooltip;

