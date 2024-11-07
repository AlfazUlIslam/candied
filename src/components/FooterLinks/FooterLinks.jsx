const FooterLinks = (props) => {
    const { styles, children } = props
        
    return (
        // footer Links
        <ul className="flex flex-col items-center 
        gap-[7px]">
            {children}
        </ul>
    )
}
export default FooterLinks