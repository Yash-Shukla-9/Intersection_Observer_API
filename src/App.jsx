import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AllApi } from "./Data/Data";
const dimage =
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const App = () => {
  const [data, setData] = useState(AllApi);

  console.log(data);

  return (
    <>
      <header>
        <nav>
          <ul className="flex bg-black text-white p-4 gap-6">
            <Link to="/Home">
              <li className="list">Home</li>
            </Link>
            <Link to="/About">
              <li className="list">About</li>
            </Link>
            <Link to="/Contact">
              <li className="list">ContactUs</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Outlet />

      {data.map((item, index) => {
        return (
          <img
            src={
              item?.image
                ? item.image
                : "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

              // item.image ?? dimag
            }
            key={index}
            width="200"
            height="200"
            alt=""
          />
        );
      })}

      {/* <img
        src={
          data
            ? "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            : "https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg"
        }
        width="200"
        height="200"
        alt=""
      /> */}
    </>
  );
};

export default App;
