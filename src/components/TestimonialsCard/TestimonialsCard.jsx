import { star } from "../../assets"

const TestimonialsCard = (props) => {
    const { image, altText, name } = props

    return (
        // testimonials card
        <div className="w-[380px] h-[450px] bg-lightPink 
        relative cursor-pointer transition-all duration-1000 
        hover:bg-mediumDarkPink">
            {/* testimonials image & content */}
            <div className="flex flex-col items-center 
            absolute top-[-105px] left-[50%] 
            translate-x-[-50%]">
                {/* image */}
                <img src={image} alt={altText} />
                {/* content */}
                <div>
                    {/* name */}
                    <h5 className="mt-[40px] mb-[30px] 
                    font-poppins font-medium text-[24px] 
                    text-[#000] text-center">
                        {name}
                    </h5>
                    {/* quote */}
                    <p className="w-[342px] mb-[50px] 
                    font-poppins font-medium text-[20px] 
                    text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, in!
                    </p>
                    {/* rating */}
                    <div className="flex justify-center 
                    items-center gap-[10px]">
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default TestimonialsCard