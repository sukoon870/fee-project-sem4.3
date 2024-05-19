const Section5 = () => {
    return (
        <section className="w-full relative bg-theme4">
            <span className="w-full h-20 -scale-y-100 absolute top-0 left-0 bg-theme1 section-border-clip"></span>

            <div className="grid grid-cols-[40%_60%] place-items-center md:p-40">
                <div className="w-full flex flex-col gap-4 items-start p-10">
                    <span className="text-white font-bold text-2xl">
                        Sign up to our newsletter
                    </span>
                    <span className="text-theme2 text-3xl font-bold">
                        & get a 10% off voucher
                    </span>
                </div>
                <div className="w-full items-center flex flex-row">
                    <span className="border border-white -skew-x-3 text-white">
                        <input
                            type="text"
                            className="skew-x-3"
                            placeholder="Enter Your Email"
                        />
                    </span>
                    <button className="relative font-bold text-lg px-4 py-2 ml-8 group border-theme2 border-2 skew-x-[-35deg]">
                        <span className="absolute top-0 left-0 w-0 h-full transition-all bg-theme2 group-hover:w-full"></span>
                        <span className="block skew-x-[35deg] text-theme2 group-hover:text-white transition-all">
                            Know
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section5;
