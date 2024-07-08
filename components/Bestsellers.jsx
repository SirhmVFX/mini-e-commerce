import Productcard from "./Productcard";
import { products } from "@/data";
function Bestsellers() {
  return (
    <>
      <div className="md:py-20 py-14">
        <h2 className="md:text-5xl text-3xl">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          {products.map((product) => (
            <Productcard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bestsellers;
