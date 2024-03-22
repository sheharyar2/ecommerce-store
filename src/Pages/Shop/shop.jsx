import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import Offers from "../../components/Offers/Offers";
import NewCollection from "../../components/NewCollections/NewCollections";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

function Shop()
{
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection />
            <NewsLetter />
        </div>
    )
}
export default Shop;