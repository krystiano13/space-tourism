import './Crew.css';
import douglas from '../../assets/crew/image-douglas-hurley.webp';
import {createSignal} from "solid-js";

export default function Crew() {
    const [member, setMember] = createSignal(0);
    return (
        <div
            class="flex flex-col justify-center bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-24 pb-0 overflow-hidden"
        >
            <h1 class="font1 mt-24 font-light text-4xl text-white">MEET YOUR CREW</h1>
            <div class="flex justify-between items-center w-full">
                <section id="description" class="w-[40%] flex flex-col gap-8 mt-12 pb-24">
                    <h2 class="font2 entry2 text-white text-4xl">COMMANDER</h2>
                    <h2 class="font2 entry2 text-white text-6xl">DOUGLAS HURLEY</h2>
                    <p class="font1 entry2 font-light text-justify text-[#D0D6F9] 2xl:max-w-[90%] text-xl 2xl:text-[1.35rem]">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA
                        astronaut.
                        He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </p>
                    <div id="dots" class="flex gap-4 mt-16 entry2">
                        <button
                            onClick={() => setMember(0)}
                            class={`bg-gray-${member() === 0 ? "500" : "600"} rounded-full opacity-60 w-6 h-6`}>
                        </button>
                        <button
                            onClick={() => setMember(1)}
                            class={`bg-gray-${member() === 1 ? "500" : "600"} rounded-full opacity-60 w-6 h-6`}>
                        </button>
                        <button
                            onClick={() => setMember(2)}
                            class={`bg-gray-${member() === 2 ? "500" : "600"} rounded-full opacity-60 w-6 h-6`}>
                        </button>
                        <button
                            onClick={() => setMember(3)}
                            class={`bg-gray-${member() === 3 ? "500" : "600"} rounded-full opacity-60 w-6 h-6`}>
                        </button>
                    </div>
                </section>
                <section class="h-full flex items-end entry">
                    <img class="h-full" src={douglas} alt="Douglas Hurley Photo"/>
                </section>
            </div>
        </div>
    )
}