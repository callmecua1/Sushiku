import { event } from "jquery";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();

  const getName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const booking = () => {
    if (name == 0) {
      alert("Fill the form first");
    } else {
      alert(`Thank you ${name} for your reservation`);
    }
  };

  return (
    <>
      <h2 className=" text-3xl mt-5 mb-5 text-white font-semibold md:text-4xl md:mb-8">
        Reservation Online
      </h2>
      <form
        action=""
        name="booking-form"
        className=" flex flex-wrap justify-center"
      >
        <input
          value={name}
          onChange={(event) => getName(event)}
          type="text"
          placeholder="Your Name"
          className="book-form mb-3"
        />
        <input
          type="text"
          placeholder="Your Phone"
          className="book-form mb-3"
        />
        <input
          type="text"
          placeholder="Number of Table"
          className="book-form mb-3"
        />
        <input type="date" name="" id="" className="book-form mb-3" />
        <input
          type="text"
          placeholder="Select the Time"
          className="book-form mb-3"
        />
        <input
          type="text"
          placeholder="Number of Person"
          className="book-form"
        />
      </form>
      <textarea
        id="book-request"
        className=" reservation-text mt-8 mb-8"
        cols="38"
        rows="10"
        placeholder="Special Request"
      ></textarea>
      <button
        id="book-button"
        type="button"
        className=" text-2xl text-white h-10 bg-red-600"
        onClick={() => booking()}
      >
        Book Now
      </button>
    </>
  );
};

export default Form;
