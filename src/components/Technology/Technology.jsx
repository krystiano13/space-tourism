import "./Technology.css";
import { info } from "./info";
import { createSignal } from "solid-js";

export default function Technology() {
    const [id, setId] = createSignal(0);
    return (
        <div
            class="flex flex-col justify-end bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-24 pr-0 overflow-hidden"
        >
            <h1 class="entry2 font1 mt-36 font-light xl:text-3xl 2xl:text-4xl text-white">
                SPACE LAUNCH 101
            </h1>
            <div class="flex justify-between items-center w-full h-4/5">
                <section class="w-[60%] flex gap-24 h-3/5">
                    <div class="flex flex-col justify-between items-center gap-6 h-full">
                        <button onClick={() => setId(0)} class={`${id() === 0 && "bg-white text-black"} text-white transition rounded-full lg:w-16 2xl:w-24 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-gray-400 hover:border-white`}>1</button>
                        <button onClick={() => setId(1)} class={`${id() === 1 && "bg-white text-black"} text-white transition rounded-full lg:w-16 2xl:w-24 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-gray-400 hover:border-white`}>2</button>
                        <button onClick={() => setId(2)} class={`${id() === 2 && "bg-white text-black"} text-white transition rounded-full lg:w-16 2xl:w-24 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-gray-400 hover:border-white`}>3</button>
                    </div>
                    <section class="flex flex-col justify-between gap-6 h-full">
                        <h3 class="text-[#D0D6F9] font1 lg:text-xl 2xl:text-2xl">THE TERMINOLOGY</h3>
                        <h2 class="text-white font2 lg:text-5xl 2xl:text-7xl">{ info[id()].title }</h2>
                        <p class="text-[#D0D6F9] font1 lg:text-lg 2xl:text-xl lg:max-w-[75%] 2xl:max-w-[60%]">
                            { info[id()].desc }
                        </p>
                    </section>
                </section>
                <section class="w-[40%] flex justify-end">
                    <img class="w-4/5" src={info[id()].img} alt={info[id()].alt}/>
                </section>
            </div>
        </div>
    )
}