import { BrowserRouter,Route,Routes} from "react-router-dom"
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
            <Route path="/" element= {<Welcome/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
