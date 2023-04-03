import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;

  left: 0;
  top: 0;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;

  width: 40rem;

  border-radius: 8px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      border: 0;
      background: transparent;

      line-height: 0;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 0.875rem;
    font-weight: 500;

    opacity: 0.8;
  }

  .order-itens {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        color: #666;
        font-size: 0.875rem;

        display: block;

        min-width: 1.25rem;

        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;

        strong {
          display: block;
        }

        span {
          margin-top: 0.25rem;

          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.5rem;

    span {
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  .primary {
    background-color: #333;

    color: #fff;

    border: 0;
    border-radius: 48px;
    padding: 0.75rem 1.5rem;

    display: flex;
    align-itens: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    background-color: transparent;

    color: #D73025;
    font-weight: bold;

    padding: 0.875rem 1.5rem;
    border: 0;

    margin-top: 0.75rem;
  }
`;
