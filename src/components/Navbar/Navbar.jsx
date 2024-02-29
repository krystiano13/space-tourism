import Logo from '../../assets/shared/logo.svg';
import { createStore, } from "solid-js/store";
import { createSignal } from "solid-js";
import { routes } from "./routes";
import { For } from "solid-js";
import "./Navbar.css";

export function Navbar() {
    const [navRoutes, setNavRoutes] = createStore(routes);
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    return (
        <>
            <div
                id="mobileNavElements"
                class="transition-transform fixed w-full h-full z-40 flex lg:hidden flex-col items-center justify-center gap-6 bg-[#979797]"
                classList={{ "translate-x-[125vw]": !isMenuOpen() }}
            >
                <For each={navRoutes}>
                    {(route) => (
                        <a
                            onClick={() => setIsMenuOpen(false)}
                            href={route.href}
                            class="font1 flex items-center text-base text-white h-[5rem] border-white hover:border-b-2"
                        >
                            {route.name}
                        </a>
                    )}
                </For>
            </div>
            <nav class="fixed w-full flex justify-between lg:justify-start items-center p-12">
                <section class="flex w-[17%] items-center justify-center w">
                    <img class="md:p-12 scale-125" src={Logo} alt="logo"/>
                </section>
                <div id="line"
                     class="w-[33%] hidden lg:block translate-x-6 z-50 h-0.5 opacity-70 bg-gray-600"></div>
                <div id="navElements" class="w-1/2 bg-[#979797] h-[5rem] hidden lg:flex justify-center gap-12">
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
                <div id="hamburgerButton"
                     class="cursor-pointer rounded-full flex flex-col p-3 justify-around transition-colors items-center w-14 h-14 lg:hidden"
                     classList={{"bg-white": isMenuOpen()}}
                     onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <div id="btnLine" class="w-full h-1 bg-white transition-colors"
                         classList={{"bg-black": isMenuOpen()}}></div>
                    <div id="btnLine" class="w-full h-1 bg-white transition-colors"
                         classList={{"bg-black": isMenuOpen()}}></div>
                    <div id="btnLine" class="w-full h-1 bg-white transition-colors"
                         classList={{"bg-black": isMenuOpen()}}></div>
                </div>
            </nav>
        </>
    )
}