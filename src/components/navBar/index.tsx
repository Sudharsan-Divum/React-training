import { Profile } from "../profile";
import "./index.scss";
import user from "../../images/userIcon.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="header_link-wrapper">
          <Link to="/" className="header_link-text">
            {" "}
            MobX{" "}
          </Link>
          <Link to="/query" className="header_link-text">
            {" "}
            React Query{" "}
          </Link>
          <Link className="header_link-text" to={"/rick-and-morty"}>
            {" "}
            Rick And Morty{" "}
          </Link>
          <Link to="/posts" className="header_link-text">
            {" "}
            Posts{" "}
          </Link>
          <Link to="/profile">
            <img src={user} className="user-img" />
          </Link>
        </div>
      </div>
    </>
  );
};
