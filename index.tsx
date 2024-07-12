import React from "react";
import "./styles.css";

interface CustomStyles {
  overlay?: React.CSSProperties;
  content?: React.CSSProperties;
  closeButton?: React.CSSProperties;
  closeIcon?: React.CSSProperties;
}

interface TintinDuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  closeButtonStyle?: "text" | "icon";
  customStyles?: CustomStyles;
}

export const TintinDuDialog: React.FC<TintinDuDialogProps> = ({
  isOpen,
  onClose,
  children,
  closeButtonStyle = "text",
  customStyles = {},
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={customStyles.overlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClose();
        }
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={customStyles.content}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClose();
          }
        }}
      >
        {children}
        {closeButtonStyle === "text" ? (
          <input
            type="button"
            className="modal-close"
            value="Close"
            onClick={onClose}
          />
        ) : (
          <input
            type="button"
            className="modal-close-icon"
            value="Close"
            onClick={onClose}
          >
            ✕
          </input>
        )}
      </div>
    </div>
  );
};
