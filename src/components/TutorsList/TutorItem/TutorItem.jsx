import PT from 'prop-types';

import pinImg from '../../../assets/images/pin.svg';
import phoneImg from '../../../assets/images/phone.svg';
import mailImg from '../../../assets/images/mail.svg';

import { Paper } from 'components';
import { ColumItem, Container } from './TutorItem.styled';

const TutorItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) => {
  return (
    <Paper>
      <Container>
        <ColumItem>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{patronymic}</span>
        </ColumItem>
        <ColumItem>
          <span>
            <img src={phoneImg} alt="phone" />
            {phone}
          </span>
          <span>
            <img src={mailImg} alt="mail" />
            {email}
          </span>
          <span>
            <img src={pinImg} alt="pin" />
            {city}
          </span>
        </ColumItem>
        <ColumItem>
          <p>{options}</p>
        </ColumItem>
      </Container>
    </Paper>
  );
};

TutorItem.propTypes = {
  firstName: PT.string.isRequired,
  lastName: PT.string.isRequired,
  patronymic: PT.string.isRequired,
  phone: PT.string.isRequired,
  email: PT.string.isRequired,
  city: PT.string.isRequired,
  options: PT.string,
};

export default TutorItem;
