// import { getTutors } from "components/Api/defaultApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTutorsAction } from "store/tutors/actions";

export function useTutorsApi() {
  const [tutors, setTutors] = useState([]);
  const tutorsRedux = useSelector((state) => state.tutors);
  console.log(tutorsRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTutorsAction());
    // getTutors().then(({ data: tutors }) => {
    // localStorage.setItem("tutors", JSON.stringify(tutors));
    // const getTutorsFromLocalStorage = JSON.parse(
    //   localStorage.getItem("tutors")
    // );
    // getTutorsFromLocalStorage
    //   ? setTutors(getTutorsFromLocalStorage)
    //   : setTutors([]);
    // });
  }, [dispatch]);
  return [tutors, setTutors];
}
