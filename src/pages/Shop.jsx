import Hero from "../components/Hero/Hero"
import Popular from "../components/Popular/Popular"
import Offers from "../components/Offers/Offers";
import LatestSupplements from "../components/LatestSupplements/LatestSupplements";
import NewsLetter from "../components/NewsLetter/NewsLetter";
const Shop = () =>{
    return(
        <div>
        <Hero/>
        <Popular/>
       <Offers/>
       <LatestSupplements/>
       <NewsLetter/>
        </div>
    )
}
export default Shop