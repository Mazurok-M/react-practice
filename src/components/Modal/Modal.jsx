import { useCallback, useEffect } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal({ title, actions, children, onTogleModal }) {
  const handleKeyDown = useCallback(
    function (e) {
      if (e.code === 'Escape') {
        onTogleModal();
      }
    },
    [onTogleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const habdleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onTogleModal();
    }
  };

  return createPortal(
    <Overlay onClick={habdleBackDropClick}>
      <ModalStyle>
        <h2>{title}</h2>
        <div>{children}</div>
        {actions && <div>{actions}</div>}
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
}

export default Modal;
