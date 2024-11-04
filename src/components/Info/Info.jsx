const Info = (props) => {
    const { image, altText, infoText } = props
        
    return (
        // info
        <div className="flex justify-start items-center 
        gap-[10px] sm:gap-[30px] md:gap-[10px] xl:gap-[30px]">
            {/* icon */}
            <div>

            <img
                className="w-[20px] sm:w-auto md:w-[20px]]"
                src={image} 
                alt={altText} 
            />
            </div>
            {/* info text */}
            <p className="w-[150px] font-poppins font-normal 
            text-[16px] text-darkPink sm:w-[340px] sm:text-[18px] 
            md:w-[250px] md:text-[16px] xl:w-[340px] xl:text-[18px]">
                {infoText}
            </p>
        </div>
    )
}
export default Info