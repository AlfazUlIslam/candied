const Dot = (props) => {
    const { active } = props
        
    return (
        // dot
        <div 
            className="w-[10px] h-[10px] rounded-full"
            style={{background: `${active ? "#F78CA2" : "#6D0E22"}`}}
        >
        </div>
    )
}
export default Dot