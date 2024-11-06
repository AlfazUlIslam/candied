const GroupedImage = (props) => {
    const { image, altText } = props    

    return (
        // grouped image
        <img 
            className="w-[250px] h-[350px] 
            sm:w-[350px] sm:h-[450px] 
            md:w-[250px] md:h-[350px] 
            xl:w-[350px] xl:h-[450px]" 
            src={image} 
            alt={altText}
        />
    )
}
export default GroupedImage