const ColumnOne = (props) => {
    const { styles, children } = props

    return (
        // column one
        <div className={styles}>
            {children}
        </div>
    )
}
export default ColumnOne