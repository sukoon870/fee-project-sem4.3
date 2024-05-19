const navItems = [
    {
        type: "Support",
        links: ["Facebook", "Twitter", "Google+", "Pinterest", "LinkedIn"],
    },
    {
        type: "My account",
        links: [
            "Sign In",
            "View Cart",
            "My Wishlist",
            "Check out",
            "Track My Order",
        ],
    },
    {
        type: "Categories",
        links: ["Men", "Women", "Accessories", "Bags & Shoes", "Lookbooks"],
    },
    {
        type: "Categories",
        links: ["Men", "Women", "Accessories", "Bags & Shoes", "Lookbooks"],
    },
];
const Footer = () => {
    return (
        <footer className="relative bg-black">
            <span className="w-full h-20 -scale-100 absolute top-0 left-0 bg-theme4 section-border-clip"></span>
            <div className="navs flex flex-row p-40 pb-10 gap-10">
                <div className="max-w-md px-10 flex flex-col gap-10 items-start">
                    <img
                        src="/public/logo-m.png"
                        alt="logo"
                        className="w-52"
                        draggable={false}
                    />
                    <p className="leading-5 text-sm">
                        Magento provides different payment methods in order to
                        allow you to accept payments using different payment
                        processors like Pay ... Magento provides different
                        payment nts using different payment processors like Pay
                        ...
                    </p>
                </div>
                {navItems.map((item) => (
                    <div
                        className="nav flex flex-col gap-10 items-start px-4"
                        key={item.type}
                    >
                        <h2 className="font-bold text-white">{item.type}</h2>
                        <div className="flex flex-col gap-1 items-start">
                            {item.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="py-1 text-white/50 hover:text-white/80"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-6 text-center bg-[#111111]">
                Copyright 2077 by who All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
