import PT from 'prop-types';
import { Paper } from 'components';

import deleteIcon from '../../assets/images/delete.svg';
import universityIcon from '../../assets/images/mock-university.svg';
import editIcon from '../../assets/images/edit.svg';

import css from './UniversityCard.module.css';

export default function UniversityCard({ name, onDelete, onEdit }) {
  return (
    <Paper classes={css.container}>
      <img src={universityIcon} alt="university" />
      <span>Університет</span>
      <h3>{name}</h3>
      <div>
        <button onClick={() => onEdit()}>
          <img src={editIcon} alt="edit" />
        </button>
        <button onClick={() => onDelete()}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </Paper>
  );
}

UniversityCard.propTypes = {
  name: PT.string.isRequired,
};
