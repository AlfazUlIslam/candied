import { contactUsImage, clockIcon, mapMarkerIcon } from "../../assets"
import { Info } from "../../components"

const ContactUs = () => {
  return (
    // contact us
    <section id="contact-us">
        {/* contact us container */}
        <div className="container px-6 py-[120px] 
        flex justify-between items-center gap-[98px]">
            {/* image */}
            <div>
                <img 
                    src={contactUsImage} 
                    alt="Contact Us Image" 
                />
            </div>
            {/* content */}
            <div className="flex flex-col items-start">
                {/* title */}
                <h3 className="font-poppins font-semibold 
                text-[36px] text-lightBrownishMaroon 
                text-center">
                    Contact Us
                </h3>
                {/* heading */}
                <h2 className="w-[483px] mt-[32px] mb-[25px] 
                font-sail font-normal text-[64px] 
                text-lightBrownishMaroon text-center">
                    <span className="mr-4 text-mediumLightPink">
                        Sweeten
                    </span>
                    your day!
                </h2>
                {/* infos */}
                <div className="mb-[100px] space-y-[34px]">
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
                <button className="w-[178px] h-[54px] 
                rounded-tr-[100px] rounded-bl-[100px] 
                bg-mediumLightPink font-poppins font-normal 
                text-[18px] text-[#FFF] flex justify-center 
                items-center transition-all duration-1000 
                hover:bg-darkPink">
                    Contact
                </button>
            </div>
        </div>
    </section>
  )
}
export default ContactUs