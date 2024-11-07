const FooterLink = (props) => {
    const { content } = props

    return (
        // footer link
        <a className="font-poppins font-normal text-[18px] 
        text-lightBrownishMaroon cursor-pointer transition-all 
        duration-1000 hover:text-darkPink">
            {content}
        </a>
    )
}
export default FooterLink