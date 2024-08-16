import React from 'react';
import closeIcon from "./cross-svgrepo-com.svg";

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

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const modalContentStyle: React.CSSProperties = {
  position: 'relative',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const modalCloseStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

const modalCloseIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  width: '20px',
  height: '20px',
  fill: '#333',
  cursor: 'pointer',
};

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
      style={{ ...modalOverlayStyle, ...customStyles.overlay }}
      onClick={onClose}
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
        style={{ ...modalContentStyle, ...customStyles.content }}
        onClick={(e) => e.stopPropagation()}
      >
        {closeButtonStyle === "icon" ? (
          <svg
            style={{ ...modalCloseIconStyle, ...customStyles.closeIcon }}
            onClick={onClose}
          >
            <use xlinkHref={closeIcon} />
          </svg>
        ) : (
          <button
            style={{ ...modalCloseStyle, ...customStyles.closeButton }}
            onClick={onClose}
          >
            Close
          </button>
        )}
        {children}
      </div>
    </div>
  );
};