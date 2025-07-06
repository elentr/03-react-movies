import { createPortal } from 'react-dom';
import css from './MovieModal.module.css';
import { useEffect } from 'react';

interface MovieModalProps {
  onClose: () => void;
}

export default function MovieModal({ onClose }: MovieModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </div>
    </div>,
    document.body
  );
}
