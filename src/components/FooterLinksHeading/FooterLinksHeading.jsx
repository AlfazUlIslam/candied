const FooterLinksHeading = (props) => {
    const { content } = props

    return (
        // footer links heading
        <h6 className="font-poppins font-semibold text-[18px] 
        text-lightBrownishMaroon xl:w-[200px] xl:text-center">
            {content}
        </h6>
    )
}
export default FooterLinksHeading