const Contact = () => {
  return (
    <div className="booking-tab w-full lg:w-1/2 flex flex-col justify-start items-center mt-20 pb-5 xl:h-1/2 xl:items-start bg-white ">
      <div className="contact-form w-11/12 text-left xl:ml-8 xl:w-9/12 ">
        <h3 className=" text-red-600 text-2xl md:text-3xl xl:text-2xl mt-4 ml-3 ">
          Reservation by Phone
        </h3>
        <h1 className=" font-bold text-3xl md:text-4xl xl:text-3xl mt-5 ml-3 ">
          Home and Company Event
        </h1>
        <p className=" md:text-lg xl:text-base mt-5 ml-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <hr className=" h-2 mt-5 ml-3 w-1/5 rounded-full bg-red-700" />
      </div>
      <div className="contact-button mt-10 lg:mt-20 lg:w-full ml-3 xl:w-2/3 xl:pb-10 xl:mt-10 xl:ml-8  ">
        <div className="phone-icon w-full h-1/4 flex mt-20 md:w-3/4 ">
          <div className="phone-img w-1/4 h-full flex justify-center items-center">
            <img
              src="/src/assets/contact/phone.png"
              className=" w-3/5 md:w-1/2 lg:w-3/4 xl:w-2/4 h-1/2 lg:h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="text-icon w-3/4 h-full flex flex-col justify-center">
            <h1 className=" font-bold text-3xl xl:text-2xl">HOME PARTY</h1>
            <h1 className=" text-red-500 text-xl mt-2 ">+(62)21 2002-2012</h1>
          </div>
        </div>

        <div className="corporate-phone-icon flex w-full md:w-3/4 h-1/4 mt-10 ">
          <div className="phone-img w-1/4 h-full flex justify-center items-center ">
            <img
              src="/src/assets/contact/phone.png"
              className=" w-3/5 md:w-1/2 h-1/2 lg:w-3/4 xl:w-2/4  lg:h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="text-icon w-3/4 h-full flex flex-col justify-center">
            <h1 className=" font-bold text-3xl xl:text-2xl">OFFICE EVENT</h1>
            <h1 className=" text-red-500 text-xl mt-2   ">+(62)21 2002-2012</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
