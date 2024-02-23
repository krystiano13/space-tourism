import { Route} from "@solidjs/router";
import Home from "./components/Home/Home";

export default function App() {
    return (
        <>
            <Route path="/" component={Home} />
        </>
    )
}