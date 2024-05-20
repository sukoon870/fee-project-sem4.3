const Section5 = () => {
    return (
        <section className="w-full relative bg-theme4 ">
            <span className="w-full h-40 -scale-y-100 absolute top-0 left-0 bg-theme1 section-border-clip"></span>

            <div className="w-full grid grid-rows-2 place-items-center md:grid-cols-[45%_55%] md:px-24 pt-40">
                <div className="w-full flex flex-col gap-3 items-center md:items-start px-10 py-4 md:p-10 place-self-end">
                    <span className="text-white font-bold text-2xl">
                        Sign up to our newsletter
                    </span>
                    <span className="text-theme2 text-3xl font-bold">
                        & get a 10% off voucher
                    </span>
                </div>
                <div className="md:w-full items-center justify-start flex flex-row">
                    <label className="border cursor-text border-white skew-x-[-35deg] text-white overflow-hidden px-4">
                        <input
                            type="text"
                            className="skew-x-[35deg] bg-transparent border-none text-white w-80 text-lg p-2 focus-within:outline-none"
                            placeholder="Enter Your Email"
                        />
                    </label>
                    <button className="relative font-bold text-lg px-4 py-2 group border-theme2 border-2 skew-x-[-35deg]">
                        <span className="absolute top-0 left-0 w-0 h-full transition-all bg-theme2 group-hover:w-full"></span>
                        <span className="block skew-x-[35deg] text-theme2 group-hover:text-black transition-all">
                            Submit
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section5;
