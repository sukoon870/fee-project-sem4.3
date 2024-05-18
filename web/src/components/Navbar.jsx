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
        <nav className="w-full flex flex-row items-center justify-between pt-10 pb-14 px-32 border-b-2 border-b-theme2 border-dotted">
            <div className="h-40"></div>
            <div className="flex flex-row items-center justify-center uppercase text-white text-xl">
                <a href="#" className="">
                    Home
                </a>
                <span className="w-1 h-5 bg-theme1 mx-4"></span>
                <a href="#" className="">
                    Company
                </a>
                <span className="w-1 h-5 bg-theme1 mx-4"></span>
                <a href="#" className="">
                    Sport stars
                </a>
                <span className="w-1 h-5 bg-theme1 mx-4"></span>
                <a href="#" className="">
                    Products
                </a>

                <a href="#" className="mx-4">
                    Contact
                </a>
                <a href="#" className="mx-4">
                    Buy Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
