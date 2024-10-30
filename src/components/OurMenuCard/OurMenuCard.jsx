const OurMenuCard = (props) => {
    const { image, altText, title, price } = props

    return (
        // our menu card
        <div className="w-[250px] h-[260px] rounded-[10px] 
        bg-lightPink flex flex-col items-center relative 
        sm:w-[316px] sm:h-[305px] lg:w-[250px] lg:h-[260px] 
        xl:w-[316px] xl:h-[305px]">
            {/* image & content */}
            <div className="flex flex-col items-center 
            absolute top-[-35px]">
                {/* image */}
                <img 
                    className="w-[180px] sm:w-auto 
                    lg:w-[180px] xl:w-auto"
                    src={image} 
                    alt={altText} 
                />
                {/* content */}
                <div className="w-[100%] flex flex-col items-center">
                    {/* title & price */}
                    <div className="w-[100%] my-[7px] flex 
                    justify-between items-center">
                        {/* title */}
                        <span className="font-poppins font-normal 
                        text-[12px] text-[#000] sm:text-[14px] 
                        lg:text-[12px] xl:text-[14px]">
                            {title}
                        </span>
                        {/* price */}
                        <span className="font-poppins font-normal 
                        text-[12px] text-darkPink sm:text-[14px] 
                        lg:text-[12px] xl:text-[14px]">
                            {price}
                        </span>
                    </div>
                    {/* button */}
                    <button className="w-[100px] h-[25px] rounded-[5px] 
                    bg-mediumLightPink font-poppins font-normal text-[10px] 
                    text-[#FFF] flex justify-center items-center transition-all 
                    duration-1000 hover:bg-mediumPink active:scale-90 
                    sm:w-[120px] sm:h-[35px] sm:rounded-[10px] sm:text-[12px] 
                    lg:w-[100px] lg:h-[25px] lg:rounded-[5px] lg:text-[10px] 
                    xl:w-[120px] xl:h-[35px] xl:rounded-[10px] xl:text-[12px]">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}
export default OurMenuCard