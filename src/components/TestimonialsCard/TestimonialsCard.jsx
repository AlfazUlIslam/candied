import { Star } from ".."

const TestimonialsCard = (props) => {
    const { image, altText, name } = props

    return (
        // testimonials card
        <div className="w-[280px] h-[350px] bg-lightPink 
        relative cursor-pointer transition-all duration-1000 
        hover:bg-mediumDarkPink sm:w-[380px] sm:h-[450px] 
        md:w-[280px] md:h-[300px] lg:w-[280px] lg:h-[350px] 
        xl:w-[380px] xl:h-[450px]">
            {/* testimonials image & content */}
            <div className="flex flex-col items-center 
            absolute top-[-95px] left-[50%] 
            translate-x-[-50%] sm:top-[-105px] 
            md:top-[-75px] lg:top-[-95px] 
            xl:top-[-105px]">
                {/* image */}
                <img 
                    className="w-[200px] sm:w-auto 
                    md:w-[150px] lg:w-[200px]"
                    src={image} 
                    alt={altText} 
                />
                {/* content */}
                <div>
                    {/* name */}
                    <h5 className="mt-[40px] mb-[30px] 
                    font-poppins font-medium text-[20px] 
                    text-[#000] text-center sm:text-[24px] 
                    md:text-[18px] lg:text-[20px] 
                    xl:text-[24px]">
                        {name}
                    </h5>
                    {/* quote */}
                    <p className="w-[242px] mb-[25px] 
                    font-poppins font-medium text-[16px] 
                    text-center sm:w-[342px] sm:mb-[50px] 
                    sm:text-[20px] md:w-[242px] md:mb-[25px] 
                    md:text-[14px] lg:w-[242px] lg:mb-[25px] 
                    lg:text-[16px] xl:w-[342px] xl:mb-[50px] 
                    xl:text-[20px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, in!
                    </p>
                    {/* rating */}
                    <div className="flex justify-center 
                    items-center gap-[10px]">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default TestimonialsCard