const cardCata = [
    {
        name: "Blouse",
        img: "",
        price: "$27.00",
    },
    {
        name: "Blouse",
        img: "",
        price: "$27.00",
    },
    {
        name: "Blouse",
        img: "",
        price: "$27.00",
    },
];
const Card = ({ name, img, price }) => {
    return (
        <div className="w-60 aspect-square bg-white grid grid-rows-[90%_auto] gap-2 p-10">
            <div className="bg-gray-700 w-full h-full p-10 grid place-items-center">
                <img src={img} alt={name} className="size-fit" />
            </div>
            <div className="flex flex-row justify-between text-black">
                <span>{name}</span>
                <span className="font-bold">{price}</span>
            </div>
        </div>
    );
};
const Section2 = () => {
    return (
        <section className="w-full relative flex flex-col items-center">
            <span className="w-full h-20 absolute top-0 left-0 -translate-x-full bg-[#dde6e8] section-border-clip"></span>
            <span className="w-full h-20 -scale-y-100 absolute bottom-0 left-0 translate-x-full bg-[#dde6e8] section-border-clip"></span>

            <h1 className="font-bold text-black uppercase py-20">
                Explore the newest product
            </h1>
            <p className="text-black text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="py-20 flex flex-row flex-wrap gap-10">
                {cardCata.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Section2;
