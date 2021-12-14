import { FC } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

export const Router: FC = ({ children }) => (
  <BrowserRouter>
    <Routes>{children}</Routes>
  </BrowserRouter>
)
