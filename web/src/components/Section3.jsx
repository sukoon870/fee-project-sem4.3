const Section3 = () => {
    return (
        <section className="w-full relative bg-white">
            <span className="w-full h-40 -scale-y-100 absolute top-0 left-0 bg-[#dde6e8] section-border-clip"></span>
            <span
                className="absolute inset-0 mr-40 pointer-events-none"
                style={{
                    backgroundImage: "url(/workout1.png)",
                    backgroundSize: "auto 90%",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                }}
            ></span>
            <div className="flex items-start md:p-40">
                <div className="w-1/2 text-black flex flex-col items-start gap-10">
                    <h1 className="font-bold text-5xl uppercase">
                        Bring your performance to higher level
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="relative font-bold text-xl px-8 py-2 ml-6 group border-black border-2 skew-x-[-35deg]">
                        <span className="absolute top-0 left-0 w-0 h-full transition-all bg-black group-hover:w-full"></span>
                        <span className="block skew-x-[35deg] text-black group-hover:text-white transition-all">
                            Know
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section3;
