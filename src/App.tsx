import { Cabecalho } from "./Components/cabecalho"
import { Cards } from "./Components/card"

function App() {
  return (
    <>

      <Cabecalho />
      <Cards numero={6}/>
      <Cards numero={7}/>
  </>
  )
}

export default App