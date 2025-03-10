import { ColumnOne, ColumnTwo, ColumnThree, SubColumnOne, SubColumnTwo } from "../../containers"
import { SocialIcon, FooterLinks, FooterLinksHeading, FooterLink } from "../../components"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import { logo } from "../../assets"

const Footer = () => {
  return (
    // footer
    <footer>
        {/* footer container */}
        <div className="bg-footerPink flex flex-col gap-[30px] 
        md:flex-row md:justify-between xl:justify-start xl:gap-[200px]">
            {/* column one */}
            <ColumnOne styles={`w-[100%] h-[65px] bg-lightPink flex 
            justify-center items-center gap-[15px] md:w-[100px] 
            md:h-[365px] md:flex-col md:justify-start md:pt-[60px] 
            xl:w-[148px] xl:pt-0 xl:justify-center xl:gap-[55px]`}>
                {/* follow text */}
                <div>
                    {/* text */}
                    <span className="font-poppins font-semibold 
                    text-[20px] text-darkBrownishMaroon sm:text-[22px] 
                    md:text-[20px] xl:text-[24px]">
                        Follow
                    </span>
                    {/* line */}
                    <div className="w-[50px] h-[1px] bg-mediumLightPink 
                    mx-auto">
                    </div>
                </div>
                {/* social icons */}
                <div className="flex items-center gap-[10px] 
                sm:gap-[20px] md:flex-col xl:gap-[30px]">
                    <SocialIcon iconComponent={<FaFacebookSquare />} />
                    <SocialIcon iconComponent={<FaInstagramSquare />} />
                    <SocialIcon iconComponent={<FaLinkedinIn />} />
                    <SocialIcon iconComponent={<FaTwitterSquare />} />
                </div>
            </ColumnOne>
            {/* column two */}
            <ColumnTwo styles={`pt-[30px] flex flex-col items-center 
            gap-[35px] sm:flex-row sm:justify-center sm:items-start 
            md:pt-[60px] xl:pt-[70px]`}>
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
            <ColumnThree styles={`py-[40px] flex flex-col items-center 
            md:pt-[60px] md:pr-6`}>
                <header className="w-[250px] mx-auto font-poppins 
                font-semibold text-[22px] text-darkBrownishMaroon 
                text-center sm:w-[400px] md:w-[250px] xl:w-auto 
                xl:mx-0 xl:text-[24px]">
                    Sign up for coupons, updates, and other fun stuff
                </header>
                <form className="w-[280px] my-[25px] flex 
                sm:w-[350px] md:w-[280px] xl:w-[450px]">
                    <input 
                        className="w-[200px] h-[40px] pl-[10px] 
                        outline-none font-poppins font-light text-[14px] 
                        text-[#C0C0C0] placeholder:text-center 
                        focus:border focus:border-lightBrownishMaroon 
                        focus:text-lightBrownishMaroon sm:w-[250px] 
                        md:w-[200px] xl:w-[336px] xl:h-[54px] xl:pl-[30px] 
                        xl:text-[18px]"
                        type="text" 
                        placeholder="Enter your email" 
                    />
                    <button className="w-[80px] h-[40px] 
                    bg-darkBrownishMaroon font-poppins font-medium 
                    text-[14px] text-[#FFF] cursor-pointer transition-all 
                    duration-1000 hover:bg-lightBrownishMaroon 
                    active:scale-90 sm:w-[100px] md:w-[80px] 
                    xl:w-[114px] xl:h-[54px] xl:text-[18px]">
                        Submit
                    </button>
                </form>
                {/* footer logo */}
                <div className="w-[80px] sm:w-[100px] md:w-[100px]">
                    <img 
                        className="w-[100%]" 
                        src={logo} 
                        alt="Candied Logo" 
                    />
                </div>
            </ColumnThree>
        </div>
    </footer>
  )
}
export default Footer