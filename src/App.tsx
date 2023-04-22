import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header/Header"
import { Listing } from "./components/Listing/Listing"
import { ProductProvider } from "./context/ProcutContext"
import { Pagination } from "./components/Pagination/Pagination"

function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <ProductProvider>
        <GlobalStyle />
        <Header />
        <Listing />
        <Pagination />

      </ProductProvider>
    </ThemeProvider>
  )
}

export default App
