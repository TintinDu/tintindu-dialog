import React from 'react';
import './styles.css';

interface TintinDuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  closeButtonStyle?: 'text' | 'icon';
  customStyles?: React.CSSProperties;
}

export const TintinDuDialog: React.FC<TintinDuDialogProps> = ({
  isOpen,
  onClose,
  children,
  closeButtonStyle = 'text',
  customStyles = {},
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={customStyles.overlay as React.CSSProperties}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={customStyles.content as React.CSSProperties}>
        {children}
        {closeButtonStyle === 'text' ? (
          <button className="modal-close" onClick={onClose}>Close</button>
        ) : (
          <button className="modal-close-icon" onClick={onClose}>✕</button> // Exemple d'icône, peut être remplacé par une image ou un SVG
        )}
      </div>
    </div>
  );
}