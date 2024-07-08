import Image from "next/image";
import { CiTrash } from "react-icons/ci";

function Carts({ img, name, amount }) {
  return (
    <>
      <div className="flex gap-4 w-full  ">
        <div className="bg-gray-100 rounded-lg w-[160px] h-[110px] md:h-[128px]">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="1"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="md:flex justify-between w-full pb-3">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg">{name} </h2>
              <p className="text-xs md:text-sm">
                Seller: Timbu Official Store-DORE2 | Variation: M/L
              </p>
            </div>
            <h2 className="text-lg font-medium">{amount}</h2>
          </div>

          <div className="flex gap-2 items-center">
            <CiTrash />
            <p className="text-xs md:text-base">Remove</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carts;
