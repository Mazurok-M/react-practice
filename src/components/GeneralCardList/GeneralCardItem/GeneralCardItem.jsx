import React from 'react';
import { Modal, Paper, WidgetForm } from 'components';
import dotsImg from '../../../assets/images/dots.svg';

import s from './GeneralCardItem.module.css';
import { ReactComponent as EditSvg } from '../../../assets/images/edit.svg';
import { ReactComponent as RemoveSvg } from '../../../assets/images/delete.svg';
import { useState } from 'react';

function GeneralCardItem({
  id,
  relation,
  onDeleteCard,
  isModalOpen,
  onToggleModal,
  text,
  onEditCard,
}) {
  const [showModule, setShowModule] = useState(false);

  const toggleModale = () => {
    setShowModule(!showModule);
  };

  return (
    <Paper>
      <span>{text}</span>
      <button onClick={toggleModale}>
        <img src={dotsImg} alt="dots Menu"></img>
      </button>
      {showModule && (
        <div className={s.menuModal}>
          <button
            className={s.menuModal_content}
            type="button"
            onClick={() => onToggleModal('editCard')}
          >
            <EditSvg className={s.menuModal_icon} />
            Редагувати
          </button>
          {isModalOpen.actionState && isModalOpen.actionName === 'editCard' && (
            <Modal
              children={
                <WidgetForm
                  idItem={id}
                  relation={relation}
                  title={
                    relation === 'cities'
                      ? 'Редагувати інформацію про місто'
                      : 'Редагувати інформацію про факультет'
                  }
                  onSubmit={onEditCard}
                />
              }
              toggleModale={onToggleModal}
            ></Modal>
          )}
          <button
            className={s.menuModal_content}
            type="button"
            onClick={() => onToggleModal('deleteCard')}
          >
            <RemoveSvg className={s.menuModal_icon} />
            Видалити
          </button>
          {isModalOpen.actionState && isModalOpen.actionName === 'deleteCard' && (
            <Modal
              title="Видалення факультету"
              children="Будуть видалені всі матеріали та інформація про факультет"
              actions={
                <>
                  <button onClick={() => onToggleModal()}>Ні</button>
                  <button onClick={() => onDeleteCard(id, relation)}>
                    Так
                  </button>
                </>
              }
              toggleModale={onToggleModal}
            ></Modal>
          )}
        </div>
      )}
    </Paper>
  );
}

export default GeneralCardItem;
