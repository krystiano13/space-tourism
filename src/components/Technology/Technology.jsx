import "./Technology.css";
import { info } from "./info";
import { createSignal } from "solid-js";

export default function Technology() {
    const [id, setId] = createSignal(0);
    return (
        <div
            class="flex flex-col justify-end bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-0 pr-0 lg:p-24 lg:pr-0 overflow-hidden"
        >
            <h1 class="entry font1 mt-36 p-8 lg:p-0 translate-y-8 lg:translate-y-0 font-light text-xl xl:text-3xl 2xl:text-4xl text-white">
                SPACE LAUNCH 101
            </h1>
            <div class="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-4/5">
                <section class="w-full pt-4 pb-4 lg:pt-0 lg:pb-0 lg:w-[60%] flex flex-col lg:flex-row gap-12 lg:gap-24 h-3/5 entry">
                    <div class="flex flex-row lg:flex-col justify-evenly lg:justify-between items-center gap-6 h-full">
                        <button onClick={() => setId(0)} class={`${id() === 0 && "bg-white text-black"} text-white transition rounded-full w-16 lg:w-16 2xl:w-24 h-16 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-gray-400 hover:border-white`}>1</button>
                        <button onClick={() => setId(1)} class={`${id() === 1 && "bg-white text-black"} text-white transition rounded-full w-16 lg:w-16 2xl:w-24 h-16 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-gray-400 hover:border-white`}>2</button>
                        <button onClick={() => setId(2)} class={`${id() === 2 && "bg-white text-black"} text-white transition rounded-full w-16 lg:w-16 2xl:w-24 h-16 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-gray-400 hover:border-white`}>3</button>
                    </div>
                    <section class="flex flex-col items-center lg:items-start justify-between gap-5 lg:gap-6 h-full">
                        <h3 class="text-[#D0D6F9] text-center lg:text-left font1 lg:text-xl 2xl:text-2xl">THE TERMINOLOGY</h3>
                        <h2 class="text-white font2 text-center lg:text-left lg:text-5xl 2xl:text-7xl">{ info[id()].title }</h2>
                        <p id="text" class="text-[#D0D6F9] font1 text-center max-w-[90%] text-sm lg:text-left lg:text-lg 2xl:text-xl lg:max-w-[75%] 2xl:max-w-[60%]">
                            { info[id()].desc }
                        </p>
                    </section>
                </section>
                <section class="w-full mt-16 lg:mt-0 lg:w-[40%] flex justify-end entry2">
                    <img class="w-full lg:w-4/5 hidden lg:block" src={info[id()].img} alt={info[id()].alt}/>
                    <img class="w-full block lg:hidden" src={info[id()].img2} alt={info[id()].alt}/>
                </section>
            </div>
        </div>
    )
}