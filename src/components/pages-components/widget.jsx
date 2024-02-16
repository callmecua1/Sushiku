const Widget = () => {
  return (
    <>
      <div className=" widget seafood w-11/12 lg:w-3/4 lg:mb-0 mb-5 relative flex justify-center items-center">
        <img
          src="/src/assets/img/sushiwide.jpg"
          className=" w-full h-full object-cover object-center"
          alt="image"
        />
        <div className="widget-textbox w-3/4 h-1/3 bg-white absolute bottom-0 my-auto lg:right-0">
          <h3 className=" text-2xl md:text-3xl lg:text-2xl font-bold mb-4 text-red-500">
            Kura Roll
          </h3>
          <p className=" md:text-2xl lg:text-base">
            Feugiat letius tempor efficitur libero etiam fames conubia lobortis
            dignissim
          </p>
        </div>
      </div>
      <div className=" widget onigiri bg-black w-11/12 lg:w-3/4 lg:mb-0 mb-5 relative flex justify-center items-center">
        <img
          src="/src/assets/img/salmon.jpg"
          className=" w-full h-full object-cover object-center"
          alt="image"
        />
        <div className="widget-textbox w-3/4 h-1/3 bg-white absolute bottom-0 my-auto lg:right-0">
          <h3 className=" text-xl md:text-3xl lg:text-2xl font-bold mb-4 text-red-500">
            Seafood Dish
          </h3>
          <p className=" md:text-xl lg:text-base">
            Feugiat letius tempor efficitur libero etiam fames conubia lobortis
            dignissim
          </p>
        </div>
      </div>
      <div className=" widget ramen w-11/12 lg:w-3/4 relative flex justify-center items-center">
        <img
          src="/src/assets/img/ramen.jpg"
          className=" w-full h-full object-cover object-center"
          alt="image"
        />
        <div className="widget-textbox w-3/4 h-1/3 bg-white absolute bottom-0 my-auto lg:right-0">
          <h3 className=" text-2xl md:text-3xl lg:text-2xl font-bold mb-4 text-red-500">
            Miso Ramen
          </h3>
          <p className=" md:text-xl lg:text-base">
            Feugiat letius tempor efficitur libero etiam fames conubia lobortis
            dignissim
          </p>
        </div>
      </div>
    </>
  );
};

export default Widget;
