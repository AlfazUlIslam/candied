const FooterLinksHeading = (props) => {
    const { content } = props

    return (
        // footer links heading
        // text-[20px]
        <h6 className="font-poppins font-semibold text-[18px] 
        text-lightBrownishMaroon">
            {content}
        </h6>
    )
}
export default FooterLinksHeading