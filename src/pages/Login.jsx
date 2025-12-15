import React, { useState } from "react";
import eye from "../assets/eye.png";
import eyeSlash from "../assets/eye-slash.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import or from "../assets/or.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginUsers } from "../redux/slices/user.slice";
import store from "../redux/store";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  function visible() {
    setIsError(false);
    setShowPassword(!showPassword);
  }

  const emailInput = useInput("", {
    required: true,
    minLength: 8,
  });

  const passwordInput = useInput("", {
    required: true,
    minLength: 8,
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {};
    Object.assign(newUser, {
      email: emailInput.value,
      password: passwordInput.value,
    });

    if (emailInput != "" && passwordInput != "") {
      dispatch(loginUsers(newUser));
      // console.log(test, "datanya");

      // const currentState = store.getState();
      // console.log(currentState);

      navigate(`/`);
    } else {
      setIsError(true);
    }

    if (passwordInput == "" && emailInput == "") {
      navigate("/");
    }

    emailInput.reset();
    passwordInput.reset();
  };

  // const onChangeHandler = (e) => {
  //   setForm((form) => {
  //     return { ...form, [e.target.name]: e.target.value };
  //   });
  // };

  return (
    <>
      <main className="bg-[url(../assets/bg.png)] bg-cover bg-center">
        <section>
          <div className="flex flex-col justify-center items-center rounded-sm">
            <div className="flex justify-center align-center text-center mt-10">
              <img src={logo} width="50%" height="50%" />
            </div>

            <div className="w-full p-5 md:w-2/3 lg:w-1/3">
              <form
                noValidate
                onSubmit={submitHandler}
                className="flex flex-col mt-8 bg-[#ffffff] p-10 rounded-sm"
              >
                <div className="flex flex-col justify-between align-center mb-10">
                  <div className="font-mulish flex flex-col justify-start items-start text-left text-3xl">
                    Welcome Back 👋
                  </div>
                  <div className="font-mulish flex flex-col justify-start items-start text-left color-[#DEDEDE]">
                    Sign in with your data that you entered during your
                    registration
                  </div>
                </div>

                <label className="text-left">Email</label>
                <div className="mt-5 w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={emailInput.value}
                    onChange={emailInput.onChange}
                    className="h-15 w-full border border-[#DEDEDE] rounded-xs pl-5 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <label className="text-left mt-5">Password</label>
                <div className="mt-5 w-full  flex justify-between items-center pr-2 border border-[#DEDEDE]">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={passwordInput.value}
                    onChange={passwordInput.onChange}
                    className="h-15 w-full rounded-xs pl-5 outline-none"
                    placeholder="Enter your password"
                  />
                  <button onClick={visible}>
                    {showPassword == true ? (
                      <img className="w-8 h-8" src={eyeSlash} />
                    ) : (
                      <img className="w-8 h-8" src={eye} />
                    )}
                  </button>
                </div>

                <div className="flex flex-row justify-end align-end items-end text-[#1D4ED8]">
                  <p className="text-right mt-5">Forgot your password ?</p>
                </div>

                {isError == true ? (
                  <span className="text-red-600 font-bold text-justify mt-2 min-h-10">
                    Please input the correct email and password !!
                  </span>
                ) : (
                  <span className="text-red-600 font-bold text-justify mt-2 min-h-10"></span>
                )}

                <input
                  type="submit"
                  className="text-white w-full rounded-sm bg-[#1D4ED8] mt-2 mb-5 p-5"
                  value="Login"
                />

                <div className="flex flex-row align-center items-center mb-5">
                  <img src={or} />
                </div>

                <div className="flex justify-center align-center items-center gap-10">
                  <div className="flex p-2 items-center justify-center bg-[#ffffff] shadow-sm w-1/2">
                    <img src={fb} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>

                  <div className="flex p-2 items-center justify-center bg-[#ffffff] shadow-sm w-1/2">
                    <img src={google} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
