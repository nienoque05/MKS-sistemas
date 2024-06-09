import { ICar, IProducts } from "@/types/Types";
import { IoMdCloseCircle } from "react-icons/io";
import {
  CarFooter,
  CarHeader,
  CartItem,
  CartItemsContainer,
  CloseButton,
  InputContainer,
  LeftButton,
  NumericInput,
  QuantityContainer,
  RightButton,
  TotalContainer,
  Warning,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/Context/CartContext";
import { FiX } from "react-icons/fi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { ContainerCar } from "@/Style/styles";

export default function Car({ visible,  setVisible }: ICar) {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
 
  return (
    <ContainerCar visible={visible}>
      <CarHeader>
        <strong>Carrinho de compras</strong>
        <IoMdCloseCircle
          size={30}
          onClick={() => {
            if (setVisible) {
              setVisible(false);
            }
          }}
        />
      </CarHeader>
            {cart?.length === 0 ? <Warning>
              <MdOutlineRemoveShoppingCart/> Seu carrinho esta vazio...
            </Warning> : (
              <>
              <CartItemsContainer>
        {cart.map((item) => (
          <CartItem key={item.id}>
            
             <CloseButton onClick={() => removeItemCart(item)}>
              <FiX color="#FFF" size={12} style={{marginLeft: '5px'}}/>
             </CloseButton>
             
             <div className="image-container">
             <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src={item?.photo} />
              </motion.div>
            </div>
            <div className="details">
              <span>{item?.name}</span>
              
            </div>
            <QuantityContainer>
                Qtd:
                <InputContainer>
                  <LeftButton onClick={() => removeItemCart(item)}>
                    -
                  </LeftButton>
                  <NumericInput type="text" value={item?.amount} readOnly />
                  <RightButton onClick={()=>{addItemCart({...item as IProducts})}}>+</RightButton>
                </InputContainer>
              </QuantityContainer>
            <strong className="price">R${item?.price}</strong>
          
          </CartItem>
        ))}
      </CartItemsContainer>
      <TotalContainer>
        <strong>Total:</strong>
        <strong>{total}</strong>
      </TotalContainer>
      <CarFooter>
        <button>Finalizar compra</button>
      </CarFooter>
              </>
            )}

    </ContainerCar>
  );
}
