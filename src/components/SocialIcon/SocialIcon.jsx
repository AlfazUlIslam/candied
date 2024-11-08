const SocialIcon = (props) => {
    const { iconComponent } = props
        
    return (
        // socila icon
        // text-[30px]
        <i className="text-[20px] text-lightBrownishMaroon 
        cursor-pointer transition-all duration-1000 
        hover:text-darkPink">
            {iconComponent}
        </i>
    )
}
export default SocialIcon