const FooterLink = (props) => {
    const { content } = props

    return (
        // footer link
        // text-[18px]
        <a className="font-poppins font-normal text-[14px] 
        text-lightBrownishMaroon cursor-pointer transition-all 
        duration-1000 hover:text-darkPink">
            {content}
        </a>
    )
}
export default FooterLink