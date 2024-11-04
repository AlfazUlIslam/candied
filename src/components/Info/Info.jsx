const Info = (props) => {
    const { image, altText, infoText } = props
        
    return (
        // info
        // gap-[30px] 
        <div className="flex justify-start items-center 
        gap-[10px]">
            {/* icon */}
            <div>

            <img
                className="w-[20px]"
                src={image} 
                alt={altText} 
            />
            </div>
            {/* info text */}
            {/* w-[340px] text-[18px] */}
            <p className="w-[150px] font-poppins font-normal 
            text-[16px] text-darkPink">
                {infoText}
            </p>
        </div>
    )
}
export default Info