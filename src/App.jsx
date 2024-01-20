import { BrowserRouter,Route,Routes} from "react-router-dom"
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import Register from "./pages/Register"
import Login from "./pages/Login"
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element= {<Welcome/>}></Route>
            
          </Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
