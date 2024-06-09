import styled from "styled-components";

export const ContainerCar = styled.div<{ visible?: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 100%;
  max-width: 486px;
  height: 100%;
  max-height: 1024px;
  margin-left: auto;
  background-color: #0f52ba;
  flex-direction: column;
`;

export const CarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  background-color: transparent;
  strong {
    font-weight: 700;
    margin-top: 15%;
    color: white;
    width: auto;
    height: 100px;
    font-size: 27px;
    margin-left: 50px;
  }
  svg {
    margin-right: 5px;
  }
`;

export const CartItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;
  margin-top: 10px;
`;

export const CartItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  height: 120px;
  margin-bottom: 10px;
  background-color: #fff;
  width: auto;
  border-radius: 8px;
  padding: 10px;
  .image-container {
    flex: 0 0 100px;
  }
  .image-container img {
    height: 100px;
    width: 100px;
    object-fit: cover;
  }

  @media (max-width: 760px) {
    .details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 0;
      span {
        max-width: none;
      }
    }
    .price {
      flex: 0 0 auto;
      padding: 0;
      margin-top: 5px;
      text-align: left;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export const QuantityContainer = styled.label`
  font-size: 14px;
  color: #333;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: 5px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: fit-content;
  height: 50px;
  max-height: 50px;
`;

export const NumericInput = styled.input`
  border: none;
  text-align: center;
  width: 20px;
  outline: none;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const LeftButton = styled(Button)`
  border-right: 1px solid #ccc;
`;

export const RightButton = styled(Button)`
  border-left: 1px solid #ccc;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  strong {
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  }
`;

export const CarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: #000;
  button {
    font-family: "Montserrat", sans-serif;
    background-color: #000;
    color: #fff;
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    height: 10%;
    border: none;
    cursor: pointer;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  top: -8px;
  right: -8px;
  cursor: pointer;
`;

export const Warning = styled.div`
display: flex;
color: #FFF;
margin: 0 auto;
margin-top: 50%;
font-size: 30px;
align-items: center;
justify-content: center;


`;