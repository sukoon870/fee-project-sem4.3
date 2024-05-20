import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";

const AUTO_SLIDE_INTERVAL = 4000;

const cardData = [
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "/card1.png",
        alt: true,
    },
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "/card2.png",
        alt: false,
    },
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "/card3.png",
        alt: false,
    },
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "/card4.png",
        alt: true,
    },
];

const carouselData = [
    {
        title: "Boost Your Power Now",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/carousel1.png",
        link: "#",
    },
    {
        title: "Boost ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/card3.png",
        link: "#",
    },
    {
        title: "Boost Your ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/carousel3.png",
        link: "#",
    },
    {
        title: "Boost Your Power",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/card4.png",
        link: "#",
    },
];

const Card = ({ title, desc, img, alt = false }) => {
    return (
        <div
            className={`flex items-start w-[32rem] cursor-default ${
                alt ? "card1-alt" : "card1"
            }`}
            style={{
                "--url": `url(${img})`,
            }}
        >
            <div className="flex flex-col w-1/2 gap-4 items-start p-10">
                <span
                    className={`text-3xl font-bold uppercase ${
                        alt ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </span>
                <span
                    className={`${alt ? "text-white" : "text-black"} leading-5`}
                >
                    {desc}
                </span>
                {/* <button
                    className={`font-bold text-lg group flex ${
                        alt ? "text-theme2" : "text-black"
                    }`}
                >
                    More
                </button> */}
                <button className="relative font-bold text-lg px-4 py-2 group skew-x-[-35deg]">
                    <span
                        className={`absolute top-0 left-0 w-0 h-full transition-all ${
                            alt ? "bg-theme2" : "bg-black"
                        } group-hover:w-full`}
                    ></span>
                    <span
                        className={`flex flex-row items-center gap-2 skew-x-[35deg] ${
                            alt
                                ? "text-theme2 group-hover:text-black"
                                : "text-black group-hover:text-theme2"
                        }  transition-all`}
                    >
                        More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className="size-4 fill-current"
                        >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

const Section1 = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, carouselData.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    useLayoutEffect(() => {
        const to = setTimeout(() => {
            paginate(1);
        }, AUTO_SLIDE_INTERVAL);
        return () => {
            clearTimeout(to);
        };
    }, [page]);
    return (
        <section className="w-full bg-theme4 flex flex-col items-center relative">
            <span className="w-full h-40 absolute bottom-0 left-0 bg-[#dde6e8] section-border-clip"></span>
            <div className="h-[80vh] w-full overflow-hidden relative">
                <AnimatePresence initial={false} custom={direction}>
                    {carouselData[imageIndex] && (
                        <motion.div
                            key={imageIndex}
                            className="absolute left-40 right-40 top-20 bottom-20 flex items-center justify-start px-20"
                            custom={direction}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 0.2 },
                            }}
                        >
                            <span
                                className="absolute inset-0 pointer-events-none hidden lg:flex"
                                style={{
                                    backgroundImage: `url(${carouselData[imageIndex].img})`,
                                    backgroundSize: "auto 100%",
                                    backgroundPosition: "right center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></span>
                            <div className="w-full lg:w-1/2 flex flex-col items-start gap-10">
                                <span className="text-white font-bold text-5xl uppercase">
                                    {carouselData[imageIndex].title}
                                </span>
                                <span className="text-white">
                                    {carouselData[imageIndex].desc}
                                </span>
                                <button className="relative font-bold text-lg px-4 py-2 ml-6 group border-theme2 border-2 skew-x-[-35deg]">
                                    <span className="absolute top-0 left-0 w-0 h-full transition-all bg-theme2 group-hover:w-full"></span>
                                    <span className="block skew-x-[35deg] text-theme2 group-hover:text-black transition-all">
                                        Click Here
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex justify-center mt-4 absolute bottom-10 left-1/2 -translate-x-1/2">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            className={`mx-1 w-4 h-3 skew-x-[-35deg] hover:ring-1 transition-all ring-theme3 ${
                                index === imageIndex ? "bg-white" : "bg-theme1"
                            }`}
                            onClick={() => paginate(index - imageIndex)}
                        ></button>
                    ))}
                </div>
            </div>
            <div
                className="grid grid-cols-2 grid-rows-2 md:max-w-[80%] gap-10 z-[1]"
                id="sport-stars"
            >
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Section1;
