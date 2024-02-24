import Logo from '../../assets/shared/logo.svg';
import { createStore } from "solid-js/store";
import { routes } from "./routes";
import { For } from "solid-js";
import "./Navbar.css";

export function Navbar() {
    const [navRoutes, setNavRoutes] = createStore(routes);

    return (
        <nav class="fixed w-full flex items-center">
            <section class="flex w-[17%] items-center justify-center w">
                <img class="p-12 scale-125" src={Logo} alt="logo" />
            </section>
            <div id="line" class="w-[33%] translate-x-6 z-50 h-0.5 opacity-70 bg-gray-600"></div>
            <div id="navElements" class="w-1/2 bg-[#979797] h-[5rem] flex justify-center gap-12">
               <For each={navRoutes}>
                   {(route) => (
                       <a
                           href={route.href}
                           class="font1 flex items-center text-base text-white h-[5rem] border-white hover:border-b-2"
                       >
                           {route.name}
                       </a>
                   )}
               </For>
            </div>
        </nav>
    )
}