const SubColumnOne = (props) => {
    const { styles, children } = props

    return (
        // sub column one
        <div className={styles}>
            {children}
        </div>
    )
}
export default SubColumnOne