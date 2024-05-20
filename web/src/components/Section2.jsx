const cardCata = [
    {
        name: "Blouse",
        img: "/product1.png",
        price: "$27.00",
    },
    {
        name: "Blouse",
        img: "/product2.png",
        price: "$27.00",
    },
    {
        name: "Blouse",
        img: "/product3.png",
        price: "$27.00",
    },
];
const Card = ({ name, img, price }) => {
    return (
        <a
            href="#"
            className="w-full aspect-[1.3/1] cursor-pointer hover:scale-[1.02] transition-all hover:drop-shadow-xl bg-white grid grid-rows-[90%_auto] gap-2 p-4"
        >
            <div
                className="bg-[#dde6e8] w-full h-full p-10 grid place-items-center bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            ></div>
            <div className="flex flex-row justify-between text-black">
                <span>{name}</span>
                <span className="font-bold">{price}</span>
            </div>
        </a>
    );
};
const Section2 = () => {
    return (
        <section
            className="w-full relative flex flex-col items-center bg-[#dde6e8] pt-20"
            id="products"
        >
            <h1 className="font-bold text-5xl text-black uppercase py-10">
                Explore the newest product
            </h1>
            <p className="text-black text-center max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore labore et dolore magna
                aliqua.
            </p>
            <div className="py-20 flex flex-row md:w-[70%] gap-4">
                {cardCata.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Section2;
