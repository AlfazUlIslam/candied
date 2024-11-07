import { ColumnOne, ColumnTwo, ColumnThree, SubColumnOne, SubColumnTwo } from "../../containers"
import { SocialIcon, FooterLinks, FooterLinksHeading, FooterLink } from "../../components"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import { logo } from "../../assets"

const Footer = () => {
  return (
    // footer
    <footer>
        {/* footer container */}
        <div className="bg-footerPink flex gap-[200px]">
            {/* column one */}
            <ColumnOne styles={`w-[148px] h-[365px] bg-lightPink flex 
            flex-col justify-center items-center gap-[55px]`}>
                {/* follow text */}
                <div>
                    {/* text */}
                    <span className="font-poppins font-semibold 
                    text-[24px] text-darkBrownishMaroon">
                        Follow
                    </span>
                    {/* line */}
                    <div className="w-[50px] h-[1px] bg-mediumLightPink 
                    mx-auto">
                    </div>
                </div>
                {/* social icons */}
                <div className="flex flex-col items-center gap-[30px]">
                    <SocialIcon iconComponent={<FaFacebookSquare />} />
                    <SocialIcon iconComponent={<FaInstagramSquare />} />
                    <SocialIcon iconComponent={<FaLinkedinIn />} />
                    <SocialIcon iconComponent={<FaTwitterSquare />} />
                </div>
            </ColumnOne>
            {/* column two */}
            <ColumnTwo styles={`pt-[70px] px-[100px] flex items-start 
            gap-[105px]`}>
                {/* sub column one */}
                <SubColumnOne>
                    {/* footer links */}
                    <FooterLinks>
                        <li>
                            <FooterLinksHeading content={"Help"} />
                        </li>
                        <li>
                            <FooterLink content={"Contact Us"} />
                        </li>
                        <li>
                            <FooterLink content={"FAQ"} />
                        </li>
                        <li>
                            <FooterLink content={"Accessibility"} />
                        </li>
                    </FooterLinks>
                </SubColumnOne>
                {/* sub column two */}
                <SubColumnTwo>
                    {/* footer links */}
                    <FooterLinks>
                        <li>
                            <FooterLinksHeading content={"More from candied"} />
                        </li>
                        <li>
                            <FooterLink content={"Our Story"} />
                        </li>
                        <li>
                            <FooterLink content={"Blog"} />
                        </li>
                        <li>
                            <FooterLink content={"Affiliate"} />
                        </li>
                        <li>
                            <FooterLink content={"Offers"} />
                        </li>
                        <li>
                            <FooterLink content={"Sign in"} />
                        </li>
                    </FooterLinks>
                </SubColumnTwo>
            </ColumnTwo>
            {/* column three */}
            <ColumnThree styles={`py-[40px] flex flex-col items-center`}>
                <header className="font-poppins font-semibold 
                text-[24px] text-darkBrownishMaroon">
                    Sign up for coupons, updates, and other fun stuff
                </header>
                <form className="w-[450px] my-[25px] flex">
                    <input 
                        className="pl-[30px] flex-1 h-[54px] 
                        outline-none font-poppins font-light text-[18px] 
                        text-[#C0C0C0] placeholder:text-center 
                        focus:border focus:border-lightBrownishMaroon"
                        type="text" 
                        placeholder="Enter your email" 
                    />
                    <button className="w-[114px] h-[54px] 
                    bg-darkBrownishMaroon font-poppins font-medium 
                    text-[18px] text-[#FFF] cursor-pointer transition-all 
                    duration-1000 hover:bg-lightBrownishMaroon 
                    active:scale-90">
                        Submit
                    </button>
                </form>
                {/* footer logo */}
                <div>
                    <img src={logo} alt="Candied Logo" />
                </div>
            </ColumnThree>
        </div>
    </footer>
  )
}
export default Footer