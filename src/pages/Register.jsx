import React, { useState } from "react";

import Line from "../assets/line.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import or from "../assets/or.png";
import logo from "../assets/logo.png";
import eye from "../assets/eye.png";
import eyeSlash from "../assets/eye-slash.png";
import { Link, useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/slices/user.slice";

function Register() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  function visible() {
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
    if (
      emailInput.value != "" &&
      passwordInput.value != "" &&
      isChecked != false
    ) {
      const newUser = {};
      Object.assign(newUser, {
        email: emailInput.value,
        password: passwordInput.value,
        isLogin: false,
      });
      dispatch(addUsers(newUser));
      //navigate(`auth/login`);
    } else {
      setIsChecked(false);
    }
    emailInput.reset();
    passwordInput.reset();
  };

  const onCheckedHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <main className="bg-[url(../src/assets/bg.png)] bg-cover bg-center">
        <section>
          <div className="flex flex-col justify-center items-center rounded-sm">
            <div className="flex justify-center align-center text-center mt-10">
              <img src={logo} width="50%" height="50%" />
            </div>

            <div className="w-2/2 p-5 md:w-1/2 lg:w-1/3">
              <form
                noValidate
                onSubmit={submitHandler}
                className="flex flex-col mt-10 bg-[#ffffff] p-10 rounded-sm mb-20 "
              >
                <div className="flex justify-between align-center mb-10">
                  <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-[#1D4ED8] rounded-full text-white">
                    1
                  </div>
                  <input
                    className="border-b-2 border-dashed w-1/2 outline-0 border-[#DEDEDE]"
                    disabled
                  />
                  <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-secondary rounded-full text-white">
                    2
                  </div>
                  <input
                    className="border-b-2 border-dashed w-1/2 outline-0 border-[#DEDEDE]"
                    disabled
                  />
                  <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-secondary rounded-full text-white">
                    3
                  </div>
                </div>

                <label className="text-left">Email</label>
                <div className="mt-5 w-full mb-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={emailInput.value}
                    onChange={emailInput.onChange}
                    className="h-15 w-full border border-[#DEDEDE] rounded-xs pl-5 outline-none"
                    placeholder="Enter your email"
                  />
                  {emailInput.isValid ? (
                    <>
                      <span className="min-h-5 text-white">ok</span>
                    </>
                  ) : (
                    <span className="text-[12px] text-red-500 font-bold min-h-5">
                      {emailInput.error}
                    </span>
                  )}
                </div>
                <label className="text-left">Password</label>
                <div className="mt-2 w-full  flex justify-between items-center pr-2 border border-[#DEDEDE] ">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={passwordInput.onChange}
                    className="h-15 w-full rounded-xs pl-5 outline-none mb-2"
                    placeholder="Enter your password"
                    value={passwordInput.value}
                  />

                  <button onClick={visible}>
                    {showPassword == true ? (
                      <img className="w-8 h-8" src={eyeSlash} />
                    ) : (
                      <img className="w-8 h-8" src={eye} />
                    )}
                  </button>
                </div>
                {passwordInput.isValid ? (
                  <>
                    <span className="min-h-10 text-white">ok</span>
                  </>
                ) : (
                  <span className=" text-[12px] text-red-500 font-bold min-h-10">
                    {passwordInput.error}
                  </span>
                )}

                <div className="flex">
                  <input
                    name="agree"
                    type="checkbox"
                    checked={isChecked}
                    onChange={onCheckedHandler}
                  />

                  <label className="pl-5">
                    I agree to terms and conditions
                  </label>
                </div>
                {isChecked == true ? (
                  <span className="text-[12px] font-bold text-justify min-h-10 text-white">
                    ok
                  </span>
                ) : (
                  <span className="text-[12px] text-red-600 font-bold text-left min-h-10">
                    PLEASE CHECKED THE TERMS AND CONDITION
                  </span>
                )}

                <input
                  type="submit"
                  className="text-white w-full rounded-xs bg-[#1D4ED8] mb-5 p-5"
                  value="Join For Free Now"
                />

                <div className="flex flex-row justify-center align-center items-center">
                  <p className="text-center">
                    Already have an account ?
                    <Link
                      to={"auth/login"}
                      viewTransition
                      className={"text-primary"}
                    >
                      Login
                    </Link>
                  </p>
                </div>

                <div className="flex flex-row align-center items-center mt-5 mb-5">
                  <img src={or} />
                </div>

                <div className="flex justify-center align-center items-center gap-10">
                  <div className="flex p-2 items-center justify-center bg-[#ffffff] shadow-sm w-1/2">
                    <img src={google} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>

                  <div className="flex p-2 items-center justify-center bg-[#ffffff] shadow-sm w-1/2">
                    <img src={fb} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default Register;
