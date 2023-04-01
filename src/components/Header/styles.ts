import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;

  display: flex;
  justify-content: center;

  height: 12.375rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;

      font-size: 2rem;

      margin-bottom: 6px;
    }

    h2 {
      color: #fff;

      font-weight: 400;
      font-size: 1rem;

      opacity: 0.9;
    }
  }
`;
