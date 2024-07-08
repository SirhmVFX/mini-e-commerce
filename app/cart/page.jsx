import Button from "@/components/Button";
import Carts from "@/components/Carts";
import Productcard from "@/components/Productcard";
import { products } from "@/data";
import Link from "next/link";

function Cart() {
  return (
    <>
      <div>
        <div className="md:flex gap-6 py-10 w-full">
          <div className="md:w-8/12 flex flex-col gap-8">
            {products.slice(0, 3).map((prod) => (
              <Carts key={prod.id} {...prod} />
            ))}
          </div>

          <div className="md:w-4/12 flex flex-col gap-6 md:pt-0 pt-10">
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm">Cart Summary</p>
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-md">Subtotal</p>
                  <p className="text-xs">Delivery fees not included yet</p>
                </div>
                <h2 className="text-lg font-medium">N751,133</h2>
              </div>
              <Link
                className="p-4 text-center text-white rounded-xl bg-primarycolor"
                href={"/checkout"}
              >
                {" "}
                Checkout (N751,133){" "}
              </Link>
            </div>
            <div>
              <p>Returns are east</p>
              <p>Free return withing 7 days for ALL eligible items </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="text-3xl">Related products</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((prod) => (
              <Productcard key={prod.id} {...prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
