import { ICar } from "@/types/Types";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #efefef;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 16px; 
  max-width: 938px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    justify-content: center; 
    margin-top: 0 auto;
  }
`;
export const CardItem = styled.div`
  width: 100%;
  max-width: 217.56px; 
  height: 100%; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  background-color: #ffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 111px;
    height: 138px;
    border-radius: 4px;
    margin-bottom: 2px;
  }


  .datails {
    font-size: 16px;
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
    flex-direction: row;
    font-family: 'Montserrat', sans-serif;

  }
  .name {
    margin-left: 14px;
    font-size: 16px;
    font-weight: 400;
    width: 100px;
    color: #2c2c2c;
  }
  .tag {
    width: 64px;
    height: 26px;
    display: flex;
    top: 173px;
    margin-left: auto;
    border-radius: 5px 5px 5px 5px;
    opacity: 0px;
    background-color: #373737;
  }
  .tag strong {
    color: white;
    margin-top: 5px;
    font-size: 15px;
    padding: 1px;
    font-weight: 700;
    line-height: 15px;
  }

  .description {
    font-size: 10px;
    margin-left: 28px;
    font-weight: 300;
    line-height: 12px;
    margin-bottom: 5px;
  }
  button {
    cursor: pointer;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    width: 100%;
    height: 30px;
    gap: 8px;
    color: #fff;
    border-radius: 0px 0px 8px 8px;
    opacity: 0px;
    background-color: #0f52ba;
  }
`;
export const ContainerCar = styled.div<ICar>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: absolute; 
  top: 0;
  right: 0;
  flex-direction: column;
  width: 80%; 
  max-width: 560px; 
  height: 100%; 
  max-height: 100%; 
  overflow: hidden;

  background-color: #0F52BA;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  z-index: 2; 


  .total {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 10px;
  }
  .total strong {
    font-weight: 700;
    color: white;
    font-size: 20px; 
  }

  @media (max-width: 768px) {
    width: 90%; 
    max-width: 90%; 
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: #EEEEEE;
  font-size: 12px;
  
  ;
`;