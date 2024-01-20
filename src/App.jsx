import { BrowserRouter,Route,Routes} from "react-router-dom"
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element= {<Welcome/>}></Route>
            <Route path="/hey" ></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
