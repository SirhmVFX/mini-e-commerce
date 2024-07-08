const { default: Image } = require("next/image");

function Trending() {
  return (
    <>
      <div className="py-14 md:py-20">
        <h2 className="md:text-5xl text-3xl mb-4">Trending Products</h2>

        <div className="md:flex gap-4 ">
          <div className="flex flex-col gap-4 md:w-3/6 ">
            <div className="flex gap-4 ">
              <div className="w-3/6">
                <div className="border border-gray-100 rounded-lg md:h-[237px] h-[170px] w-full">
                  <Image
                    src={"/16.jpg"}
                    width={1000}
                    height={1000}
                    alt="h"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="md:text-base text-xs">Nike Running Shoe</h3>
                <p className="text-xs md:text-sm font-bold">N95,765</p>
              </div>

              <div className="w-3/6">
                <div className="border border-gray-100 rounded-lg md:h-[237px] h-[170px] w-full">
                  <Image
                    src={"/17.jpg"}
                    width={1000}
                    height={1000}
                    alt="h"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="md:text-base text-xs">Nike Running Shoe</h3>
                <p className="text-xs md:text-sm font-bold">N95,765</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-3/6">
                <div className="border border-gray-100 rounded-lg md:h-[237px] h-[170px]">
                  <Image
                    src={"/18.webp"}
                    width={1000}
                    height={1000}
                    alt="h"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="md:text-base text-xs">Nike Running Shoe</h3>
                <p className="text-xs md:text-sm font-bold">N95,765</p>
              </div>

              <div className="w-3/6">
                <div className="border border-gray-100 rounded-lg md:h-[237px] h-[170px] w-full">
                  <Image
                    src={"/19.webp"}
                    width={1000}
                    height={1000}
                    alt="h"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="md:text-base text-xs">Nike Running Shoe</h3>
                <p className="text-xs md:text-sm font-bold">N95,765</p>
              </div>
            </div>
          </div>

          <div className="md:w-3/6 ">
            <div className="border border-gray-100 rounded-lg md:h-full h-[350px]">
              <Image
                src={"/20.webp"}
                width={1000}
                height={1000}
                alt="h"
                className="w-full h-full object-contain bg-[#fefefe] rounded-lg"
              />
            </div>
            <h3 className="md:text-base text-xs">Nike Running Shoe</h3>
            <p className="text-xs md:text-sm font-bold">N95,765</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Trending;
