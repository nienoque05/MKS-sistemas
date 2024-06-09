import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #0F52BA;


`;

export const HeaderContentLogo = styled.div`
  display: flex;
  width: auto;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 40px;
  color: #FFF;
  font-weight: 600;
  width: 128px;
  height: 44px;
  margin-top: 15px;
  margin-left: 65px;
  font-family: 'Montserrat', sans-serif;
  gap: 5px; 
`;

export const ContentCar = styled.button`
width: 90px;
display: flex;
flex-direction: row;
height: 45px;
margin-top: 18px;
margin-right: 65px;
justify-content: center;
align-items: center;
gap: 5px;
border-radius: 8px 8px 8px 8px;
opacity: 0px;
background-color: #FFF;
@media (max-width: 760px){

    margin-left: 120px;
}
`;