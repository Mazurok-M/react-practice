import { Button, GeneralCardList, Section, WidgetForm } from 'components';
import facultiesImg from '../../assets/images/faculties-icon.svg';
import addIcon from '../../assets/images/add.svg';
import Forms from 'constants/forms';

import { useDispatch, useSelector } from 'react-redux';
import { allDepatmentsSelector } from 'store/departaments/departamentsSlice';
import { useEffect } from 'react';
import {
  addDepartamentOperation,
  fetchAllDepartaments,
} from 'store/departaments/departamentsOperation';

export default function Department({
  // departments,

  showForm,
  handleDeleteCard,
  isModalOpen,
  toggleModal,
  handleEditCard,
  // addDepartment,
  handleShowForm,
}) {
  const dispatch = useDispatch();
  const departments = useSelector(allDepatmentsSelector);

  useEffect(() => {
    dispatch(fetchAllDepartaments());
  }, [dispatch]);

  return (
    <>
      <Section nameTitle="Факультети" img={facultiesImg}>
        <GeneralCardList
          listData={departments}
          onDeleteCard={handleDeleteCard}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          onEditCard={handleEditCard}
        />
        {showForm === Forms.DEPARTMENTS_FORM && (
          <WidgetForm
            title="Додавання філіалу"
            lable="Філіал"
            onSubmit={addDepartamentOperation}
          />
        )}
        <Button
          text={
            showForm === Forms.DEPARTMENTS_FORM
              ? 'Закрити форму'
              : 'Додати факультет'
          }
          buttonIcon={addIcon}
          btnAction={() => handleShowForm(Forms.DEPARTMENTS_FORM)}
        />
      </Section>
    </>
  );
}
