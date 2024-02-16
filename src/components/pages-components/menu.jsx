import firstmenu from "../firstmenu";
import secondmenu from "../secondmenu";

const Menu = () => {


  const filtermenu = firstmenu.filter((menu) => menu.id);
  const filteroldmenu = secondmenu.filter((menu) => menu.id);


  return (
    <>
      <div className="first-menu-table lg:w-1/2 bg-gray-300">
        <table className=" w-full">
          <tbody>
            {filtermenu.map((menu) => {
              return (
                <tr key={menu.id} className="table-row w-3/4 text-left">
                  <td className="table-cell mt-3">
                    <h6 className="menu-name md:text-xl font-semibold mt-3 ml-5">
                      {menu.name}
                    </h6>
                    <p className="menu-description md:text-lg mt-1 mb-5 ml-5">
                      {menu.description}
                    </p>
                  </td>
                  <td className=" pr-3 flex justify-center">
                    <h6 className="menu-price md:text-xl mt-3 font-semibold text-red-600">
                      ${menu.price}
                    </h6>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="second-menu-table lg:w-1/2 bg-gray-300 mt-6 lg:mt-0">
        <table className=" w-full ">
          <tbody>
            {filteroldmenu.map((menu) => {
              return (
                <tr key={menu.id} className="table-row w-3/4 text-left">
                  <td className="table-cell mt-3">
                    <h6 className="menu-name md:text-xl font-semibold mt-3 ml-5">
                      {menu.name}
                    </h6>
                    <p className="menu-description md:text-lg mt-1 mb-5 ml-5">
                      {menu.description}
                    </p>
                  </td>
                  <td className=" pr-3 flex justify-center">
                    <h6 className="menu-price md:text-xl font-semibold mt-3 text-red-600">
                      ${menu.price}
                    </h6>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;
