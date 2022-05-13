import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Home/Appoinment";
import ContactUs from "./Pages/Home/ContactUs";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Footer from "./Pages/Shared/Footer";
import Login from "./Pages/Shared/Login";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appoinment' element={<Appoinment />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
