import { TestimonialsCard, Dot } from "../../components"
import { person1, person2, person3 } from "../../assets"

const Testimonials = () => {
  return (
    // testimonials
    <section id="testimonials">
        {/* testimonials container */}
        <div className="container px-6 py-[120px]">
            {/* testimonials heading */}
            <h2>
                What Others Say
            </h2>
            {/* testimonials description */}
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam possimus, laboriosam natus excepturi nam illum nihil sit ab architecto dolorum.
            </p>
            {/* testimonials cards */}
            <div>
                <TestimonialsCard
                    image={person1}
                    altText={"Person 1"}
                    name={"Mary Jane"}
                />
                <TestimonialsCard
                    image={person2}
                    altText={"Person 2"}
                    name={"Rifu Max"}
                />
                <TestimonialsCard
                    image={person3}
                    altText={"Person 3"}
                    name={"Rose Geller"}
                />
            </div>
            {/* dots */}
            <div>
                <Dot active={false} />
                <Dot active={true} />
                <Dot active={false} />
            </div>
        </div>
    </section>
  )
}
export default Testimonials