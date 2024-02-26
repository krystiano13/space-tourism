import './Crew.css';

export default function Crew() {
    return (
        <div
            class="flex flex-col justify-center bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-24 overflow-hidden"
        >
            <h1 class="font1 mt-24 font-light text-4xl text-white">MEET YOUR CREW</h1>
            <div class="flex justify-between items-center w-full">
                <section id="description" className="w-[40%] flex flex-col gap-8 mt-12">
                    <h2 className="font2 entry2 text-white text-4xl">COMMANDER</h2>
                    <h2 className="font2 entry2 text-white text-6xl">DOUGLAS HURLEY</h2>
                    <p className="font1 entry2 font-light text-justify text-[#D0D6F9] 2xl:max-w-[90%] text-xl 2xl:text-[1.35rem]">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA
                        astronaut.
                        He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </p>
                </section>
                <img />
            </div>
        </div>
    )
}