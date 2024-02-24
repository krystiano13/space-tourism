import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import {Navbar} from "./components/Navbar/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/destination" component={Destination} />
            </Router>
        </>
    )
}