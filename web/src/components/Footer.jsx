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
        <footer>
            <div className="navs flex flex-row">
                <div className="min-w-60">
                    <img src="" alt="" />
                    <p>
                        Magento provides different payment methods in order to
                        allow you to accept payments using different payment
                        processors like Pay ... Magento provides different
                        payment nts using different payment processors like Pay
                        ...
                    </p>
                </div>
                {navItems.map((item) => (
                    <div
                        className="nav flex flex-col gap-10 items-start"
                        key={item.type}
                    >
                        <h2 className="font-bold text-white">{item.type}</h2>
                        <div className="flex flex-col gap-1 items-start">
                            {item.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="py-4 text-white/50 hover:text-white/80"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-10 text-center">
                Copyright 2077 by who All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
