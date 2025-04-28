import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Menu from "./components/layout/Menu";
import Content from "./components/layout/Content";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Menu />
      <Content />
    </div>
  </BrowserRouter>
);


export default App;
