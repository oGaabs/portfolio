import Header from "./components/Header"
import AppRoutes from "./routes"
import { GlobalStyle } from "./styles/global"

import { BrowserRouter } from "react-router-dom"
import Providers from "./contexts"

export default function App() {
  return (
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Providers>
  )
}

