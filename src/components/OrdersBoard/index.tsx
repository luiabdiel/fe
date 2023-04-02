import { IOrder } from '../../types/IOrder';
import { Board, OdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: IOrder[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OdersContainer>
      )}
    </Board>
  );
}
