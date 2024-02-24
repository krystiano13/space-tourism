import './Destination.css';
import Moon from '../../assets/destination/image-moon.webp'
export default function Destination() {
    return (
        <div
            class="flex flex-col justify-center bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-28 overflow-hidden"
        >
            <h1 class="font1 mt-24 font-light text-4xl text-white">PICK YOUR DESTINATION</h1>
            <div class="flex justify-around items-center w-full">
                <img class="mt-12" src={Moon} alt="moon"/>
                <section class="w-[50%]">
                    123
                </section>
            </div>
        </div>
    )
}