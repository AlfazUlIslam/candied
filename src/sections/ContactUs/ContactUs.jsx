import { contactUsImage, clockIcon, mapMarkerIcon } from "../../assets"
import { Info } from "../../components"

const ContactUs = () => {
  return (
    // contact us
    <section id="contact-us">
        {/* contact us container */}
        {/* py-[120px] flex-row */}
        <div className="container px-6 py-[60px] 
        flex flex-col justify-center items-center gap-[98px]">
            {/* image */}
            <div>
                <img 
                    src={contactUsImage} 
                    alt="Contact Us Image" 
                />
            </div>
            {/* content */}
            {/* items-start */}
            <div className="flex flex-col items-center">
                {/* title */}
                {/* text-[36px] */}
                <h3 className="font-poppins font-semibold 
                text-[22px] text-lightBrownishMaroon 
                text-center">
                    Contact Us
                </h3>
                {/* heading */}
                {/* w-[483px] mt-[32px] mb-[25px] text-[64px] */}
                <h2 className="w-auto mt-[22px] mb-[15px] 
                font-sail font-normal text-[44px] 
                text-lightBrownishMaroon text-center">
                    <span className="mr-4 text-mediumLightPink">
                        Sweeten
                    </span>
                    your day!
                </h2>
                {/* infos */}
                {/* mb-[100px] */}
                <div className="mb-[50px] space-y-[34px]">
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
                {/* w-[178px] h-[54px] rounded-tr-[100px] 
                rounded-bl-[100px] text-[18px] */}
                <button className="w-[158px] h-[44px] 
                rounded-tr-[40px] rounded-bl-[40px] 
                bg-mediumLightPink font-poppins font-normal 
                text-[16px] text-[#FFF] flex justify-center 
                items-center transition-all duration-1000 
                hover:bg-darkPink active:scale-90">
                    Contact
                </button>
            </div>
        </div>
    </section>
  )
}
export default ContactUs