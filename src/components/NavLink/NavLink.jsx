import "./NavLink.css"

const NavLink = (props) => {
    const { content } = props

    return (
      // text-[16px]
      <a className="font-poppins font-normal text-[14px] cursor-pointer transition-all duration-1000 hover:text-mediumLightPink">{content}</a>
    )
}
export default NavLink