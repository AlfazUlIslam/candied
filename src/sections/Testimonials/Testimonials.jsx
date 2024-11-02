import { TestimonialsCard, Dot } from "../../components"
import { person1, person2, person3 } from "../../assets"

const Testimonials = () => {
  return (
    // testimonials
    <section id="testimonials">
        {/* testimonials container */}
        <div className="container px-6 py-[60px] xl:py-[120px]">
            {/* testimonials heading */}
            <h2 className="font-sail font-normal text-[45px] 
            text-mediumPink text-center sm:text-[64px]">
                What Others Say
            </h2>
            {/* testimonials description */}
            <p className="w-[250px] mt-[16px] mb-[170px] 
            mx-auto font-poppins font-normal text-[14px] 
            text-darkBrownishMaroon text-center sm:w-[500px] 
            sm:text-[16px] xl:w-[862px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam possimus, laboriosam natus excepturi nam illum nihil sit ab architecto dolorum.
            </p>
            {/* testimonials cards */}
            <div className="mb-[60px] flex flex-col 
            justify-center items-center gap-[120px] 
            md:flex-row md:gap-[20px] xl:flex-row 
            xl:gap-[60px]">
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