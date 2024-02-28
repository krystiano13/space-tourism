import './Crew.css';
import {members} from "./members";
import {createSignal} from "solid-js";

export default function Crew() {
    const [member, setMember] = createSignal(0);
    return (
        <div
            class="flex flex-col justify-end bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-12 pb-0 lg:p-24 lg:pb-0 overflow-hidden"
        >
            <h1 class="entry2 font1 mt-12 md:mt-36 font-light xl:text-3xl 2xl:text-4xl text-white">MEET YOUR CREW</h1>
            <div class="flex gap-3 lg:gap-0 flex-col-reverse lg:flex-row justify-evenly lg:justify-between items-center w-full h-4/5">
                <section id="description" class="w-full lg:w-[40%] flex flex-col gap-4 lg:gap-8 mt-0 lg:mt-12 lg:pb-32">
                    <h2 class="font2 entry2 text-gray-500 xl:text-2xl 2xl:text-3xl">{members[member()].role}</h2>
                    <h2 class="font2 entry2 text-white xl:text-5xl 2xl:text-6xl">{members[member()].name}</h2>
                    <p class="font1 entry2 font-light text-justify text-[#D0D6F9] text-base 2xl:max-w-[80%] 2xl:text-[1.35rem] xl:text-xl">
                        {members[member()].desc}
                    </p>
                    <div id="dots" class="flex gap-4 mt-3 md:mt-16 entry2 translate-y-[-0.5rem] md:translate-y-[0rem]">
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
                <section class="lg:h-full w-[60%] md:w-[45%] border-b-[1px] border-opacity-35 lg:border-opacity-0 border-white lg:w-auto flex entry items-end">
                    <img class="h-full" src={members[member()].img} alt={`${members[member()].name} Photo`}/>
                </section>
            </div>
        </div>
    )
}