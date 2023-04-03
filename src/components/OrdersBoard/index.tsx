import { useState } from 'react';
import { IOrder } from '../../types/IOrder';
import { OrderModal } from '../OrderModal';
import { Board, OdersContainer } from './styles';

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: IOrder[];
}

export function OrdersBoard({ icon, title, orders }: IOrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  function handleOpenModal(order: IOrder) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OdersContainer>
      )}
    </Board>
  );
}
