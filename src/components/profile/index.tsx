import "./index.scss";
import { NavBar } from "../navBar";

export function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile_header">
          <NavBar />
        </div>
        <div className="profile_details_wholewrapper">
          <div className="profile_details">
            <span className="profile_details_title">PROFILE</span>
            <div className="profile_details_wrapper">
              <div className="profile_details_name">Name : Sudharsan </div>
              <div className="profile_details_mail">
                {" "}
                E-Mail : sudharsa.selvasekar@divum.in{" "}
              </div>
              <div className="profile_details_password">
                Password : ........{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
