import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

function Product()
{
    const {all_product} =useContext(ShopContext);
    const {productId} = useParams();
    const product =all_product.find((e)=>e.id===Number(productId));
    return(
        <div>
         <BreadCrumbs product={product}/>
         <ProductDisplay product={product} />
         <DescriptionBox/>
         <RelatedProducts />
        </div>
    )
}
export default Product;