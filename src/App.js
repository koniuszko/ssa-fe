import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Streamer from "./pages/Streamer";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home/>} exact/>
                    <Route path={"/streamers/:id"} element={<Streamer/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
