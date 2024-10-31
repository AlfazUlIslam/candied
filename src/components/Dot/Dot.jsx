const Dot = (props) => {
    const { active } = props
        
    return (
        // dot
        <div 
            className="w-[10px] h-[10px]"
            style={{background: `${active ? "#F78CA2" : "#6D0E22"}`}}
        >
        </div>
    )
}
export default Dot