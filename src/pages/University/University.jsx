import {
  Button,
  GeneralCardList,
  Paper,
  Section,
  TeacherForm,
  TutorsList,
  UniversityCard,
  WidgetForm,
} from 'components';

import universityData from '../../constants/universityData.json';
import teatherImg from '../../assets/images/teachers-emoji.png';
import citiesImg from '../../assets/images/cities.svg';
import addIcon from '../../assets/images/add.svg';
import Forms from 'constants/forms';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { allCities } from 'store/cities/citiesSlice';
import { addCityOperation, fetchAllCities } from 'store/cities/operations';

export default function University({
  showForm,
  isModalOpen,
  toggleModal,
  handleShowForm,
  setShowForm,
}) {
  const cities = useSelector(allCities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCities());
  }, [dispatch]);

  return (
    <>
      <Section nameTitle="Інформація про унівеситет" positionRight isColumn>
        <UniversityCard name={universityData.name} />
        <Paper>
          <span>{universityData.description}</span>
        </Paper>
      </Section>
      <Section nameTitle="Викладачі" img={teatherImg}>
        <TutorsList />
        {showForm === Forms.TEACHER_FORM && (
          <TeacherForm setShowForm={setShowForm} />
        )}

        <Button
          text={
            showForm === Forms.TEACHER_FORM
              ? 'Закрити форму'
              : 'Додати викладача'
          }
          buttonIcon={addIcon}
          btnAction={() => handleShowForm(Forms.TEACHER_FORM)}
        />
      </Section>
      <Section nameTitle="Міста" img={citiesImg}>
        <GeneralCardList
          listData={cities}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
        {showForm === Forms.CITY_FORM && (
          <WidgetForm
            title="Додавання міста"
            lable="Місто"
            onSubmit={addCityOperation}
          />
        )}

        <Button
          text={showForm === Forms.CITY_FORM ? 'Закрити форму' : 'Додати місто'}
          buttonIcon={addIcon}
          btnAction={() => handleShowForm(Forms.CITY_FORM)}
        />
      </Section>
    </>
  );
}
