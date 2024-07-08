const { default: Image } = require("next/image");

function Explore() {
  return (
    <>
      <div className="md:flex gap-10">
        <div className="md:w-3/6 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl">
            Explore New <br /> Collections
          </h2>
          <div className="border border-gray-100 rounded-lg md:h-[350px] h-[250px]">
            <Image
              src={"/14.jpg"}
              width={1000}
              height={1000}
              alt="h"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="md:w-3/6 flex flex-col gap-6 items-start">
          <div className="border border-gray-100 rounded-lg md:h-[275px] h-[190px] w-full">
            <Image
              src={"/15.jpg"}
              width={1000}
              height={1000}
              alt="h"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p>
            Explore new options. Experience fresh styles, designs, perfect for
            updating your wardrobe with quality kicks
          </p>

          <button className="p-6 border-primarycolor border rounded-lg text-primarycolor">
            Shop Npw
          </button>
        </div>
      </div>
    </>
  );
}

export default Explore;
