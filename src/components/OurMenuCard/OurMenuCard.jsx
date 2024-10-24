const OurMenuCard = (props) => {
    const { image, altText, title, price } = props

    return (
        // our menu card
        <div>
            {/* image */}
            <div>
                <img src={image} alt={altText} />
            </div>
            {/* content */}
            <div>
                {/* title & price */}
                <div>
                    {/* title */}
                    <span>{title}</span>
                    {/* price */}
                    <span>{price}</span>
                </div>
                {/* button */}
                <button>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
export default OurMenuCard