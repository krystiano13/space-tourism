import "./Technology.css";
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg';

export default function Technology() {
    return (
        <div
            class="flex flex-col justify-end bg-dest-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] p-24 pb-0 overflow-hidden"
        >
            <h1 class="entry2 font1 mt-36 font-light xl:text-3xl 2xl:text-4xl text-white">
                SPACE LAUNCH 101
            </h1>
            <div class="flex justify-between items-center w-full h-4/5">
                <section>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <section>
                        <h3>THE TERMINOLOGY</h3>
                        <h2>LAUNCH VEHICLE</h2>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </section>
                </section>
                <section>
                    <img src={launch} alt="space rocket" />
                </section>
            </div>
        </div>
    )
}