import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Route path="/" component={Home} />
            </Router>
        </>
    )
}