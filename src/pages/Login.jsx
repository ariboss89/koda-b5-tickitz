import React, { useState } from "react";
import eye from "../assets/eye.png";
import eyeSlash from "../assets/eye-slash.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import or from "../assets/or.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  function visible() {
    setIsError(false);
    setShowPassword(!showPassword);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (form.email == email && form.password == password) {
      navigate(`/`);
    } else {
      setIsError(true);
    }

    setForm({ email: "", password: "" });
  };

  const onChangeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

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
                    value={form.email}
                    onChange={onChangeHandler}
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
