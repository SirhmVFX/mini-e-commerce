const { default: Image } = require("next/image");
import { BsMinecartLoaded } from "react-icons/bs";
import Button from "./Button";
function Herosection() {
  return (
    <>
      <div className="md:flex items-center">
        <div className="md:w-3/6 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="bg-primarycolor p-2 text-white rounded-lg">
              <BsMinecartLoaded />
            </div>
            <h2>Timbu Cloud Shop</h2>
          </div>

          <h2 className="text-[60px] md:text-[106px] font-medium leading-[1]">
            Timbu Shoe Bank
          </h2>

          <p className="md:text-base text-sm text-gray-400">
            Discover our stylish and comfortable shoes, perfect for every
            occasion and need{" "}
          </p>

          <div className="p-4 border border-gray-200 rounded-full flex w-fit items-center ">
            <div className="md:h-[60px] h-[30px]">
              <Image
                src={"/5.png"}
                width={1000}
                height={1000}
                alt="5"
                className="w-full h-full object-contain"
              />
            </div>
            <p>100+ Brands</p>
          </div>
          <Button title={"Shop Now"} />
        </div>
        <div className="md:w-3/6">
          <Image
            src={"/1.png"}
            width={1000}
            height={1000}
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Herosection;
