import { useContext, useState } from "react";
import { ContentCar, HeaderContainer, HeaderContentLogo, Logo } from "./styles";
import { BsCart4 } from "react-icons/bs";
import Car from "../Car";
import { CartContext } from "@/Context/CartContext";

export default function Header (){
  const {cartAmount} = useContext(CartContext)

const [carVisible, setCarVisible] = useState(false)

  return(
   <>
    <HeaderContainer>
    <HeaderContentLogo>
      <Logo>
      <span>MKS</span>
      <span style={{
        width: '200px', 
        fontSize: '20px', 
        fontWeight: 200}}>Sistemas</span>
      </Logo>
    </HeaderContentLogo>
    <ContentCar onClick={()=>{
      setCarVisible(true)
    }}>
      <BsCart4 size={24}/>
      <strong>{cartAmount}</strong>
    </ContentCar>
    </HeaderContainer>
    <Car visible={carVisible} setVisible={setCarVisible} />
    </>
  )
}
