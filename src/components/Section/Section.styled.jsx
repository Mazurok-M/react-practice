import styled from 'styled-components';

export const StyledSection = styled.section`
  .section-title {
    margin-bottom: 20px;
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }

  .section-content {
    margin-bottom: 32px;
    display: ${({ isColumn }) => (isColumn ? 'flex' : 'inherit')};
    align-items: ${({ isColumn }) => (isColumn ? 'center' : 'inherit')};
  }

  .section--right {
    justify-content: flex-end;
  }
`;
