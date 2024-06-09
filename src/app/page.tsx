"use client";
import CartProvider from "@/Context/CartContext";
import HomePage from "@/pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </CartProvider>
  );
}
