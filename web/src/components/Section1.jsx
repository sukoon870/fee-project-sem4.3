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
const Card = ({ title, desc, img, alt = false }) => {
    return (
        <div
            className={`flex items-start max-w-[40rem] cursor-default ${
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
                <button className={`${alt ? "text-theme2" : "text-black"}`}>
                    More
                </button>
            </div>
            {/* <img src={img} alt={title} className="ml-auto h-fit" /> */}
        </div>
    );
};

const Section1 = () => {
    return (
        <section className="w-full bg-theme4 flex flex-col items-center relative">
            <span className="w-full h-40 absolute bottom-0 left-0 bg-[#dde6e8] section-border-clip"></span>
            <div className="h-[80vh] w-full bg-black/10"></div>
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
