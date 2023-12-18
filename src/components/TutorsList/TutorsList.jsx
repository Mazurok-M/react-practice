import PT from 'prop-types';
import TutorItem from './TutorItem/TutorItem';

export default function TutorsList({ tutors }) {
  return tutors.map(tutor => <TutorItem key={tutor.phone} {...tutor} />);
}

TutorsList.propTypes = {
  tutors: PT.array.isRequired,
};
