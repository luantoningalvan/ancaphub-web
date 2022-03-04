import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import { Toast } from "snake-ui";
import { removeAlert } from "../../../redux/actions/alerts";
import { useDispatch } from "react-redux";

const ToastContainer = () => {
  const messages = useSelector((state: any) => state.alerts);

  const dispatch = useDispatch();

  return (
    <Container>
      {messages.map((item: any) => (
        <Toast
          key={item.id}
          message={item}
          duration={3000}
          showCloseButton
          onClose={() => dispatch(removeAlert(item.id))}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
