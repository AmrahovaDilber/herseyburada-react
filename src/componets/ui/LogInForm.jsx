import { Link, Navigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doPasswordReset,
} from "../../firebase/auth";
import { useState } from "react";
import google from '../../../public/google.png'
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

   // Forgot Password Functionality
   const handleForgotPassword = async () => {
    if (forgotPasswordEmail) {
      try {
        await doPasswordReset(forgotPasswordEmail);
        notification("A password reset email has been sent to your email.");
      } catch (error) {
        notification("Failed to send reset email. Please check your email.");
      }
    } else {
      notification("Please enter your email to reset the password.");
    }
  };
  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main className="main-content flex space-x-[50px] items-center w-[1200px] mx-auto">
        <form
          onSubmit={handleLoginSubmit(onSubmit)} 
          className="login-form flex flex-col justify-self-start w-[50%]"
          method="post"
        >
          <h1
            className="form-title text-[36px] font-[500] mb-[26px] text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span style={{ fontFamily: "Comfortaa, sans-serif" }}>
              hərşeyburada
            </span>
            -ya daxil ol
          </h1>

          {/* Email Input Block */}
          <div className="input-group mb-[40px]">
            <input
              type="text"
              {...loginUser("email", {
                required: "Please fill in your email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="form-input border-b-[2px] border-b-[#B3B3B3] focus:border-blue-500 outline-0 w-full py-2 text-lg"
              placeholder="Email"
            />
            <p className="text-red-500 text-sm mt-2">
              {loginErrors.email?.message}
            </p>
          </div>

          {/* Password Input Block */}
          <div className="input-group mb-[40px]">
            <input
              type="password"
              {...loginUser("password", {
                required: "Please fill in your password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="form-input border-b-[2px] border-b-[#B3B3B3] focus:border-blue-500 outline-0 w-full py-2 text-lg"
              placeholder="Parol"
            />
            <p className="text-red-500 text-sm mt-2">
              {loginErrors.password?.message}
            </p>
          </div>

          {/* Submit Button and Forgot Password Link */}
          <div className="form-submit flex items-center gap-[87px]">
            <button
              className="submit-btn bg-[#FF7518] hover:bg-[#e07575] text-[#ffffff] px-[48px] h-[56px] mb-[16px] rounded-[4px] cursor-pointer transition-colors"
              type="submit"
            >
              Daxil ol
            </button>
            <p
              onClick={() => setForgotPasswordEmail(email)} 
              className="text-[#FF7518] hover:text-[#e07575] text-[16px] cursor-pointer transition-colors"
              onDoubleClick={handleForgotPassword} 
            >
              Parolu unutmusan?
            </p>
          </div>

          {/* Google Sign-In Button */}
          <div className="google-signin mt-6">
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

          {/* Signup Prompt */}
          <p className="form-bottom opacity-70 mt-6">
            Hesabın yoxdur?
            <Link
              to={"/signup"}
              className="ml-[16px] opacity-100 underline-offset-2 text-blue-500 underline hover:no-underline"
            >
              Qeydiyyatdan keç
            </Link>
          </p>
        </form>

        {/* Image Section */}
        <figure className="w-[600px] h-[650px]">
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
