import { BrowserRouter,Route,Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
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
          
            <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}></Route>
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
            <Route path="/search" element={<ProtectedRoute><Search/></ProtectedRoute>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
