import { useState } from 'react';
import { toast } from 'react-toastify';

import { IOrder } from '../../types/IOrder';
import { OrderModal } from '../OrderModal';
import { api } from '../../utils/api';
import { Board, OdersContainer } from './styles';

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: IOrder[];
  onCancelOrder: (orderId: string) => void
}

export function OrdersBoard({ icon, title, orders, onCancelOrder }: IOrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: IOrder) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
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
