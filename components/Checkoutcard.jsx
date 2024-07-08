const { default: Image } = require("next/image");
const { CiTrash } = require("react-icons/ci");

function Checkoutcard({ img, name, amount }) {
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

        <div className="w-full ">
          <div className="flex flex-col gap-4">
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

export default Checkoutcard;
