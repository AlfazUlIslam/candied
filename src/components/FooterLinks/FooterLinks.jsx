const FooterLinks = (props) => {
    const { styles, children } = props
        
    return (
        // footer Links
        <ul className={styles}>
            {children}
        </ul>
    )
}
export default FooterLinks