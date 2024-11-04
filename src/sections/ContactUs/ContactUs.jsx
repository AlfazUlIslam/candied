import { contactUsImage, clockIcon, mapMarkerIcon } from "../../assets"
import { Info } from "../../components"

const ContactUs = () => {
  return (
    // contact us
    <section id="contact-us">
        {/* contact us container */}
        <div className="container px-6 py-[60px] flex flex-col 
        justify-center items-center gap-[98px] md:flex-row 
        md:gap-[50px] xl:py-[120px] xl:gap-[98px]">
            {/* image */}
            <div>
                <img 
                    className="w-[300px] sm:w-[500px] 
                    md:w-[300px] lg:w-[400px] xl:w-auto"
                    src={contactUsImage} 
                    alt="Contact Us Image" 
                />
            </div>
            {/* content */}
            <div className="flex flex-col items-center 
            md:items-start">
                {/* title */}
                <h3 className="font-poppins font-semibold 
                text-[22px] text-lightBrownishMaroon 
                text-center sm:text-[36px] md:text-[22px] 
                lg:text-[26px] xl:text-[36px]">
                    Contact Us
                </h3>
                {/* heading */}
                <h2 className="w-auto mt-[22px] mb-[15px] 
                font-sail font-normal text-[44px] 
                text-lightBrownishMaroon text-center 
                sm:w-[483px] sm:text-[64px] md:w-auto 
                md:text-[44px] lg:text-[64px] xl:w-[483px] 
                xl:mt-[32px] xl:mb-[25px]">
                    <span className="mr-4 text-mediumLightPink">
                        Sweeten
                    </span>
                    your day!
                </h2>
                {/* infos */}
                <div className="mb-[50px] space-y-[34px] 
                xl:mb-[100px]">
                    <Info 
                        image={clockIcon}
                        altText={"Clock Icon"}
                        infoText={"Monday-Saturday 9:00-10:00"}
                    />
                    <Info 
                        image={mapMarkerIcon}
                        altText={"Map Marker Icon"}
                        infoText={"742 Evergreen Terrace, Springfield, Wonderland"}
                    />
                </div>
                {/* button */}
                <button className="w-[158px] h-[44px] 
                rounded-tr-[40px] rounded-bl-[40px] 
                bg-mediumLightPink font-poppins font-normal 
                text-[16px] text-[#FFF] flex justify-center 
                items-center transition-all duration-1000 
                hover:bg-darkPink active:scale-90 sm:w-[178px] 
                sm:h-[54px] sm:rounded-tr-[100px] sm:rounded-bl-[100px] 
                sm:text-[18px] md:w-[158px] md:h-[44px] md:rounded-tr-[40px] 
                md:rounded-bl-[40px] md:text-[16px] xl:w-[178px] 
                xl:h-[54px] xl:rounded-tr-[100px] xl:rounded-bl-[100px] 
                xl:text-[18px]">
                    Contact
                </button>
            </div>
        </div>
    </section>
  )
}
export default ContactUs