import TutorItem from './TutorItem/TutorItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllTutors } from 'store/tutors/tutorsOperation';
import { allTutors } from 'store/tutors/tutorsSlice';

export default function TutorsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTutors());
  }, [dispatch]);

  const tutors = useSelector(allTutors);

  return tutors.map(tutor => <TutorItem key={tutor.phone} {...tutor} />);
}
