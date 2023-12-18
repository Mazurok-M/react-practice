import PT from 'prop-types';
import cn from 'classnames';
import { StyledSection } from './Section.styled';

export default function Section({
  img,
  nameTitle,
  positionRight,
  isColumn,
  children,
}) {
  return (
    <StyledSection isColumn={isColumn}>
      <h2 className={cn('section-title', { 'section--right': positionRight })}>
        {img && <img src={img} alt={nameTitle} />}
        {nameTitle}
      </h2>

      <div className={cn('section-content')}>{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  img: PT.string,
  nameTitle: PT.string.isRequired,
  positionRight: PT.bool,
  children: PT.node.isRequired,
};
