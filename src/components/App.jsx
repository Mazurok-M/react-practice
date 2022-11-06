import { useState } from 'react';

import {
  Sidebar,
  Main,
  TutorsList,
  UniversityCard,
  Section,
  Paper,
  Button,
  GeneralCardList,
  TeacherForm,
  WidgetForm,
} from '../components';

import Forms from '../constants/forms';
import universityData from '../constants/universityData.json';
import addImg from '../assets/images/add.svg';
import teachersImg from '../assets/images/teachers-emoji.png';
import citiesImg from '../assets/images/cities.svg';
import facultatesImg from '../assets/images/faculties-icon.svg';
import { useEffect } from 'react';

function App() {
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [showForm, setShowForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    actionName: null,
    actionState: false,
  });

  useEffect(() => {
    localStorage.setItem('tutors', JSON.stringify(universityData?.tutors));
    const tutorFromLocalStorage = JSON.parse(localStorage.getItem('tutors'));
    tutorFromLocalStorage ? setTutors(tutorFromLocalStorage) : setTutors([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'cities',
      JSON.stringify(
        universityData?.cities.map(city => ({
          text: city,
          relation: 'cities',
        }))
      )
    );
    const citiesFromLocalStorage = JSON.parse(localStorage.getItem('cities'));
    citiesFromLocalStorage ? setCities(citiesFromLocalStorage) : setCities([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'departments',
      JSON.stringify(
        universityData?.department.map(({ name }) => ({
          text: name,
          relation: 'departments',
        }))
      )
    );
    const departmentsFromLocalStorage = JSON.parse(
      localStorage.getItem('departments')
    );
    departmentsFromLocalStorage
      ? setDepartments(departmentsFromLocalStorage)
      : setDepartments([]);
  }, []);

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delet');

  const addTeacher = teacher => {
    setTutors(prev => [...prev, teacher]);
    setShowForm(null);
  };

  const addCity = cityName => {
    const newCity = { text: cityName, relation: 'cities' };
    if (
      !cities.some(
        city => city.text.toLowerCase() === newCity.text.toLowerCase()
      )
    ) {
      setCities(prev => [...prev, newCity]);
      setShowForm();
    } else {
      alert(`Місто ${newCity} вже є `);
    }
  };

  const addDepartment = departmentName => {
    const newDepartment = { text: departmentName, relation: 'departments' };

    if (
      !departments.some(
        department =>
          department.text.toLowerCase() === newDepartment.text.toLowerCase()
      )
    ) {
      setDepartments([...departments, newDepartment]);
      setShowForm(null);
    } else {
      alert(`Факультет ${newDepartment.text} вже є`);
    }
  };

  const handlShowForm = formName => {
    setShowForm(prev => (prev === formName ? null : formName));
  };

  const handlDeleteCard = (id, relation) => {
    if (relation === 'cities') {
      const newCitiesArray = cities.filter(el => el.text !== id);
      setCities(newCitiesArray);
    } else {
      const newDepertmensArray = departments.filter(el => el.text !== id);
      setDepartments(newDepertmensArray);
    }
    toggleModal();
  };

  const handleEditCard = data => {
    const { id, relation, name } = data;
    if (relation === 'cities') {
      const indexCitites = cities.findIndex(item => item.text === id);

      setCities(prev => [
        ...prev.slice(0, indexCitites),
        { text: name, relation },
        ...prev.slice(indexCitites + 1),
      ]);
    } else {
      const indexDepartmens = departments.findIndex(item => item.text === id);

      setDepartments(prev => [
        ...prev.slice(0, indexDepartmens),
        { text: name, relation },
        ...prev.slice(indexDepartmens + 1),
      ]);
    }
    toggleModal();
  };

  const toggleModal = name => {
    setIsModalOpen(prev => ({
      actionName: prev.actionName !== name ? name : null,
      actionState: !prev.actionState,
    }));
  };

  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Section nameTitle="Інформація про університет" positionRight isColumn>
          <UniversityCard
            name={universityData.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          <Paper>
            <span>{universityData.description}</span>
          </Paper>
        </Section>
        <Section img={teachersImg} nameTitle="Викладачі">
          <TutorsList tutors={tutors} />
          {showForm === Forms.TEACHER_FORM && (
            <TeacherForm addTeacher={addTeacher} />
          )}

          <Button
            text={
              showForm === Forms.TEACHER_FORM
                ? 'Закрити форму'
                : 'Добавити викладача'
            }
            buttonImg={addImg}
            btnAction={() => {
              handlShowForm(Forms.TEACHER_FORM);
            }}
          />
        </Section>
        <Section img={citiesImg} nameTitle="Міста">
          <GeneralCardList
            ListData={cities}
            onDeleteCard={handlDeleteCard}
            isModalOpen={isModalOpen}
            onToggleModal={toggleModal}
            onEditCard={handleEditCard}
          />
          {showForm === Forms.CITY_FORM && (
            <WidgetForm
              title="Додавання міста"
              lable="Місто"
              onSubmit={addCity}
            />
          )}

          <Button
            text={
              showForm === Forms.CITY_FORM ? 'Закрити форму' : 'Додати місто'
            }
            buttonImg={addImg}
            btnAction={() => {
              handlShowForm(Forms.CITY_FORM);
            }}
          />
        </Section>
        <Section img={facultatesImg} nameTitle="Факультети">
          <GeneralCardList
            ListData={departments}
            onDeleteCard={handlDeleteCard}
            isModalOpen={isModalOpen}
            onToggleModal={toggleModal}
            onEditCard={handleEditCard}
          />
          {showForm === Forms.DEPARTMENTS_FORM && (
            <WidgetForm
              title="Додавання факультету"
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
            buttonImg={addImg}
            btnAction={() => {
              handlShowForm(Forms.DEPARTMENTS_FORM);
            }}
          />
        </Section>
      </Main>
    </div>
  );
}

export default App;
