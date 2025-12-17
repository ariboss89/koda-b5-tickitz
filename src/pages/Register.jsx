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
      navigate(`/auth/login`);
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
      <main className="relative z-0 min-h-fit bg-[url(../src/assets/bg.png)] bg-cover bg-center before:absolute before:inset-0 before:-z-1 before:bg-black/30">
        <section className="z-20">
          <div className="flex flex-col items-center justify-center rounded-sm">
            <div className="align-center mt-10 flex justify-center text-center">
              <img src={logo} width="50%" height="50%" />
            </div>

            <div className="w-2/2 p-5 md:w-1/2 lg:w-1/3">
              <form
                noValidate
                onSubmit={submitHandler}
                className="mt-10 mb-20 flex flex-col rounded-sm bg-[#ffffff] p-10"
              >
                <div className="align-center mb-10 flex justify-between">
                  <div className="flex h-15 w-32 flex-col items-center justify-center rounded-full bg-[#1D4ED8] text-center text-white">
                    1
                  </div>
                  <input
                    className="w-1/2 border-b-2 border-dashed border-[#DEDEDE] outline-0"
                    disabled
                  />
                  <div className="bg-secondary flex h-15 w-32 flex-col items-center justify-center rounded-full text-center text-white">
                    2
                  </div>
                  <input
                    className="w-1/2 border-b-2 border-dashed border-[#DEDEDE] outline-0"
                    disabled
                  />
                  <div className="bg-secondary flex h-15 w-32 flex-col items-center justify-center rounded-full text-center text-white">
                    3
                  </div>
                </div>

                <label className="text-left">Email</label>
                <div className="mt-5 mb-2 w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={emailInput.value}
                    onChange={emailInput.onChange}
                    className="h-15 w-full rounded-xs border border-[#DEDEDE] pl-5 outline-none"
                    placeholder="Enter your email"
                  />
                  {emailInput.isValid ? (
                    <>
                      <span className="min-h-5 text-white">ok</span>
                    </>
                  ) : (
                    <span className="min-h-5 text-[12px] font-bold text-red-500">
                      {emailInput.error}
                    </span>
                  )}
                </div>
                <label className="text-left">Password</label>
                <div className="mt-2 flex w-full items-center justify-between border border-[#DEDEDE] pr-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={passwordInput.onChange}
                    className="mb-2 h-15 w-full rounded-xs pl-5 outline-none"
                    placeholder="Enter your password"
                    value={passwordInput.value}
                  />

                  <button onClick={visible}>
                    {showPassword == true ? (
                      <img className="h-8 w-8" src={eyeSlash} />
                    ) : (
                      <img className="h-8 w-8" src={eye} />
                    )}
                  </button>
                </div>
                {passwordInput.isValid ? (
                  <>
                    <span className="min-h-10 text-white">ok</span>
                  </>
                ) : (
                  <span className="min-h-10 text-[12px] font-bold text-red-500">
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
                  <span className="min-h-10 text-justify text-[12px] font-bold text-white">
                    ok
                  </span>
                ) : (
                  <span className="min-h-10 text-left text-[12px] font-bold text-red-600">
                    PLEASE CHECKED THE TERMS AND CONDITION
                  </span>
                )}

                <input
                  type="submit"
                  className="mb-5 w-full rounded-xs bg-[#1D4ED8] p-5 text-white"
                  value="Join For Free Now"
                />

                <div className="align-center flex flex-row items-center justify-center">
                  <p className="text-center">
                    Already have an account ?
                    <Link
                      to={"/auth/login"}
                      viewTransition
                      className={"text-primary"}
                    >
                      Login
                    </Link>
                  </p>
                </div>

                <div className="align-center mt-5 mb-5 flex flex-row items-center">
                  <img src={or} />
                </div>

                <div className="align-center flex items-center justify-center gap-10">
                  <div className="flex w-1/2 items-center justify-center bg-[#ffffff] p-2 shadow-sm">
                    <img src={google} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>

                  <div className="flex w-1/2 items-center justify-center bg-[#ffffff] p-2 shadow-sm">
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
