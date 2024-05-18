import React from "react";

const cardData = [
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "",
    },
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "",
    },
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "",
    },
    {
        title: "Lorem Ipsum Dol Mit Samet",
        desc: "Per incetos himenaeos. Sed vel nunc lacinia nunc. Nulla facilisi. Donec id nunc id nunc.",
        img: "",
    },
];
const Card = ({ title, desc, img, alt = false }) => {
    return (
        <div
            className={`grid grid-cols-2 place-items-center md:w-96 ${
                alt ? "bg-theme2" : "bg-black"
            }`}
        >
            <div className="flex flex-col gap-4 items-start p-10">
                <span
                    className={`text-3xl font-bold uppercase ${
                        alt ? "text-black" : "text-white"
                    }`}
                >
                    {title}
                </span>
                <span className={`${alt ? "text-black" : "text-white"}`}>
                    {desc}
                </span>
                <button className={`${alt ? "text-black" : "text-theme2"}`}>
                    More
                </button>
            </div>
            <img src={img} alt={title} className="ml-auto h-fit" />
        </div>
    );
};

const Section1 = () => {
    return (
        <section className="w-full">
            <div className="h-[80vh] w-full bg-black/10"></div>
            <div className="flex flex-row flex-wrap gap-10">
                {cardData.map((card, index) => (
                    <Card key={index} {...card} alt={index % 2 === 0} />
                ))}
            </div>
        </section>
    );
};

export default Section1;
