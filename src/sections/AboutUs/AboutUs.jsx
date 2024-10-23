import { aboutUsImage } from "../../assets"

const AboutUs = () => {
  return (
    // about us section
    <section id="about-us">
        {/* about us container */}
        <div className="container px-6 py-[60px] flex 
        flex-col items-center gap-6 md:py-[80px] md:flex-row 
        md:justify-between md:gap-0 lg:py-[100px] xl:py-[120px]">
            {/* about us content */}
            <div className="flex flex-col justify-start 
            items-start">
                {/* about us title */}
                <h5 className="mx-auto font-poppins font-normal 
                text-[14px] text-[#000] sm:text-[16px] md:mx-0 
                md:text-[14px] lg:text-[16px] xl:text-[20px]">
                    About Us
                </h5>
                {/* about us heading */}
                <h2 className="w-[300px] mt-[12px] 
                mb-[24px] font-poppins font-medium 
                text-[25px] text-mediumLightPink 
                text-center sm:w-[450px] sm:text-[36px] 
                md:w-[350px] md:text-[25px] md:text-left 
                lg:w-[450px] lg:text-[36px] xl:mt-[24px] 
                xl:mb-[34px]">
                    Welcome to Candied, 
                    Your Ultimate Destination 
                    for Heavenly Desserts!
                </h2>
                {/* about us description */}
                <p className="w-[250px] mx-auto mb-[34px] font-poppins 
                font-medium text-[14px] text-[#000] text-center 
                sm:w-[350px] sm:text-[16px] md:w-[250px] md:mx-0 
                md:text-[14px] md:text-left lg:w-[350px] lg:text-[16px] 
                xl:w-[420px] xl:mb-[50px] xl:text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Fusce egestas eu justo 
                    sed condimentum.
                </p>
                {/* about us button */}
                <button className="rounded-tr-[50px] 
                rounded-bl-[50px] bg-mediumLightPink 
                px-[27px] py-[8px] mx-auto font-poppins 
                font-normal text-[14px] text-[#FFF] 
                transition-all duration-1000 
                hover:bg-darkPink active:scale-90 
                sm:rounded-tr-[70px] sm:rounded-bl-[70px] 
                sm:px-[37px] sm:py-[10px] md:rounded-tr-[50px] 
                md:rounded-bl-[50px] md:px-[27px] md:py-[8px] 
                md:mx-0 lg:rounded-tr-[70px] lg:rounded-bl-[70px] 
                lg:px-[37px] lg:py-[10px] xl:rounded-tr-[100px] 
                xl:rounded-bl-[100px] xl:px-[54px] xl:py-[12px] 
                xl:text-[20px]">
                    Explore
                </button>
            </div>
            {/* about us image */}
            <div>
                <img
                    className="w-[300px] sm:w-[450px] md:w-[400px] 
                    lg:w-[450px] xl:w-[600px]" 
                    src={aboutUsImage} 
                    alt="Macaroon Buffet" 
                />
            </div>
        </div>
    </section>
  )
}
export default AboutUs