import { Modal, Paper, WidgetForm } from 'components';
import dotsIcon from '../../../assets/images/dots.svg';

import { ReactComponent as EditSvg } from '../../../assets/images/edit.svg';
import { ReactComponent as RemoveSvg } from '../../../assets/images/delete.svg';
import css from './GeneralCardItem.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  deleteCityOperation,
  editCityOperation,
} from 'store/cities/operations';
import {
  deleteDepartamentOperation,
  editDepartamentOperation,
} from 'store/departaments/departamentsOperation';

function GeneralCardItem({ id, relation, isModalOpen, onToggleModal, text }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModul, setShowModul] = useState(false);

  const togleModul = () => {
    setShowModul(!showModul);
  };

  const onClickPaper = () => {
    if (relation !== 'dapartments') return;
    navigate(`/dapartments/${id}`);
  };
  return (
    <Paper onClick={onClickPaper}>
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
                  onSubmit={
                    relation === 'cities'
                      ? editCityOperation
                      : editDepartamentOperation
                  }
                  togleModul={togleModul}
                />
              }
              onTogleModal={onToggleModal}
            />
          )}
          <button
            className={css.menuModal_content}
            type="button"
            onClick={() => onToggleModal('deleteCard')}
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
                    <button
                      onClick={() => {
                        relation === 'cities'
                          ? dispatch(deleteCityOperation(id))
                          : dispatch(deleteDepartamentOperation(id));
                        togleModul();
                      }}
                    >
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
