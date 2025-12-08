import React, { useState } from "react";

import Line from "../assets/line.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import or from "../assets/or.png";
import logo from "../assets/logo.png";
import eye from "../assets/eye.png";
import eyeSlash from "../assets/eye-slash.png";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function visible() {
    setShowPassword(!showPassword);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (form.email != "" && form.password != "" && isChecked != false) {
      localStorage.setItem("email", form.email);
      localStorage.setItem("password", form.password);
      navigate(`/Login`);
    } else {
      //setIsShowError(true);
      setIsChecked(false);
      setIsError(true);
    }
    setForm({ email: "", password: "" });
  };

  const onCheckedHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  const onChangeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <main className="bg-[url(../src/assets/bg.png)] bg-cover">
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
                  <div className="flex flex-col justify-end items-end">
                    <img src={Line} alt="line 2" />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-[#1D4ED8] rounded-full text-white">
                    2
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <img src={Line} alt="line 2" />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-[#1D4ED8] rounded-full text-white">
                    3
                  </div>
                </div>

                <label className="text-left">Email</label>
                <div className="mt-5 w-full mb-5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChangeHandler}
                    className="h-15 w-full border border-[#DEDEDE] rounded-xs pl-5 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <label className="text-left mt-5">Password</label>
                <div className="mt-5 w-full  flex justify-between items-center pr-2 border border-[#DEDEDE] ">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={onChangeHandler}
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

                <div className="flex mt-5">
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
                {isError == true ? (
                  <span className="text-red-600 font-bold text-justify mt-2 min-h-10">
                    Please checked the terms and condition
                  </span>
                ) : (
                  <span className="text-red-600 font-bold text-justify mt-2 min-h-10"></span>
                )}

                <input
                  type="submit"
                  className="text-white w-full rounded-xs bg-[#1D4ED8] mb-5 p-5"
                  value="Join For Free Now"
                />

                <div className="flex flex-row justify-center align-center items-center">
                  <p className="text-center">
                    Already have an account ? <a href="login.html">Log in</a>
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
