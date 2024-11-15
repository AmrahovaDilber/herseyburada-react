import { Link, Navigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doPasswordReset,
} from "../../firebase/auth";
import { useState } from "react";
import google from "../../../public/google.png";
import { notification } from "../../utils/helper";

const LoginForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const {
    loginUser,
    handleLoginSubmit,
    loginErrors,
    userLoggedIn,
    watchLogin,
  } = useContextApp();
  const email = watchLogin("email");
  const password = watchLogin("password");

  async function onSubmit(data) {
    console.log(data);
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  }

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (err) {
        console.error(err);
        setIsSigningIn(false);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (forgotPasswordEmail) {
      try {
        await doPasswordReset(forgotPasswordEmail);
        notification("A password reset email has been sent to your email.");
      } catch (error) {
        notification("Failed to send reset email. Please check your email.");
      }
    } else {
      notification("Şifrəni sıfırlamaq üçün e-poçtunuzu daxil edin.");
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main className="main-content flex flex-col lg:flex-row lg:space-x-[50px] items-center w-full max-w-7xl mx-auto px-4 sm:px-0 py-8">
        <form
          onSubmit={handleLoginSubmit(onSubmit)}
          className="login-form flex flex-col justify-self-start w-full lg:w-1/2 mb-8 lg:mb-0"
          method="post"
        >
          <h1
            className="form-title text-2xl lg:text-[36px] font-[500] mb-6 lg:mb-[26px] text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span style={{ fontFamily: "Comfortaa, sans-serif" }}>
              hərşeyburada
            </span>
            -ya daxil ol
          </h1>

          <div className="input-group mb-6 lg:mb-[40px]">
            <input
              type="text"
              {...loginUser("email", {
                required: "Zəhmət olmasa emaili daxil edin",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="form-input border-b-[2px] bg-transparent border-b-[#B3B3B3] focus:border-blue-500 outline-0 w-full py-2 text-lg"
              placeholder="Email"
            />
            <p className="text-red-500 text-sm mt-2">
              {loginErrors.email?.message}
            </p>
          </div>

          <div className="input-group mb-6 lg:mb-[40px]">
            <input
              type="password"
              {...loginUser("password", {
                required: "Zəhmət olmasa parolunuzu daxil edin",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="form-input border-b-[2px] bg-transparent border-b-[#B3B3B3] focus:border-blue-500 outline-0 w-full py-2 text-lg"
              placeholder="Parol"
            />
            <p className="text-red-500 text-sm mt-2">
              {loginErrors.password?.message}
            </p>
          </div>

          <div className="form-submit flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <button
              className="submit-btn bg-[#FF7518] hover:bg-[#e07575] text-[#ffffff] px-[48px] h-[56px] mb-4 sm:mb-0 rounded-[4px] cursor-pointer transition-colors w-full sm:w-auto"
              type="submit"
            >
              Daxil ol
            </button>
            <p
              onClick={() => setForgotPasswordEmail(email)}
              className="text-[#FF7518] hover:text-[#e07575] text-[16px] cursor-pointer transition-colors text-center sm:text-right"
              onDoubleClick={handleForgotPassword}
            >
              Parolu unutmusan?
            </p>
          </div>

          <div className="google-signin mb-6">
            <button
              onClick={onGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              <img
                src={google}
                alt="Google"
                className="w-6 h-6 bg-transparent"
              />
              <span className="text-gray-600">Sign in with Google</span>
            </button>
          </div>

          <p className="form-bottom opacity-70 text-center sm:text-left">
            Hesabın yoxdur?
            <Link
              to={"/signup"}
              className="ml-[16px] opacity-100 underline-offset-2 text-blue-500 underline hover:no-underline"
            >
              Qeydiyyatdan keç
            </Link>
          </p>
        </form>

        <figure className="w-full lg:w-1/2 h-[300px] lg:h-[650px]">
          <img
            className="w-full h-full object-cover"
            src="/login-register.svg"
            alt="Login illustration"
          />
        </figure>
      </main>
    </>
  );
};

export default LoginForm;