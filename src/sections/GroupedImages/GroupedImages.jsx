import { GroupedImage } from "../../components"
import { donuts, cake, icecream, icecreamMilkshake, } from "../../assets"

const GroupedImages = () => {
    return (
        // grouped images
        <section id="grouped-images">
            {/* container */}
            {/* py-[120px] flex-row gap-0 */}
            <div className="container px-6 py-[60px] flex flex-col 
            items-center gap-[30px] md:flex-row 
            md:flex-wrap md:justify-center 
            xl:flex-nowrap">
                <GroupedImage
                    image={donuts}
                    altText={"Donuts"}
                />
                <GroupedImage
                    image={cake}
                    altText={"Cake"}
                />
                <GroupedImage
                    image={icecream}
                    altText={"Icecream"}
                />
                <GroupedImage
                    image={icecreamMilkshake}
                    altText={"Icecream Milkshake"}
                />
            </div>
        </section>
    )
}
export default GroupedImages