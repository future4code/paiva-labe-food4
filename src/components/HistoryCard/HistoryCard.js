import React from "react";
import setOrdersHistory from "../../services/User";

export const setOrdersHistory = () => {
  const [orderHistory, setOrderHistory] = useState();
  const date = new Date(props.date);
  let options = { year: "numeric", day: "numeric", month: "long" };
  const newDate = date.toLocaleDateString("pt-PT", options);
  return (
    <div>
      <p> Você ainda não realizou seu pedido</p>) : (
      <HistoryContainer>
        <OrderName>{orderHistory.name}</OrderName>
        <p>{formatDate}</p>
        <OrderPrice>
          <p>Subtotal R$ {OrderHistory.totalPrice}</p>
        </OrderPrice>
      </HistoryContainer>
    </div>
  );
};
