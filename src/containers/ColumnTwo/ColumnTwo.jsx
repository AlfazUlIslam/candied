const ColumnTwo = (props) => {
    const { styles, children } = props

    return (
        // column two
        <div className={styles}>
            {children}
        </div>
    )
}
export default ColumnTwo