import { useRef, useEffect } from "react";
import review from "../review";

const Testimonials = () => {

    const testimonialsRef = useRef(null);

    useEffect(() => {
      testimonialsRef.current.scrollLeft = 0;
    }, []);
  

  return (
    <div className="review-section w-full flex  items-center flex-col mt-16 overflow-hidden ">
      <div className="review-sectiion=header flex justify-center items-center flex-col w-3/4 xl:w-1/2 mt-5 md:mt-8 ">
        <h2 className=" text-3xl font-bold">What Our Customers Said</h2>
        <hr className=" w-1/3 md:w-1/5 h-2 rounded-full bg-red-600 mt-3 lg:mt-7 mb-3" />
      </div>
      <div
        ref={testimonialsRef}
        className="testimonials w-11/12 lg:w-9/12 xl:w-7/12 h-96 mt-6 mb-5 gap-3 no-scrollbar flex overflow-scroll "
      >
        {review.map((review) => {
          return (
            <div
              key={review.id}
              className="testimonials-slide min-w-full h-full relative"
            >
              <p className=" text-xl mt-8 md:mt-20 md:text-2xl lg:ml-1 lg:mr-1">
                " {review.text} "
              </p>
              <div className="profile w-full h-1/3 mt-5 flex justify-center items-center flex-col md:flex-row absolute bottom-0 m-auto">
                <div className=" flex justify-center items-center ">
                  <img
                    src={review.img}
                    className=" w-1/3 h-full mt-2 md:w-32 md:h-32 md:mr-8 rounded-full"
                    alt="image"
                  />
                  <ul className="ml-10 md:ml-8">
                    <h2 className=" text-2xl md:text-3xl md:font-bold">
                      {review.name}
                    </h2>{" "}
                    <br />
                    <p className=" md:text-2xl">{review.role}</p>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
