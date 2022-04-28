import './App.css';

import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom"

import ApplicationFrame from "./components/Frame/ApplicationFrame";
import LygtenGallery from "./components/Galleries/LygtenGallery";

function App() {
  return (
  <div>
      <HashRouter>
        <Routes>
          <Route exact path={"/preview"} element={<ApplicationFrame></ApplicationFrame>}></Route>
          <Route exact path={"/preview/lygten-gallery"} element={<LygtenGallery></LygtenGallery>}></Route>
        </Routes>
      </HashRouter>
  </div>
  );
}

export default App;
