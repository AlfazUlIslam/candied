const FooterLinksHeading = (props) => {
    const { content } = props

    return (
        // footer links heading
        <h6 className="font-poppins font-semibold text-[18px] 
        text-lightBrownishMaroon text-center xl:w-[200px]">
            {content}
        </h6>
    )
}
export default FooterLinksHeading