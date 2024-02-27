import "./Technology.css";
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg';

export default function Technology() {
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
                        <button class="text-white hover:text-black hover:bg-white transition rounded-full lg:w-16 2xl:w-24 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-white">1</button>
                        <button class="text-white hover:text-black hover:bg-white transition rounded-full lg:w-16 2xl:w-24 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-white">2</button>
                        <button class="text-white hover:text-black hover:bg-white transition rounded-full lg:w-16 2xl:w-24 lg:h-16 2xl:h-24 text-3xl font2 border-[2px] border-white">3</button>
                    </div>
                    <section class="flex flex-col justify-between gap-6 h-full">
                        <h3 class="text-[#D0D6F9] font1 lg:text-xl 2xl:text-2xl">THE TERMINOLOGY</h3>
                        <h2 class="text-white font2 lg:text-5xl 2xl:text-7xl">LAUNCH VEHICLE</h2>
                        <p class="text-[#D0D6F9] font1 lg:text-lg 2xl:text-xl lg:max-w-[75%] 2xl:max-w-[60%]">A launch vehicle or carrier rocket is a rocket-propelled vehicle used
                            to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite
                            an awe-inspiring sight on the launch pad!</p>
                    </section>
                </section>
                <section class="w-[40%] flex justify-end">
                    <img class="w-4/5" src={launch} alt="space rocket"/>
                </section>
            </div>
        </div>
    )
}