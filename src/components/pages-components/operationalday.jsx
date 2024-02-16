import operational from "../operational";

const Operationalday = () => {
  const filterdays = operational.filter((day) => day.id);

  return (
    <div className="operational w-full flex justify-center items-center flex-col mt-10 md:mt-28 lg:flex-row lg:gap-5 xl:gap-10">
      <div className="operational-hours w-10/12 text-left lg:w-1/2 xl:w-2/6 xl:mr-5 ">
        <h2 className=" text-3xl mt-5 mb-5 md:text-4xl lg:text-3xl">
          Opening Hours
        </h2>
        <div className="days-wrapper">
          {filterdays.map((day) => {
            return (
              <div key={day.id} className="days xl:mt-3 xl:mb-3 relative">
                <h3 id="days" className=" text-2xl md:text-3xl ml-3 lg:text-xl">
                  {day.day}
                </h3>
                <p
                  id="time"
                  className=" md:text-lg lg:text-base mt-2 ml-3 xl:absolute xl:right-3 xl:top-0"
                >
                  {day.times}
                </p>
                <hr className=" mb-3 bg-black rounded-full lg:w-3/4 xl:w-full xl:mt-4" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="some-ads w-full h-96 mt-8 lg:w-1/2 lg:h-[32rem] xl: xl:w-2/6 xl:ml-5">
        <img
          src="/src/assets/food/food4.jpg"
          className=" w-full h-full object-cover object-center"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Operationalday;

