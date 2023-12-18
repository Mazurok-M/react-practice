import { Modal, Paper, WidgetForm } from 'components';
import dotsIcon from '../../../assets/images/dots.svg';

import { ReactComponent as EditSvg } from '../../../assets/images/edit.svg';
import { ReactComponent as RemoveSvg } from '../../../assets/images/delete.svg';
import css from './GeneralCardItem.module.css';
import React, { useState } from 'react';

function GeneralCardItem({
  id,
  relation,
  onDeleteCard,
  isModalOpen,
  onToggleModal,
  onEditCard,
  text,
}) {
  const [showModul, setShowModul] = useState(false);

  const togleModul = () => {
    setShowModul(!showModul);
  };

  return (
    <Paper>
      <span>{text}</span>
      <button onClick={togleModul}>
        <img src={dotsIcon} alt="Dots menu" />
      </button>

      {showModul && (
        <div className={css.menuModal}>
          <button
            className={css.menuModal_content}
            type="button"
            onClick={() => onToggleModal('editCard')}
          >
            <EditSvg className={css.menuModal_icon} />
            Редагувати
          </button>
          {isModalOpen.actionState && isModalOpen.actionName === 'editCard' && (
            <Modal
              children={
                <WidgetForm
                  idItem={id}
                  textItem={text}
                  relation={relation}
                  title={
                    relation === 'cities'
                      ? 'Редагувати інформацію про Місто'
                      : 'Редагувати інформацію про Факультет'
                  }
                  onSubmit={onEditCard}
                />
              }
              onTogleModal={onToggleModal}
            />
          )}
          <button
            className={css.menuModal_content}
            type="button"
            onClick={() => onToggleModal('deleteCard')}
            // onClick={() => onDeleteCard(id, relation)}
          >
            <RemoveSvg className={css.menuModal_icon} />
            Видалити
          </button>
          {isModalOpen.actionState &&
            isModalOpen.actionName === 'deleteCard' && (
              <Modal
                title={'Видалення факудьтету'}
                children="Буде видалено всі матеріали та інформація про факультети"
                onTogleModal={onToggleModal}
                actions={
                  <>
                    <button onClick={() => onToggleModal()}>Ні</button>
                    <button onClick={() => onDeleteCard(id, relation)}>
                      Так
                    </button>
                  </>
                }
              />
            )}
        </div>
      )}
    </Paper>
  );
}

export default GeneralCardItem;
