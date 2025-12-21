import React, { useState } from "react";
import eye from "../assets/eye.png";
import eyeSlash from "../assets/eye-slash.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import or from "../assets/or.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/user.slice";

function ForgotPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

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

    const checkUser = users.accounts.find((x) => x.email == emailInput.value);
    console.log(checkUser, "user");

    if (checkUser != null) {
      if (
        checkUser.email == emailInput.value &&
        checkUser.password == passwordInput.value
      ) {
        dispatch(loginUser(newUser));
        navigate("/");
      } else {
        console.log("Password dan username salah");
      }
    }

    emailInput.reset();
    passwordInput.reset();
  };

  return (
    <>
      <main className="bg-[url(../assets/bg.png)] bg-cover bg-center">
        <section>
          <div className="flex flex-col items-center justify-center rounded-sm">
            <div className="align-center mt-10 flex justify-center text-center">
              <img src={logo} width="50%" height="50%" />
            </div>

            <div className="w-full p-5 md:w-2/3 lg:w-1/3">
              <form
                noValidate
                onSubmit={submitHandler}
                className="mt-8 flex flex-col rounded-sm bg-[#ffffff] p-10"
              >
                <div className="align-center mb-10 flex flex-col justify-between">
                  <div className="font-mulish flex flex-col items-start justify-start text-left text-3xl">
                    Forgot Password
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
                    className="h-15 w-full rounded-xs border border-[#DEDEDE] pl-5 outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                {isError == true ? (
                  <span className="mt-2 min-h-10 text-justify font-bold text-red-600">
                    Please input the correct email and password !!
                  </span>
                ) : (
                  <span className="mt-2 min-h-10 text-justify font-bold text-red-600"></span>
                )}

                <input
                  type="submit"
                  className="mt-2 mb-5 w-full rounded-sm bg-[#1D4ED8] p-5 text-white"
                  value="Forgot Password"
                />

                <div className="align-center mb-5 flex flex-row items-center">
                  <img src={or} />
                </div>

                <div className="align-center flex items-center justify-center gap-10">
                  <div className="flex w-1/2 items-center justify-center bg-[#ffffff] p-2 shadow-sm">
                    <img src={fb} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>

                  <div className="flex w-1/2 items-center justify-center bg-[#ffffff] p-2 shadow-sm">
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

export default ForgotPassword;
