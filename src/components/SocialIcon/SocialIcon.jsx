const SocialIcon = (props) => {
    const { iconComponent } = props
        
    return (
        // socila icon
        <i className="text-[30px] text-lightBrownishMaroon 
        cursor-pointer transition-all duration-1000 
        hover:text-darkPink">
            {iconComponent}
        </i>
    )
}
export default SocialIcon