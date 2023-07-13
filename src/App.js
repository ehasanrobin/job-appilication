import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage";
import "./App.css";
import Home from "./pages/Home";
import Editpage from "./pages/Editpage";
function App() {
  return (
    <div className="">
      <>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/add-job" element={<AddPage></AddPage>}></Route>
          <Route path="/editJob/:id" element={<Editpage></Editpage>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
