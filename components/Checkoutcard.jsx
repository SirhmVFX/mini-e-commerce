const { default: Image } = require("next/image");

function Checkoutcard({ name, photos, current_price, quantity }) {
  return (
    <>
      <div className="flex gap-4 w-full  ">
        <div className="bg-gray-100 rounded-lg w-[160px] h-[110px] md:h-[128px]">
          {photos?.map((p) => (
            <Image
              key={p.id}
              src={`https://api.timbu.cloud/images/${p.url}`}
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
              alt="Product Photo"
            />
          ))}
        </div>

        <div className="w-full ">
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-lg">{name} </h2>
              <p className="text-xs md:text-sm">
                Seller: Timbu Official Store-DORE2 | Variation: M/L
              </p>
            </div>
            <h2 className="text-lg font-medium">
              NGN {current_price?.[0]?.NGN}.00
            </h2>
            <p className="text-sm text-primarycolor">
              Quantity: {quantity} pairs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkoutcard;
