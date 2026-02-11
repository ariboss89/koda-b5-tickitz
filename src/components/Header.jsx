import { Link, useNavigate } from "react-router";
import LogoNav from "../assets/logo-nav.png";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/slices/user.slice";
//import { logout } from "../redux/slices/user.slice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const goToSignIn = () => {
    navigate(`/auth/login`, { replace: true });
  };

  const goToSignUp = () => {
    navigate(`/auth/register`, { replace: true });
  };

  const signOut = () => {
    dispatch(userActions.logoutUserThunk(users.fetchStatus.nowLogin.token));
    navigate(`/`);
  };

  // useEffect(() => {
  //   (() => {
  //     console.log(users.fetchStatus.nowLogin.data.token, "err");
  // if (usersState.fetchStatus.nowLogin.errorMessage) {
  //   setType("error");
  //   setTitle("Error Message");
  //   setMessage(usersState.fetchStatus.nowLogin.errorMessage);
  //   setIsModalOpen(true);
  // } else if (usersState.isLogin) {
  //   navigate("/");
  // }
  //setErr(usersState.fetchStatus.nowLogin.errorMessage);
  //   })();
  // }, [usersState.fetchStatus.nowLogin.errorMessage]);

  return (
    <>
      <header>
        <nav className="fixed top-0 z-20 flex w-full items-center justify-between bg-white/60 px-10 py-5 shadow-2xs backdrop-blur-md md:px-20 md:py-5">
          <div className="flex justify-center">
            <img className="w-30" src={LogoNav} />
          </div>

          <ul className="md:font-mulish hidden md:flex md:cursor-pointer md:justify-between md:gap-5">
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
            {/* <li onClick={showSwal}>Buy Ticket</li> */}
            <Link
              to={"/movies"}
              className={location.pathname == "/movies" ? "text-primary" : ""}
            >
              Buy Ticket
            </Link>
          </ul>

          {users.email != "" && users.isLogin != false ? (
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <p className="text-black first-letter:text-xl">
                Hi, {users.email}
              </p>
              <button
                className="font-mulish bg-primary border-primary rounded-sm border-2 border-solid p-2 text-white"
                onClick={signOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex md:justify-between md:gap-5">
              <button
                className="font-mulish border-primary rounded-sm border-2 border-solid p-2"
                onClick={goToSignIn}
              >
                Sign In
              </button>
              <button
                className="font-mulish bg-primary border-primary rounded-sm border-2 border-solid p-2 text-white"
                onClick={goToSignUp}
              >
                Sign Up
              </button>
            </div>
          )}

          <div className="flex items-center justify-center md:hidden lg:hidden">
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
