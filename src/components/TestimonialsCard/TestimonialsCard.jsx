import { star } from "../../assets"

const TestimonialsCard = (props) => {
    const { image, altText, name } = props

    return (
        // testimonials card
        <div>
            {/* testimonials image & content */}
            <div>
                {/* image */}
                <img src={image} alt={altText} />
                {/* content */}
                <div>
                    {/* name */}
                    <h5>
                        {name}
                    </h5>
                    {/* quote */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, in!
                    </p>
                    {/* rating */}
                    <div>
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                        <img src={star} alt="Star Icon" />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default TestimonialsCard