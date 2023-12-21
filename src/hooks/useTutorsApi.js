import { getTutors } from "components/Api/defaultApi";
import { useEffect, useState } from "react";

export function useTutorsApi() {
  const [tutors, setTutors] = useState([]);

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
  return [tutors, setTutors];
}
