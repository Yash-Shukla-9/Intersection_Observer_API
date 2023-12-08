import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const App = () => {
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
    </>
  );
};

export default App;
