import { OurMenuCard } from "../../components"
import { OurMenuImage1, OurMenuImage2, OurMenuImage3, OurMenuImage4, OurMenuImage5, OurMenuImage6 } from "../../assets"

const OurMenu = () => {
    return (
        // our menu
        <section id="our-menu">
            {/* container */}
            <div className="container px-6 py-[60px]">
                {/* title */}
                <h6 className="font-poppins font-normal text-[12px] 
                text-[#000] text-center sm:text-[16px]">
                    Indulge
                </h6>
                {/* heading */}
                <h2 className="mt-[20px] mb-[100px] font-sail font-normal 
                text-[45px] text-mediumPink text-center sm:text-[55px]">
                    Our Menu
                </h2>
                {/* cards */}
                <div className="flex flex-col justify-center 
                items-center gap-[60px] md:flex-row md:flex-wrap">
                    <OurMenuCard
                        image={OurMenuImage1}
                        altText={"Our Menu Image 1"}
                        title={"Blueberry Cheese Cake"}
                        price={350}
                    />
                    <OurMenuCard
                        image={OurMenuImage2}
                        altText={"Our Menu Image 2"}
                        title={"Scone"}
                        price={200}
                    />
                    <OurMenuCard
                        image={OurMenuImage3}
                        altText={"Our Menu Image 3"}
                        title={"Cake Pops"}
                        price={150}
                    />
                    <OurMenuCard
                        image={OurMenuImage4}
                        altText={"Our Menu Image 4"}
                        title={"Chocolate Lava Cake"}
                        price={250}
                    />
                    <OurMenuCard
                        image={OurMenuImage5}
                        altText={"Our Menu Image 5"}
                        title={"Lemon Blueberry Cake"}
                        price={250}
                    />
                    <OurMenuCard
                        image={OurMenuImage6}
                        altText={"Our Menu Image 6"}
                        title={"Matcha Sorbet"}
                        price={300}
                    />
                </div>
            </div>
        </section>
    )
}
export default OurMenu