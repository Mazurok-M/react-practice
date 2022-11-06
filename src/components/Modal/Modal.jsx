import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { Overlay, ModalStyle } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

function Modal({ toggleModale, title, children, actions }) {
  useEffect(() => {
    const hadleKeyDown = e => {
      if (e.code === 'Escape') toggleModale();
    };

    window.addEventListener('keydown', hadleKeyDown);

    return () => {
      window.removeEventListener('keydown', hadleKeyDown);
    };
  }, [toggleModale]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) toggleModale();
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
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
