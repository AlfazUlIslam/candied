const SocialIcon = (props) => {
    const { iconComponent } = props
        
    return (
        // socila icon
        <i className="text-[20px] text-lightBrownishMaroon 
        cursor-pointer transition-all duration-1000 
        hover:text-darkPink sm:text-[22px] md:text-[20px] 
        xl:text-[30px]">
            {iconComponent}
        </i>
    )
}
export default SocialIcon