const About = () => {
  return (
    <>
      <div className="about-textbox w-full text-left text-wrap md:w-11/12 lg:w-2/5 lg:mr-5">
        <h3 className=" text-2xl ml-3 mb-4 text-red-500 xl:ml-8">WHO WE ARE</h3>
        <h2 className="text-3xl ml-3 mb-4 xl:ml-8">
          Japanese Cuisines & Sushi Bar.
        </h2>
        <span>
          <p className=" ml-3 mb-3 xl:ml-8">
            Placerat dictum curabitur ridiculus laoreet tortor. Ipsum
            pellentesque inceptos porta phasellus quisque cubilia nullam
            vestibulum. Nunc dis eros congue et eleifend natoque.
          </p>
          <p className=" ml-3 mb-3 xl:ml-8">
            Placerat dictum curabitur ridiculus laoreet tortor. Ipsum
            pellentesque inceptos porta phasellus quisque cubilia nullam
            vestibulum. Nunc dis eros congue et eleifend natoque.
          </p>
        </span>
        <button className=" ml-3 mt-6 text-white xl:ml-8 ">Learn More</button>
      </div>

      <div className="about-image w-full h-80 flex justify-center mt-6 lg:w-3/5 lg:h-96">
        <div className="left-img about-img xl:w-2/5">
          <img
            src="./src/assets/food/food9.jpg"
            className=" w-full h-full object-cover object-center"
            alt="image"
          />
        </div>
        <div className="right-img about-img xl:w-2/5">
          <img
            src="./src/assets/img/salmon.jpg"
            className=" w-full h-full object-cover object-center"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default About;
