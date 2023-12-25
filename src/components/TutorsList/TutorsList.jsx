import TutorItem from './TutorItem/TutorItem';
import { useSelector } from 'react-redux';

export default function TutorsList() {
  const tutors = useSelector(state => state.tutors);
  return tutors.map(tutor => <TutorItem key={tutor.phone} {...tutor} />);
}
