import Navbar from "./Navbar";
import Header from "./Header";
import Shows from "./Shows";
import Press from "./Press";
import Contact from "./Contact";
import VideoGallery from "../Galleries/VideoGallery";

const ApplicationFrame = () => {
    return (<>
            <Header></Header>
            <Contact></Contact>
            <div className={"main-container"}>
                <Press></Press>

                <Shows></Shows>
            </div>
            {/*<Navbar></Navbar>*/}

            </>
    )
}

export default ApplicationFrame