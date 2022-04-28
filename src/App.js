import './App.css';

import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom"

import ApplicationFrame from "./components/Frame/ApplicationFrame";
import LygtenGallery from "./components/Galleries/LygtenGallery";

function App() {
  return (
  <div>
      <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route exact path={"/"} element={<ApplicationFrame></ApplicationFrame>}></Route>
          <Route exact path={"/lygten-gallery"} element={<LygtenGallery></LygtenGallery>}></Route>
        </Routes>
      </HashRouter>
  </div>
  );
}

export default App;
