import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  TechnicalManuals,
  Login,
  AdminLogin,
  AccountRequestForm,
  Table,
  ViewOnlyTable,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TechnicalManuals" element={<TechnicalManuals />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/AccountRequestForm" element={<AccountRequestForm />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/ViewOnlyTable" element={<ViewOnlyTable />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
