import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import MoreInfo from "./pages/MoreInfo";
import UpdateDetails from "./pages/UpdateDetails";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/more-info/:id" element={<MoreInfo />} />
        <Route path="/update-details/:id" element={<UpdateDetails/>}/>
      </Routes>
    </div>
  );
}

export default App
