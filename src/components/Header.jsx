import { Link, useNavigate } from "react-router";
import LogoNav from "../assets/logo-nav.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Header() {
  const navigate = useNavigate();

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Information</i>,
      text: "Coming Soon",
    });
  };

  const goToSignIn = () => {
    navigate(`/Login`);
  };

  const goToSignUp = () => {
    navigate(`/Register`);
  };

  const logout = () => {
    localStorage.clear();
    navigate(`/Login`);
  };

  const email = localStorage.getItem("email");
  console.log(email);

  return (
    <>
      <header>
        <nav className="bg-white fixed top-0 flex justify-between py-5 px-20 items-center shadow-2xs w-full z-20">
          <div className="flex justify-center">
            <img className="w-30" src={LogoNav} />
          </div>

          <ul className="flex justify-between gap-5 font-mulish cursor-pointer">
            <li>
              <Link
                to={"/"}
                className={location.pathname === "/" ? "text-primary" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/Movies"}
                className={location.pathname == "/Movies" ? "text-primary" : ""}
              >
                Movie
              </Link>
            </li>
            <li onClick={showSwal}>Buy Ticket</li>
          </ul>

          {email != "" ? (
            <div className="flex justify-center items-center gap-5">
              <p className="text-black first-letter:text-xl">Hi, {email}</p>
              <button
                className="font-mulish rounded-sm p-2 border-2 border-solid bg-primary border-primary text-white"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-between gap-5">
              <button
                className="font-mulish rounded-sm border-2 border-solid border-primary p-2"
                onClick={goToSignIn}
              >
                Sign In
              </button>
              <button
                className="font-mulish rounded-sm p-2 border-2 border-solid bg-primary border-primary text-white"
                onClick={goToSignUp}
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
