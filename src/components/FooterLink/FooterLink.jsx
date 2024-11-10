const FooterLink = (props) => {
    const { content } = props

    return (
        // footer link
        <a className="font-poppins font-normal text-[14px] 
        text-lightBrownishMaroon cursor-pointer transition-all 
        duration-1000 hover:text-darkPink xl:text-[18px]">
            {content}
        </a>
    )
}
export default FooterLink