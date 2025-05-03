import { useParams } from "react-router-dom";
import { Data } from "./Data";

//A dynamic route lets you create a page that changes based on a URL value 

const Product = () => {
   const { id } = useParams(); // Take Id As Prameter
   const productData = Data.find((p) => p.id.toString() === id);

   if (!productData) return <div>No Product Found</div>

   return (
    <div>
      <p>{productData.name}</p>
      <p>{productData.price}</p>
    </div>
   )
}

export default Product;