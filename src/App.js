import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About/About";
import Apoinment from "./Pages/Apoinment/Apoinment";
import ContactUs from "./Pages/Home/ContactUs";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Login from "./Pages/Shared/Login";
import Navbar from "./Pages/Shared/Navbar";
import PrivateRoute from "./Pages/Shared/PrivateRoute";
import SignUp from "./Pages/Shared/SignUp";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppoinmnets from "./Pages/DashBoard/MyAppoinmnets";
import MyReview from "./Pages/DashBoard/MyReview";
import MyHistory from "./Pages/DashBoard/MyHistory";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequirAdmin from "./Pages/Shared/RequirAdmin";
import AddDoctor from "./Pages/DashBoard/AddDoctor";
import ManageDoctor from "./Pages/DashBoard/ManageDoctor";
import Payment from "./Pages/DashBoard/Payment";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appoinment"
          element={
            <PrivateRoute>
              <Apoinment />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyAppoinmnets></MyAppoinmnets>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="alluser"
            element={
              <RequirAdmin>
                <AllUsers></AllUsers>
              </RequirAdmin>
            }
          ></Route>
          <Route
            path="adddoctor"
            element={
              <RequirAdmin>
                <AddDoctor></AddDoctor>
              </RequirAdmin>
            }
          ></Route>
          <Route
            path="managedoctor"
            element={
              <RequirAdmin>
                <ManageDoctor></ManageDoctor>
              </RequirAdmin>
            }
          ></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
