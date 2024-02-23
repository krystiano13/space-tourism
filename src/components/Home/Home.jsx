import './Home.css';
function Home() {
    return (
        <div
            class="bg-home-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] flex
            justify-around items-end p-28 overflow-hidden">
            <section class="max-w-[50%] flex flex-col gap-1">
                <h3 class="font1 text-2xl text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h3>
                <h1 class="font2 text-[9rem] text-white">SPACE</h1>
                <p class="font1 max-w-[27rem] text-xl text-[#D0D6F9]">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                    hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
                    world experience!
                </p>
            </section>
            <section class="max-w-[50%] flex justify-center min-h-64 items-center">
                <button id="explore" class="font2 bg-white w-64 h-64 rounded-full text-4xl">
                    EXPLORE
                </button>
            </section>
        </div>
    );
}

export default Home;
