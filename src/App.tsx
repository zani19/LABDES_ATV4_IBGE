import { ProviderIBGE } from "./contexts/ContextoIBGE"
import "./index.css"
import Main from "./pages/Main"

function App() {

  return (
    <ProviderIBGE>
      <Main/>
    </ProviderIBGE>
  )
}

export default App
