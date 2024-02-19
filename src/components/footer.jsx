const Footer = () => {
  return (
    <footer className=" w-full relative flex mt-8 flex-col justify-center items-center">
      <div className="contact-icon flex justify-center items-center flex-col w-10/12 mt-8 pb-5 xl:w-2/4 xl:mt-10 ">
        <h2 className="text-5xl xl:text-4xl mb-5 mt-5 font-bold cursor-pointer">CakeDen</h2>
        <p className=" text-2xl xl:text-base mb-6">
          Everything we serve is made in house from the best ingredients.
        </p>
        <hr className="w-1/4 mb-10 h-1 rounded-full bg-red-500" />
        <div className="social-media w-full flex justify-center items-center">
          <img
            src="./src/assets/contact/email.png"
            className=" w-12 h-12 md:w-14 md:h-14 xl:w-10 xl:h-10 "
            alt="feane"
          />
          <img
            src="./src/assets/contact/instagram.png"
            className=" w-12 h-12 md:w-14 md:h-14 xl:w-10 xl:h-10 ml-8 mr-8"
            alt="feane"
          />
          <img
            src="./src/assets/contact/phone.png"
            className=" w-12 h-12 md:w-14 md:h-14 xl:w-10 xl:h-10"
            alt="feane"
          />
        </div>
      </div>
      <div className="footer-text-wrapper w-full h-16 xl:h-24 flex items-center justify-center bg-black mt-28 text-white">
        <p className=" md:text-lg">© 2023 Feane Restaurant. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

//  <div className="contact-wrapper bg-blue-500 w-full relative flex justify-center">
//         <div className="contact-icon w-11/12 flex flex-col justify-center items-center bg-white absolute">
//           <h2 className="text-5xl mb-5 font-bold cursor-pointer">CakeDen</h2>
//           <p className=" text-2xl mb-6">
//             Everything we serve is made in house from the best ingredients.
//           </p>
//           <hr className="w-1/5 mb-5 h-1 rounded-full bg-red-500" />
//           <div class="social-media w-full flex justify-center items-center bg-blue-600">
//             <img src="/src/assets/contact/email.png" className=" w-10 h-16" alt="feane" />
//             <img src="/src/assets/contact/instagram.png" className=" w-10 h-16 ml-5" alt="feane" />
//             <img src="/src/assets/contact/phone.png" className=" w-10 h-16" alt="feane" />
//           </div>
//         </div>
//       </div>
{
  /* <div className="footer-text-wrapper w-full h-1/6 flex items-center justify-center bg-black mt-28 text-white">
        <p>© 2023 Feane Restaurant. All rights reserved</p>
      </div> */
}
