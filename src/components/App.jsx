import { Suspense, lazy, useEffect, useState } from 'react';
import { Main, Sidebar } from '../components';

import axios from 'axios';
import {
  deleteCity,
  deleteDepartment,
  postCity,
  updateCity,
  updateDepartmen,
} from './Api/defaultApi';

import { useCitiesApi } from 'hooks/useCitiesApi';
import { useDepartmentsApi } from 'hooks/useDepartmentsApi';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// const BASE_URL = 'https://657b0bbe394ca9e4af137bc7.mockapi.io';
// axios.defaults.baseURL = BASE_URL;

const University = lazy(() => import('pages/University/University'));
const Department = lazy(() => import('pages/Department/Department'));
const DepartmentDetalis = lazy(() =>
  import('pages/DepartmentDetalis/DepartmentDetalis')
);
const DepartmentDescription = lazy(() =>
  import('pages/DepartmentDescription/DepartmentDescription')
);
const DepartmentHistory = lazy(() =>
  import('pages/DepartmentHistory/DepartmentHistory')
);

function App() {
  const [showForm, setShowForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    actionName: null,
    actionState: false,
  });

  // const [tutors, setTutors] = useTutorsApi();
  const [cities, setCities] = useCitiesApi();
  const [departments, setDepartments] = useDepartmentsApi();

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const toggleModal = actionName => {
    setIsModalOpen(prev => ({
      actionName: prev.actionName === actionName ? null : actionName,
      actionState: !prev.actionState,
    }));
  };

  const handleShowForm = formName => {
    setShowForm(prev => (prev === formName ? null : formName));
  };

  const handleDeleteCard = (id, relation) => {
    if (relation === 'cities') {
      deleteCity(id).then(res => {
        const newCitiesArray = cities.filter(el => el.id !== res.data.id);
        setCities(newCitiesArray);
      });
    } else {
      deleteDepartment(id).then(res => {
        const newDepartmentsArray = departments.filter(
          el => el.id !== res.data.id
        );
        setDepartments(newDepartmentsArray);
      });
    }
    toggleModal();
  };

  const handleEditCard = data => {
    console.log(data);
    const { id, relation, name } = data;
    if (relation === 'cities') {
      updateCity(id, { id, text: name }).then(res => {
        console.log(res);
        const indexCities = cities.findIndex(item => item.id === res.data.id);
        setCities(prev => [
          ...prev.slice(0, indexCities),
          { id: res.data.id, text: res.data.text, relation },
          ...prev.slice(indexCities + 1),
        ]);
      });
    } else {
      updateDepartmen(id, { id, name }).then(res => {
        const indexDepartments = departments.findIndex(
          item => item.id === res.data.id
        );
        setDepartments(prev => [
          ...prev.slice(0, indexDepartments),
          { id: res.data.id, text: res.data.name, relation },
          ...prev.slice(indexDepartments + 1),
        ]);
      });
    }
    toggleModal();
  };

  // const addTeacher = teacher => {
  //   postTutor(teacher).then(({ data }) => {
  //     setTutors(prev => [...prev, data]);
  //   });
  //   setTutors(prev => [...prev, teacher]);
  //   setShowForm(null);
  // };

  const addCity = cityName => {
    postCity({ text: cityName }).then(({ data }) => {
      const newCity = {
        ...data,
        relation: 'cities',
      };

      if (
        !cities.some(
          city => city.text.toLowerCase() === newCity.text.toLowerCase()
        )
      ) {
        setCities(prev => [...prev, newCity]);
      } else {
        alert('Місто вже додано');
      }
    });
  };

  const addDepartment = departmentName => {
    axios
      .post('/departments', { name: departmentName })
      .then(({ data: { id, name } }) => {
        const newDepartment = {
          id,
          text: name,
          relation: 'departments',
        };

        if (
          !departments.some(
            department =>
              department.text.toLowerCase() === newDepartment.text.toLowerCase()
          )
        ) {
          setDepartments(prev => [...prev, newDepartment]);
        } else {
          alert('Департамент вже додано');
        }
      });
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('university');
    }
  }, [navigate, pathname]);

  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route
              path="university"
              element={
                <University
                  onEdit={onEdit}
                  onDelete={onDelete}
                  showForm={showForm}
                  setShowForm={setShowForm}
                  // addTeacher={addTeacher}
                  // tutors={tutors}
                  cities={cities}
                  handleDeleteCard={handleDeleteCard}
                  isModalOpen={isModalOpen}
                  toggleModal={toggleModal}
                  handleEditCard={handleEditCard}
                  addCity={addCity}
                  handleShowForm={handleShowForm}
                />
              }
            />
            <Route path="departments/*">
              <Route
                index
                element={
                  <Department
                    departments={departments}
                    showForm={showForm}
                    handleDeleteCard={handleDeleteCard}
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    handleEditCard={handleEditCard}
                    addDepartment={addDepartment}
                    handleShowForm={handleShowForm}
                  />
                }
              />
              <Route
                path={':departmentId'}
                element={<DepartmentDetalis departments={departments} />}
              >
                <Route path="description" element={<DepartmentDescription />} />
                <Route path="history" element={<DepartmentHistory />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
}

export default App;
