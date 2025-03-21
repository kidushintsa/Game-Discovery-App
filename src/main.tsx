import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import router from './routes.tsx'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
    <ReactQueryDevtools/>
  </StrictMode>
</QueryClientProvider>,
)
