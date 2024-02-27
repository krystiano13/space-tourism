import './Home.css';
function Home() {
    return (
        <div
            class="bg-home-moon bg-cover bg-no-repeat w-[100vw] h-[100vh] flex-col lg:flex-row flex
            justify-end lg:justify-around items-center lg:items-end p-8 lg:p-28 overflow-hidden">
            <section class="entry max-w-full lg:max-w-[50%] flex flex-col gap-1">
                <h3 class="font1 text-base md:text-xl lg:text-2xl text-[#D0D6F9] text-center lg:text-left">SO, YOU WANT TO TRAVEL TO</h3>
                <h1 class="font2 text-[4rem] md:text-[5rem] lg:text-[9rem] text-white text-center lg:text-left">SPACE</h1>
                <p class="font1 max-w-full lg:max-w-[27rem] text-base md:text-lg lg:text-xl text-[#D0D6F9] text-center lg:text-left">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                    hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
                    world experience!
                </p>
            </section>
            <section class="max-w-full lg:max-w-[50%] entry2 flex justify-center min-h-64 items-center">
                <a
                    href="/destination"
                    id="explore"
                    class="font2 flex justify-center items-center bg-white w-36 lg:w-64 h-36 lg:h-64 rounded-full text-2xl lg:text-4xl"
                >
                    EXPLORE
                </a>
            </section>
        </div>
    );
}

export default Home;
