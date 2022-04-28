import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom"

import ApplicationFrame from "./components/Frame/ApplicationFrame";
import LygtenGallery from "./components/Galleries/LygtenGallery";

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path={"/preview"} element={<ApplicationFrame></ApplicationFrame>}></Route>
        <Route exact path={"/preview/lygten-gallery"} element={<LygtenGallery></LygtenGallery>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
