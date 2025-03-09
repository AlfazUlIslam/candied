import { macaroons } from "../../assets"

const Banner = () => {
  return (
    <section 
        id="home"
        className="bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${macaroons})`}}
    >
        {/* banner container */}
        <div className="container px-6 py-[60px] md:py-[80px] 
        lg:py-[100px] xl:py-[120px]">
            {/* banner heading */}
            <h1 className="w-[150px] font-sail font-normal 
            text-[40px] text-mediumLightPink sm:w-[250px] 
            md:w-[300px] md:text-[50px] lg:w-[400px] 
            lg:text-[70px] xl:w-[650px] xl:text-[110px]">
                Sweet Treats 
                for the 
                sweet tooth
            </h1>
        </div>
    </section>
  )
}
export default Banner