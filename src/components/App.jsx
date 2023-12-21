import { useEffect, useState } from "react";
import {
  Main,
  Paper,
  Section,
  Sidebar,
  TutorsList,
  UniversityCard,
  Button,
  GeneralCardList,
  TeacherForm,
  WidgetForm,
} from "../components";
import Forms from "constants/forms";
import universityData from "../constants/universityData.json";
import teatherImg from "../assets/images/teachers-emoji.png";
import addIcon from "../assets/images/add.svg";
import citiesImg from "../assets/images/cities.svg";
import facultiesImg from "../assets/images/faculties-icon.svg";
import axios from "axios";
import {
  deleteCity,
  deleteDepartment,
  getCitites,
  getTutors,
  postCity,
  postTutor,
  updateCity,
  updateDepartmen,
} from "./Api/defaultApi";

const BASE_URL = "https://657b0bbe394ca9e4af137bc7.mockapi.io";
axios.defaults.baseURL = BASE_URL;

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
    getTutors().then(({ data: tutors }) => {
      localStorage.setItem("tutors", JSON.stringify(tutors));
      const getTutorsFromLocalStorage = JSON.parse(
        localStorage.getItem("tutors")
      );
      getTutorsFromLocalStorage
        ? setTutors(getTutorsFromLocalStorage)
        : setTutors([]);
    });
  }, []);

  useEffect(() => {
    getCitites().then(({ data: cities }) => {
      localStorage.setItem(
        "cities",
        JSON.stringify(
          cities.map(({ text, id }) => ({
            id,
            text,
            relation: "cities",
          }))
        )
      );
    });

    const getCitiesFromLocalStorage = JSON.parse(
      localStorage.getItem("cities")
    );

    getCitiesFromLocalStorage
      ? setCities(getCitiesFromLocalStorage)
      : setCities([]);
  }, []);

  useEffect(() => {
    axios
      .get("https://657b164a394ca9e4af13a6a0.mockapi.io/api/v1/departments")
      .then(({ data: department }) => {
        localStorage.setItem(
          "departments",
          JSON.stringify(
            department.map(({ name, id }) => ({
              id,
              text: name,
              relation: "departments",
            }))
          )
        );
      });

    const getDepartmentsFromLocalStorage = JSON.parse(
      localStorage.getItem("departments")
    );

    getDepartmentsFromLocalStorage
      ? setDepartments(getDepartmentsFromLocalStorage)
      : setDepartments([]);
  }, []);

  // state = {
  //   cities:
  //     universityData?.cities.map(city => ({
  //       text: city,
  //       relation: 'cities',
  //     })) ?? [],
  //   departments:
  //     universityData?.department.map(({ name }) => ({
  //       text: name,
  //       relation: 'departments',
  //     })) ?? [],
  //   tutors: universityData?.tutors ?? [],
  //   showForm: null,
  //   isModalOpen: {
  //     actionName: null,
  //     actionState: false,
  //   },
  // };

  const onEdit = () => console.log("edit");
  const onDelete = () => console.log("delete");

  const toggleModal = (actionName) => {
    setIsModalOpen((prev) => ({
      actionName: prev.actionName === actionName ? null : actionName,
      actionState: !prev.actionState,
    }));

    // this.setState(prev => ({
    //   isModalOpen: {
    //     actionName:
    //       prev.isModalOpen.actionName === actionName ? null : actionName,
    //     actionState: !prev.isModalOpen.actionState,
    //   },
    // }));
  };

  const handleShowForm = (formName) => {
    setShowForm((prev) => (prev === formName ? null : formName));

    // this.setState(prev => ({
    //   showForm: prev.showForm === formName ? null : formName,
    // }));
  };

  const handleDeleteCard = (id, relation) => {
    if (relation === "cities") {
      deleteCity(id).then((res) => {
        const newCitiesArray = cities.filter((el) => el.id !== res.data.id);
        setCities(newCitiesArray);
      });
    } else {
      deleteDepartment(id).then((res) => {
        const newDepartmentsArray = departments.filter(
          (el) => el.id !== res.data.id
        );
        setDepartments(newDepartmentsArray);
      });
    }
    toggleModal();
  };

  const handleEditCard = (data) => {
    console.log(data);
    const { id, relation, name } = data;
    if (relation === "cities") {
      updateCity(id, { id, text: name }).then((res) => {
        console.log(res);
        const indexCities = cities.findIndex((item) => item.id === res.data.id);
        setCities((prev) => [
          ...prev.slice(0, indexCities),
          { id: res.data.id, text: res.data.text, relation },
          ...prev.slice(indexCities + 1),
        ]);
      });
    } else {
      updateDepartmen(id, { id, name }).then((res) => {
        const indexDepartments = departments.findIndex(
          (item) => item.id === res.data.id
        );
        setDepartments((prev) => [
          ...prev.slice(0, indexDepartments),
          { id: res.data.id, text: res.data.name, relation },
          ...prev.slice(indexDepartments + 1),
        ]);
      });
    }
    toggleModal();

    // const elemIndex = this.state[relation].findIndex(item => item.text === id);

    // this.setState(prev => ({
    //   [relation]: [
    //     ...prev[relation].slice(0, elemIndex),
    //     { text: name, relation },
    //     ...prev[relation].slice(elemIndex + 1),
    //   ],
    // }));
  };

  const addTeacher = (teacher) => {
    postTutor(teacher).then(({ data }) => {
      setTutors((prev) => [...prev, data]);
    });
    // setTutors(prev => [...prev, teacher]);
    setShowForm(null);
  };

  const addCity = (cityName) => {
    postCity({ text: cityName }).then(({ data }) => {
      const newCity = {
        ...data,
        relation: "cities",
      };

      if (
        !cities.some(
          (city) => city.text.toLowerCase() === newCity.text.toLowerCase()
        )
      ) {
        setCities((prev) => [...prev, newCity]);
      } else {
        alert("Місто вже додано");
      }
    });
  };

  const addDepartment = (departmentName) => {
    axios
      .post("/departments", { name: departmentName })
      .then(({ data: { id, name } }) => {
        const newDepartment = {
          id,
          text: name,
          relation: "departments",
        };

        if (
          !departments.some(
            (department) =>
              department.text.toLowerCase() === newDepartment.text.toLowerCase()
          )
        ) {
          setDepartments((prev) => [...prev, newDepartment]);
        } else {
          alert("Департамент вже додано");
        }
      });
  };

  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Section nameTitle="Інформація про унівеситет" positionRight isColumn>
          <UniversityCard
            name={universityData.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          <Paper>
            <span>{universityData.description}</span>
          </Paper>
        </Section>

        <Section nameTitle="Викладачі" img={teatherImg}>
          <TutorsList tutors={tutors} />
          {showForm === Forms.TEACHER_FORM && (
            <TeacherForm addTeacher={addTeacher} />
          )}

          <Button
            text={
              showForm === Forms.TEACHER_FORM
                ? "Закрити форму"
                : "Додати викладача"
            }
            buttonIcon={addIcon}
            btnAction={() => handleShowForm(Forms.TEACHER_FORM)}
          />
        </Section>

        <Section nameTitle="Міста" img={citiesImg}>
          <GeneralCardList
            listData={cities}
            onDeleteCard={handleDeleteCard}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
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
              showForm === Forms.CITY_FORM ? "Закрити форму" : "Додати місто"
            }
            buttonIcon={addIcon}
            btnAction={() => handleShowForm(Forms.CITY_FORM)}
          />
        </Section>

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
                ? "Закрити форму"
                : "Додати факультет"
            }
            buttonIcon={addIcon}
            btnAction={() => handleShowForm(Forms.DEPARTMENTS_FORM)}
          />
        </Section>
      </Main>
    </div>
  );
}

export default App;
