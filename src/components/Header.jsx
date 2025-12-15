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
    navigate(`auth/login`, { replace: true });
  };

  const goToSignUp = () => {
    navigate(`auth/register`, { replace: true });
  };

  const logout = () => {
    localStorage.clear();
    navigate(`/`, { replace: true });
  };

  const email = localStorage.getItem("email");

  return (
    <>
      <header>
        <nav
          className="bg-white fixed top-0 flex justify-between py-5 px-10 items-center shadow-2xs w-full z-20
        md:py-5 md:px-20 "
        >
          <div className="flex justify-center">
            <img className="w-30" src={LogoNav} />
          </div>

          <ul className="hidden md:flex md:justify-between md:gap-5 md:font-mulish md:cursor-pointer">
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
                to={"/movies"}
                className={location.pathname == "/movies" ? "text-primary" : ""}
              >
                Movie
              </Link>
            </li>
            <li onClick={showSwal}>Buy Ticket</li>
          </ul>

          {email != null ? (
            <div className="md:flex md:justify-center md:items-center md:gap-5">
              <p className="text-black first-letter:text-xl">Hi, {email}</p>
              <button
                className="font-mulish rounded-sm p-2 border-2 border-solid bg-primary border-primary text-white"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex md:justify-between md:gap-5">
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

          <div className="flex justify-center items-center md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
