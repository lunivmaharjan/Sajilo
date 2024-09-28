import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import SigninForm from "./Components/SigninForm/SigninForm"
import LoginForm from "./Components/LoginForm/LoginForm"
import Welcomepage from "./Components/WelcomePage/welcomepage"
import SingleStation from "./Components/StationDetails/SingleStation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcomepage />} />
          <Route path="/signup" element={<SigninForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/station/:id" element={<SingleStation/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
