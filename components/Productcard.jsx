const { default: Image } = require("next/image");
const { CiHeart, CiShoppingCart } = require("react-icons/ci");
const { FaStar } = require("react-icons/fa");

function Productcard({ name, amount, review, sold, img }) {
  return (
    <>
      <div className=" ">
        <div className="bg-gray-100 md:h-[200px] h-[150px] relative rounded-ss-xl rounded-se-xl">
          <div className="bg-white rounded-full flex justify-center items-center absolute right-2 top-2 md:w-[35px] md:-[35px] w-[25px] h-[25px]">
            <CiHeart className="text-base md:text-xl " />
          </div>

          <Image
            src={img}
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            alt="6"
          />
        </div>
        <div className="py-4 flex justify-between items-end ">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <FaStar className="text-xs text-yellow-500" />
              <FaStar className="text-xs text-yellow-500" />

              <FaStar className="text-xs text-yellow-500" />
              <FaStar className="text-xs text-yellow-500" />
              <FaStar className="text-xs text-yellow-500" />
              <p className="text-sm">{review}</p>
            </div>
            <h2 className="text-xs md:text-[18px]">{name}</h2>
            <div className="flex gap-2 items-center">
              <h2 className="text-xs md:text-[14px] font-medium ">{amount}</h2>
              <p className="text-[10px] md:text-sm text-gray-300">
                4,4430 Sold
              </p>
            </div>
          </div>{" "}
          <div className="bg-primarycolor rounded-full flex justify-center items-center md:w-[35px] w-[25px] md:h-[35px] h-[25px]">
            <CiShoppingCart className="text-base md:text-xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
