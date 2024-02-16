import { Chef } from "../../Chef";
import profile from "../profile";

const Chefs = () => {
  return (
    <div className="chef-section w-full justify-center items-center flex flex-col mt-10 md:mt-32">
      <div className="profile-heading w-full mt-5 lg:w-8/12 xl:w-6/12 ">
        <h2 className=" text-3xl md:text-4xl md:font-bold">Meet our chef</h2>
        <p className=" text-l mt-5 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="profile-pic w-full flex justify-center items-center flex-col md:flex-row lg:flex-row lg:h-32rem mt-10 gap-4">
        {profile.map((profile) => {
          return (
            <div
              key={profile.id}
              className="chefs-id w-11/12 h-96 md:w-2/5 xl:w-1/4 lg:h-[26rem] 2xl:h-[28rem] 2xl:w-1/5 2xl:ml-3 2xl:mr-3 relative"
            >
              <img
                src={profile.image}
                className=" w-full h-full object-cover  object-center"
                alt="image"
              />
              <h3 className=" w-full absolute bottom-20 text-3xl font-bold text-amber-400">
                {profile.name}
              </h3>
              <p className=" w-full absolute bottom-10 text-2xl font-bold text-white">
                {profile.role}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chefs;
