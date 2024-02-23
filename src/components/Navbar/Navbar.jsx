import Logo from '../../assets/shared/logo.svg';
import { createStore } from "solid-js/store";
import {routes} from "./routes";
import {For} from "solid-js";

export function Navbar() {
    const [navRoutes, setNavRoutes] = createStore(routes);

    return (
        <nav class="fixed w-full flex items-center">
            <section class="flex w-[17%] items-center justify-center w">
                <img class="p-12" src={Logo} alt="logo" />
            </section>
            <div id="line" class="w-[33%] h-0.5 opacity-70 bg-gray-600"></div>
            <div class="w-1/2 flex justify-center items-center gap-12">
               <For each={navRoutes}>
                   {(route) => (
                       <a href={route.href}>{route.name}</a>
                   )}
               </For>
            </div>
        </nav>
    )
}