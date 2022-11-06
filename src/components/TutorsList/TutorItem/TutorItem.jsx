import { Paper } from 'components';
import PropTypes from 'prop-types';
import phoneImg from '../../../assets/images/phone.svg';
import mailImg from '../../../assets/images/mail.svg';
import pinImg from '../../../assets/images/pin.svg';

import { Container, ColItem } from './TutorItem.styled';

export default function TutorItem({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) {
  return (
    <Paper>
      <Container>
        <ColItem>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{patronymic}</span>
        </ColItem>
        <ColItem>
          <span>
            <img src={phoneImg} alt="Icon" />
            {phone}
          </span>
          <span>
            <img src={mailImg} alt="Icon" />
            {email}
          </span>
          <span>
            <img src={pinImg} alt="Icon" />
            {city}
          </span>
        </ColItem>
        <ColItem>
          <p>{options}</p>
        </ColItem>
      </Container>
    </Paper>
  );
}

TutorItem.protoTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string,
};
