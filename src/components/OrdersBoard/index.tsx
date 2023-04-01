import { Board, OdersContainer } from './styles';

type OrdersBoardProps = {
  icon: string;
  title: string;
}

export function OrdersBoard({ icon, title }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>

        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OdersContainer>
    </Board>
  );
}
