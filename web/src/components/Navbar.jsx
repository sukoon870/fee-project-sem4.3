// const navItems = [{
//     name:"Home",
//     link:"#",
// },{
//     name:"Company",
//     link:"#",
// },{
//     name:"Sport stars",
//     link:"#",
// },{
//     name:"Products",
//     link:"#",
// }
// ]
const Navbar = () => {
    return (
        <nav className="w-full flex flex-row items-center justify-between py-10 px-52 border-b-2 border-b-theme2 border-do border-dotted bg-theme4">
            <a href="/" className="">
                <img src="/public/logo-s.png" alt="logo" draggable={false} />
            </a>
            <div className="flex flex-row items-center justify-center uppercase  text-xl">
                <a
                    href="#"
                    className="text-white hover:text-white/60 transition-all"
                >
                    Home
                </a>
                <span className="w-px shrink-0 h-5 bg-theme1 mx-4"></span>
                <a
                    href="#company"
                    className="text-white hover:text-white/60 transition-all"
                >
                    Company
                </a>
                <span className="w-px shrink-0 h-5 bg-theme1 mx-4"></span>
                <a
                    href="#sport-stars"
                    className="text-white hover:text-white/60 transition-all"
                >
                    Sport stars
                </a>
                <span className="w-px shrink-0 h-5 bg-theme1 mx-4"></span>
                <a
                    href="#products"
                    className="mr-4 text-white hover:text-white/60 transition-all"
                >
                    Products
                </a>

                <a
                    href="#"
                    className="mx-4 text-white hover:text-white/60 transition-all"
                >
                    Contact
                </a>
                <a
                    href="#"
                    className="mx-4 text-white hover:text-white/60 transition-all"
                >
                    Buy Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
