const Info = (props) => {
    const { image, altText, infoText } = props
        
    return (
        // info
        <div className="flex justify-start items-center 
        gap-[30px]">
            {/* icon */}
            <img
                src={image} 
                alt={altText} 
            />
            {/* info text */}
            <p className="w-[340px] font-poppins font-normal 
            text-[18px] text-darkPink">
                {infoText}
            </p>
        </div>
    )
}
export default Info