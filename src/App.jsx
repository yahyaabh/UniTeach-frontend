import { BrowserRouter,Route,Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Users from "./pages/Users";
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ToastContainer/>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element= {<Welcome/>}></Route>
            
          </Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
