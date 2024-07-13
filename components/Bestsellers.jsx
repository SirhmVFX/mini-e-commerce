import AllProducts from "./AllProducts";
function Bestsellers() {
  return (
    <>
      <div className="md:py-20 py-14">
        <h2 className="md:text-5xl text-3xl">Best Sellers</h2>

        <AllProducts />
      </div>
    </>
  );
}

export default Bestsellers;
