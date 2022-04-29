import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom"

import ApplicationFrame from "./components/Frame/ApplicationFrame";
import LygtenGallery from "./components/Galleries/LygtenGallery";

function App() {
    console.log(process.env.PUBLIC_URL)
  return (
  <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path={"/"} element={<ApplicationFrame></ApplicationFrame>}></Route>
          <Route exact path={"/lygten-gallery"} element={<LygtenGallery></LygtenGallery>}></Route>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
