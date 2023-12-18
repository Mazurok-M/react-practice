import styled from 'styled-components';

export const StyledSection = styled.section`
  .section-title {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }

  .section-content {
    margin-bottom: 32px;

    display: ${({ isColumn }) => (isColumn ? 'flex' : 'block')};
    align-items: ${({ isColumn }) => (isColumn ? 'center' : 'inherit')};
  }

  .section--right {
    justify-content: flex-end;
  }
`;
