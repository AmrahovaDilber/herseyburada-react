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
      <main className="main-content flex flex-col justify-center w-full lg:space-x-[50px] items-center max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <Link to="/">
          <figure className="w-[200px] h-[50px] mb-4">
            <img
              src="./herseyburada.svg"
              alt="Hərşeyburada Logo"
              className="object-contain w-full h-full"
            />
          </figure>
        </Link>

        <form
          onSubmit={handleLoginSubmit(onSubmit)}
          className="login-form bg-white shadow-lg border rounded-lg p-8 w-full lg:w-1/2 mb-12"
          method="post"
        >
        
          {/* Email Input */}
          <div className="input-group mb-5">
            <label htmlFor="email" className="block text-gray-600 text-lg mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...loginUser("email", {
                required: "Zəhmət olmasa emaili daxil edin",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Yanlış email formatı",
                },
              })}
              className="form-input border border-gray-300 focus:border-[#ff9130] focus:ring focus:ring-[#ff9130]/50 outline-none w-full py-3 px-4 rounded-md text-lg"
              placeholder="Email"
            />
            <p className="text-red-500 text-sm mt-1">
              {loginErrors.email?.message}
            </p>
          </div>

          {/* Password Input */}
          <div className="input-group mb-5">
            <label
              htmlFor="password"
              className="block text-gray-600 text-lg mb-2"
            >
              Parol
            </label>
            <input
              type="password"
              id="password"
              {...loginUser("password", {
                required: "Zəhmət olmasa parolunuzu daxil edin",
                minLength: {
                  value: 6,
                  message: "Parol ən azı 6 simvol uzunluğunda olmalıdır",
                },
              })}
              className="form-input border border-gray-300 focus:border-[#ff9130] focus:ring focus:ring-[#ff9130]/50 outline-none w-full py-3 px-4 rounded-md text-lg"
              placeholder="Parol"
            />
            <p className="text-red-500 text-sm mt-1">
              {loginErrors.password?.message}
            </p>
          </div>

          {/* Submit Button and Forgot Password */}
          <div className="form-submit flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <button
              className="submit-btn bg-[#ff9130] hover:bg-[#e08430] text-white py-3 px-8 rounded-md cursor-pointer transition-all w-full sm:w-auto shadow-md"
              type="submit"
            >
              Daxil ol
            </button>
            <p
              onClick={() => setForgotPasswordEmail(email)}
              className="text-[#ff9130] hover:text-[#e08430] text-sm cursor-pointer transition-colors text-center sm:text-right mt-4 sm:mt-0"
              onDoubleClick={handleForgotPassword}
            >
              Parolu unutmusan?
            </p>
          </div>

          {/* Google Sign-In */}
          <div className="google-signin mb-6">
            <button
              onClick={onGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 px-5 rounded-md hover:bg-gray-50 transition-all shadow-sm"
            >
              <img src={google} alt="Google" className="w-5 h-5" />
              <span className="text-gray-600">Google ilə daxil olun</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="form-bottom opacity-80 text-center sm:text-left">
            Hesabın yoxdur?
            <Link
              to={"/signup"}
              className="ml-2 opacity-100 text-[#ff9130] hover:text-[#e08430] underline"
            >
              Qeydiyyatdan keç
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default LoginForm;
