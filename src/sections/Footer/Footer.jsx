import { ColumnOne, ColumnTwo, ColumnThree, SubColumnOne, SubColumnTwo } from "../../containers"
import { SocialIcon, FooterLinks, FooterLinksHeading, FooterLink } from "../../components"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import { logo } from "../../assets"

const Footer = () => {
  return (
    // footer
    <footer>
        {/* footer container */}
        <div className="">
            {/* column one */}
            <ColumnOne styles={`w-[148px] h-[365px] bg-lightPink flex 
                flex-col justify-center items-center`}>
                {/* follow text */}
                <div>
                    {/* text */}
                    <span>
                        follow
                    </span>
                    {/* line */}
                    <hr className="w-[100px]" />
                </div>
                {/* social icons */}
                <div>
                    <SocialIcon iconComponent={<FaFacebookSquare />} />
                    <SocialIcon iconComponent={<FaInstagramSquare />} />
                    <SocialIcon iconComponent={<FaLinkedinIn />} />
                    <SocialIcon iconComponent={<FaTwitterSquare />} />
                </div>
            </ColumnOne>
            {/* column two */}
            <ColumnTwo>
                {/* sub column one */}
                <SubColumnOne>
                    {/* footer links */}
                    <FooterLinks>
                        <FooterLinksHeading content={"Help"} />
                        <FooterLink content={"Contact Us"} />
                        <FooterLink content={"FAQ"} />
                        <FooterLink content={"Accessibility"} />
                    </FooterLinks>
                </SubColumnOne>
                {/* sub column two */}
                <SubColumnTwo>
                    {/* footer links */}
                    <FooterLinks>
                        <FooterLinksHeading content={"More from candied"} />
                        <FooterLink content={"Our Story"} />
                        <FooterLink content={"Blog"} />
                        <FooterLink content={"Affiliate"} />
                        <FooterLink content={"Offers"} />
                        <FooterLink content={"Sign in"} />
                    </FooterLinks>
                </SubColumnTwo>
            </ColumnTwo>
            {/* column three */}
            <ColumnThree>
                <header>
                    Sign up for coupons, updates, and other fun stuff
                </header>
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                    />
                    <button>
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