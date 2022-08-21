import { Link, Outlet } from "react-router-dom";

import reactLogo from "../assets/react.svg";

const Navigation = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="/" target="_blank">
          <img
            src={reactLogo}
            className="logo react logo-spin"
            alt="React logo"
          />
        </a>
        <h1>React Notes</h1>
      </div>
      <nav style={{ margin: "24px" }}>
        <Link style={{ margin: "8px" }} to="notes">
          Notes
        </Link>
        <Link style={{ margin: "8px" }} to="/">
          Todo
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
