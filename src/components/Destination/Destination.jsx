import './Destination.css';
import Moon from '../../assets/destination/image-moon.webp'

export default function Destination() {
    return (
        <div
            class="flex flex-col justify-center bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-32 overflow-hidden"
        >
            <h1 class="font1 mt-24 font-light text-4xl text-white">PICK YOUR DESTINATION</h1>
            <div class="flex justify-between items-center w-full pl-12 pr-12 xl:pl-24 xl:pr-24">
                <img class="mt-12" src={Moon} alt="moon"/>
                <section class="w-[40%] flex flex-col gap-10">
                    <div id="planets"></div>
                    <h2 class="font2 text-white text-8xl">MOON</h2>
                    <p class="font1 font-light text-justify text-[#D0D6F9] 2xl:max-w-[90%] text-xl">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
                        perspective and come back refreshed. While you’re there, take in some history by visiting the
                        Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div id="line" class="h-0.5 opacity-70 bg-gray-600 2xl:max-w-[90%] w-full"></div>
                </section>
            </div>
        </div>
    )
}