import { TestimonialsCard, Dot } from "../../components"
import { person1, person2, person3 } from "../../assets"

const Testimonials = () => {
  return (
    // testimonials
    <section id="testimonials">
        {/* testimonials container */}
        <div className="container px-6 py-[120px]">
            {/* testimonials heading */}
            <h2 className="font-sail font-normal text-[64px] 
            text-mediumPink text-center">
                What Others Say
            </h2>
            {/* testimonials description */}
            <p className="w-[862px] mt-[16px] mb-[170px] 
            mx-auto font-poppins font-normal text-[16px] 
            text-darkBrownishMaroon text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam possimus, laboriosam natus excepturi nam illum nihil sit ab architecto dolorum.
            </p>
            {/* testimonials cards */}
            <div className="mb-[60px] flex justify-center 
            items-center gap-[60px]">
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
            <div className="flex justify-center items-center 
            gap-[25px]">
                <Dot active={false} />
                <Dot active={true} />
                <Dot active={false} />
            </div>
        </div>
    </section>
  )
}
export default Testimonials