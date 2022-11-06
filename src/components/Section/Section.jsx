import React from 'react';
import cn from 'classnames';
import { StyledSection } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({
  children,
  nameTitle,
  img,
  positionRight,
  isColumn,
}) {
  return (
    <StyledSection isColumn={isColumn}>
      <h2 className={cn('section-title', { 'section--right': positionRight })}>
        {img && <img src={img} alt={nameTitle} />}
        {nameTitle}
      </h2>
      <div className={cn('section-content')}> {children}</div>
    </StyledSection>
  );
}

Section.protoTypes = {
  children: PropTypes.node.isRequired,
  nameTitle: PropTypes.string.isRequired,
  img: PropTypes.string,
  positionRight: PropTypes.bool,
};
