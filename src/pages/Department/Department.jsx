import { Button, GeneralCardList, Section, WidgetForm } from 'components';
import facultiesImg from '../../assets/images/faculties-icon.svg';
import addIcon from '../../assets/images/add.svg';
import Forms from 'constants/forms';

export default function Department({
  departments,

  showForm,
  handleDeleteCard,
  isModalOpen,
  toggleModal,
  handleEditCard,
  addDepartment,
  handleShowForm,
}) {
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
            onSubmit={addDepartment}
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
