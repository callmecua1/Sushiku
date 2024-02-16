export const Chef = (props) => {
  return (
    <div className="chefs-id w-11/12 h-96 relative">
      <img
        src={props.img}
        className=" w-full h-full object-cover  object-center"
        alt="image"
      />
      <h3 className=" w-full absolute bottom-20 text-3xl font-bold text-amber-400">{props.name}</h3>
      <p className=" w-full absolute bottom-10 text-2xl font-bold">{props.role}</p>
    </div>
  );
};
