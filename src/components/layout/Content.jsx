import "./Content.css";

import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../views/exemples/Home";
import NotFound from '../views/exemples/NotFound';
import UseState from "../views/exemples/UseState";
import UseEffect from "../views/exemples/UseEffect";
import UseRef from "../views/exemples/UseRef";
import UseCallback from "../views/exemples/UseCallback";
import UseMemo from "../views/exemples/UseMemo";
import UseContext from "../views/exemples/UseContext";
import UseReducer from "../views/exemples/UseReducer";
import UseCustom from "../views/exemples/UseCustom";


const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useCustom" element={<UseCustom />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
