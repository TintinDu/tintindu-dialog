import React from 'react';
import './styles.css';

interface TintinDuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const TintinDuDialog: React.FC<TintinDuDialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}