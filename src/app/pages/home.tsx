"use client";
import Header from "@/components/Header";
import APIClient from "@/service/ApiClient";
import { IProducts } from "@/types/Types";
import { useContext, useEffect, useState } from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CartContext } from "@/Context/CartContext";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Container, ContainerContent, CardItem, Footer } from "@/Style/styles";

const Home: React.FC = () =>{
  const [items, setItems] = useState<IProducts[]>([]);
  const { addItemCart, cartAmount } = useContext(CartContext);

  const loadApi = async () => {
    const response = await APIClient.get(
      "/products?page=1&rows=16&sortBy=id&orderBy=ASC"
    );
    return response?.data;
  };

  const query = useQuery({ queryKey: ["getProducts"], queryFn: loadApi });

  useEffect(() => {
    if (query.data) {
      setItems(query?.data?.products);
    }
  }, [query?.data]);

  function handleCartAddItem(product: IProducts) {
    addItemCart(product);
  }

  return (
    <><Header />
    <Container>
      <ContainerContent>
        {items?.map((product: IProducts) => (
          <CardItem key={product?.id}>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={product?.photo} alt={product?.name}/>
            </motion.div>

            <div className="datails">
              <div className="name">{<span>{product?.name}</span>}</div>
              <div className="tag">
                <strong>R${product?.price?.match(/\d+/)}</strong>
              </div>
            </div>
            <div className="description">
              <span>{product?.description}</span>
            </div>
            <button
              onClick={() => {
                handleCartAddItem(product);
              }}
            >
              <RiShoppingBag3Fill color="#FFF" size={15} /> COMPRAR
            </button>
          </CardItem>
        ))}
      </ContainerContent>
    </Container>
    <Footer>MKS Sistemas © Todos os direitos reservados</Footer></>
  );
}
export default Home;