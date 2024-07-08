import Productcard from "./Productcard";
import { products } from "@/data";
function Allproduct() {
  return (
    <>
      <div className="py-20">
        <h2 className="md:text-5xl text-3xl">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          {products.map((product) => (
            <Productcard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Allproduct;
