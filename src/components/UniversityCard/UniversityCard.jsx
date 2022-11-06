import editImg from '../../assets/images/edit.svg';
import deleteImg from '../../assets/images/delete.svg';
import universityImg from '../../assets/images/mock-university.svg';

import css from './UniversityCard.module.css';
import { Paper } from 'components';

export default function UniversityCard({ name, onDelete, onEdit }) {
  return (
    <Paper classes={css.container}>
      <img src={universityImg} alt="icon" />
      <span></span>
      <h3>{name}</h3>
      <div className="controls">
        <button type="button" onClick={() => onEdit()}>
          <img src={editImg} alt="icon" />
        </button>
        <button type="button" onClick={() => onDelete()}>
          <img src={deleteImg} alt="icon" />
        </button>
      </div>
    </Paper>
  );
}
