import { useState } from "react"
import NavLink from "../NavLink/NavLink"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { logo, user } from "../../assets"
import "./Navbar.css"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }

    return (
        <nav>
            {/* nav container */}
            <div className="container p-6 flex justify-between items-center">
                {/* nav logo */}
                <div className="w-[60px] sm:w-[80px] md:w-[100px]">
                    <img className="w-[100%]" src={logo} alt="Candied Logo" />
                </div>
                {/* nav menu */}
                <div className="hidden md:flex md:justify-center md:items-center md:gap-[30px]">
                    <NavLink content={"Home"} />
                    <NavLink content={"Menu"} />
                    <NavLink content={"Testimonials"} />
                    <NavLink content={"About us"} />
                    <NavLink content={"Contact"} />
                    {/* nav user icon */}
                    <div className="ml-[20px]">
                        <img src={user} alt="User Icon" />
                    </div>
                </div>
                {/* mobile menu & button */}
                <div className="relative md:hidden">
                    {/* mobile menu button */}
                    <button
                        className="text-3xl" 
                        onClick={handleToggle}>
                        {toggle ? <IoCloseSharp /> : <IoMenuSharp />}
                    </button>
                    {/* mobile menu */}
                    {toggle && 
                    <div className="min-w-[9rem] rounded-lg bg-[#FFF] shadow-xl py-4 flex flex-col items-center gap-2 absolute top-14 -right-4 slide-up">
                        <NavLink content={"Home"} />
                        <NavLink content={"Menu"} />
                        <NavLink content={"Testimonials"} />
                        <NavLink content={"About us"} />
                        <NavLink content={"Contact"} />
                        {/* nav user icon */}
                        <div className="mt-4">
                            <img src={user} alt="User Icon" />
                        </div>
                    </div>}
                </div>
            </div>
        </nav>
    )
}
export default Navbar