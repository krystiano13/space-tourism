import './Destination.css';
import {createSignal} from "solid-js";
import { planets } from "./planets";

export default function Destination() {
    const [planet, setPlanet] = createSignal(0);
    return (
        <div
            class="flex flex-col justify-center bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] pl-1 pr-1 p-4 md:p-16 lg:p-32 overflow-hidden"
        >
            <h1 class="font1 entry mt-24 font-light xl:text-3xl 2xl:text-4xl text-white text-center lg:text-left">PICK YOUR DESTINATION</h1>
            <div class="flex flex-col lg:flex-row justify-between gap-3 md:gap-6 xl:gap-0 items-center w-full pl-12 pr-12 xl:pl-24 xl:pr-24">
                <img class="mt-12 entry w-[35%] md:w-[50%] lg:w-[35%]" src={planets[planet()].img} alt="moon"/>
                <section class="w-full lg:w-[40%] flex flex-col gap-6 xl:gap-8 2xl:gap-12">
                    <div id="planets" class="flex gap-7 justify-center lg:justify-start">
                        <For each={planets}>
                            {
                                (item) => (
                                    <button onClick={() => setPlanet(item.id)}
                                            class={`font1 text-[#D0D6F9] text-lg ${item.id === planet() && "border-b-2 border-white"}`}>{item.name}
                                    </button>
                                )
                            }
                        </For>
                    </div>
                    <h2 class="font2 entry2 text-center lg:text-left text-white text-4xl xl:text-7xl 2xl:text-8xl">{planets[planet()].name}</h2>
                    <p class="font1 entry2 font-light text-center lg:text-justify text-[#D0D6F9] xl:max-w-full 2xl:max-w-[90%] text-base 2xl:text-[1.35rem]">
                        { planets[planet()].desc }
                    </p>
                    <div id="line" class="h-0.5 entry2 opacity-70 bg-gray-600 2xl:max-w-[90%] w-full"></div>
                    <section class="2xl:max-w-[90%] entry2 w-full flex justify-start gap-16">
                        <div class="flex flex-col gap-2">
                            <h4 class="text-[#D0D6F9] font-light font1 xl:text-xs 2xl:text-lg">AVG. DISTANCE</h4>
                            <p class="text-white font2 xl:text-xl 2xl:text-3xl">{ planets[planet()].distance }</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h4 class="text-[#D0D6F9] font-light font1 xl:text-xs 2xl:text-lg">EST. TRAVEL TIME</h4>
                            <p class="text-white font2 xl:text-xl 2xl:text-3xl">{planets[planet()].travel}</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}