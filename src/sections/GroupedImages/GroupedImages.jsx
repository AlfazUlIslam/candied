import { groupedImage1, groupedImage2, groupedImage3, groupedImage4 } from "../../assets"

const GroupedImages = () => {
    return (
        // grouped images
        <section id="grouped-images">
            {/* container */}
            <div className="container px-6 py-[120px] 
            flex justify-center items-center gap-[30px] ">
                <img src={groupedImage1} alt="Grouped Image 1" />
                <img src={groupedImage2} alt="Grouped Image 2" />
                <img src={groupedImage3} alt="Grouped Image 3" />
                <img src={groupedImage4} alt="Grouped Image 4" />
            </div>
        </section>
    )
}
export default GroupedImages