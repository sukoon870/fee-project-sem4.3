const Section4 = () => {
    return (
        <section className="w-full relative bg-theme1">
            <span className="w-full h-40 -scale-100 absolute top-0 left-0 bg-white section-border-clip"></span>
            <span
                className="absolute inset-0 ml-40 pointer-events-none z-0"
                style={{
                    backgroundImage: "url(/workout2.png)",
                    backgroundSize: "auto 80%",
                    backgroundPosition: "left center",
                    backgroundRepeat: "no-repeat",
                }}
            ></span>
            <div className="flex items-start flex-row-reverse p-10 pt-40 md:p-40 relative z-10">
                <div className="w-full md:w-1/2  flex text-black flex-col items-center md:items-start gap-10">
                    <h1 className="font-bold text-white text-5xl uppercase text-center md:text-left">
                        Bring your performance to higher level
                    </h1>
                    <p className="text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="relative font-bold text-xl px-8 py-2 md:ml-6 group border-black border-2 skew-x-[-35deg]">
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

export default Section4;
