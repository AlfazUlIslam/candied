import { OurMenuCard } from "../../components"
import { OurMenuImage1, OurMenuImage2, OurMenuImage3, OurMenuImage4, OurMenuImage5, OurMenuImage6 } from "../../assets"

const OurMenu = () => {
    return (
        // our menu
        <section id="our-menu">
            {/* container */}
            <div className="container px-6 py-[120px]">
                {/* title */}
                <h6>Indulge</h6>
                {/* heading */}
                <h2>Our Menu</h2>
                {/* cards */}
                <div>
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