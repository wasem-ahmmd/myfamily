"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {useState} from "react";


interface childProps{
    children:React.ReactNode
}
const QueryProvider = ({children} : childProps) => {
  const [client] = useState(new QueryClient())
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}

export default QueryProvider