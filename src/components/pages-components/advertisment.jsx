const Advertisment = () => {
  return (
    <div className="ads w-full flex justify-center flex-col items-center mt-20 lg:flex-row lg:gap-5 ">
      <div className="menu-tab w-full lg:w-2/3 xl:w-2/5 lg:bg-white lg:pb-3 xl:bg-white xl:pb-3 2xl:pb-6 2xl:pt-3">
        <div className=" w-4/5 xl:w-full text-left ">
          <h3 className=" text-3xl mt-5 mb-5 ml-4 md:text-4xl lg:text-3xl">
            Our Menu
          </h3>
          <h1 className=" text-xl md:text-5xl lg:text-3xl mt-3 mb-5 ml-4 xl:mb-3">
            Making your guest more delighted with our food.
          </h1>
          <p className="ml-4 md:text-lg lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className=" w-5/6 mt-10 text-left xl:mt-3 ">
          <div className="menu-ad-textbox mb-5">
            <h2 className=" text-3xl md:text-4xl lg:text-3xl xl:text-2xl font-bold ml-4">
              Always Fresh
            </h2>
            <p className="ml-4 md:text-lg lg:text-base xl:text-sm">
              Malesuada elementum curabitur massa pellentesque fames at dui eu
              justo
            </p>
          </div>
          <div className="menu-ad-textbox mb-5">
            <h2 className=" text-3xl md:text-4xl lg:text-3xl xl:text-2xl font-bold ml-4">
              Authentic Japanese Taste
            </h2>
            <p className="ml-4 md:text-lg lg:text-base xl:text-sm">
              Malesuada elementum curabitur massa pellentesque fames at dui eu
              justo
            </p>
          </div>
          <div className="menu-ad-textbox">
            <h2 className=" text-3xl md:text-4xl lg:text-3xl xl:text-2xl font-bold ml-4">
              Premier Ingredients
            </h2>
            <p className="ml-4 md:text-lg lg:text-base xl:text-sm">
              Malesuada elementum curabitur massa pellentesque fames at dui eu
              justo
            </p>
          </div>
        </div>
      </div>

      <div className="menu-picture w-10/12 mt-20 h-96 lg:w-2/3 xl:w-2/5 lg:h-[32rem] lg:mt-0  bg-black ">
        <img
          src="./src/assets/food/food9.jpg"
          className=" w-full h-full object-cover object-center"
          alt="food"
        />
      </div>
    </div>
  );
};

export default Advertisment;
