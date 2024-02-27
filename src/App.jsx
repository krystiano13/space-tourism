import { Route, Router } from "@solidjs/router";
import { Navbar } from "./components/Navbar/Navbar";

// Views
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from './components/Crew/Crew';
import Technology from "./components/Technology/Technology";

export default function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/destination" component={Destination} />
                <Route path="/crew" component={Crew} />
                <Route path="/technology" component={Technology} />
            </Router>
        </>
    )
}