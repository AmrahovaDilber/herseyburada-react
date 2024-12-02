import { Link, Navigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import {
  doSignInWithEmailAndPassword,
  // doSignInWithGoogle,
  doPasswordReset,
} from "../../firebase/auth";
import { useState } from "react";
// import google from "../../../public/google.png";
import { notification } from "../../utils/helper";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const {
    loginUser,
    handleLoginSubmit,
    loginErrors,
    userLoggedIn,
    watchLogin,
    darkMode
  } = useContextApp();
  const email = watchLogin("email");
  const password = watchLogin("password");

  async function onSubmit(data) {
    console.log(data);
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        notification("Uğurla daxil oldunuz!");
      } catch (error) {
        console.error("Daxilolma xətası:", error);
        notification("Daxil olmaq alınmadı. Lütfən, məlumatları yoxlayın.");
      } finally {
        setIsSigningIn(false);
      }
    }
  }

  // const onGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   if (!isSigningIn) {
  //     setIsSigningIn(true);
  //     try {
  //       await doSignInWithGoogle();
  //     } catch (err) {
  //       console.error("Google ilə daxil olarkən xəta:", err);
  //       notification("Google ilə daxil olmaq alınmadı. Lütfən, yenidən cəhd edin.");
  //     } finally {
  //       setIsSigningIn(false);
  //     }
  //   }
  // };
  

  const handleForgotPassword = async () => {
    if (forgotPasswordEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(forgotPasswordEmail)) {
        notification("Düzgün formatda e-poçt daxil edin.");
        return;
      }
      try {
        await doPasswordReset(forgotPasswordEmail);
        notification("E-poçtunuza parol sıfırlama e-poçtu göndərildi.");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          notification("Bu e-poçt ünvanı ilə istifadəçi tapılmadı.");
        } else if (error.code === "auth/invalid-email") {
          notification("Düzgün formatda e-poçt daxil edin.");
        } else {
          notification(`Sıfırlama e-poçtu göndərmək alınmadı. Xəta: ${error.message}`);
        }
      }
    } else {
      notification("Şifrəni sıfırlamaq üçün e-poçtunuzu daxil edin.");
    }
  };
  

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main
        className={`flex flex-col justify-center items-center min-h-screen ${darkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-gray-700"} px-4 sm:px-0`}
      >
        <div
          className={` shadow-lg border rounded-lg p-8 w-full max-w-[550px] mx-auto my-8 ${darkMode ? "bg-[#1a1a1a] border-[#444]" : "border-gray-300 bg-white"}`}
        >
          <Link to="/">
            <figure className="w-[180px] mb-5 mx-auto">
              <img
                src="./herseyburada.svg"
                alt="Hərşeyburada Logo"
                className="object-contain w-full h-full"
              />
            </figure>
          </Link>

          <h2 className={`text-center mb-6 font-semibold text-2xl ${darkMode ? "text-white" : "text-gray-700"}`}>
            Daxil ol
          </h2>
          <form
            onSubmit={handleLoginSubmit(onSubmit)}
            className="space-y-6"
            method="post"
          >
            <div className="input-group mb-5">
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
                className={`form-input border focus:ring focus:ring-[#ff9130]/50 outline-none w-full py-3 px-4 rounded-md text-lg ${darkMode ? "bg-[#333] border-[#444] text-white focus:border-[#ff9130]" : "bg-white border-gray-300 text-gray-700 focus:border-[#ff9130]"}`}
                placeholder="Email"
              />
              <p className="text-red-500 text-sm mt-1">
                {loginErrors.email?.message}
              </p>
            </div>

      
            <div className="input-group mb-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...loginUser("password", {
                  required: "Zəhmət olmasa parolunuzu daxil edin",
                  minLength: {
                    value: 6,
                    message: "Parol ən azı 6 simvol uzunluğunda olmalıdır",
                  },
                })}
                className={`form-input border focus:ring focus:ring-[#ff9130]/50 outline-none w-full py-3 px-4 rounded-md text-lg ${darkMode ? "bg-[#333] border-[#444] text-white focus:border-[#ff9130]" : "bg-white border-gray-300 text-gray-700 focus:border-[#ff9130]"}`}
                placeholder="Parol"
              />
              <div
                className="absolute right-4 top-[50%] transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye className="text-gray-500" size={24} />
                ) : (
                  <FaRegEyeSlash className="text-gray-500" size={24} />
                )}
              </div>
              <p className="text-red-500 text-sm mt-1">
                {loginErrors.password?.message}
              </p>
            </div>

            <button
              className="submit-btn bg-[#ff9130] hover:bg-[#e08430] w-full text-white py-3 px-8 rounded-md cursor-pointer transition-all my-5 shadow-md"
              type="submit"
            >
              Daxil ol
            </button>

     
            {/* <div className="google-signin mb-6">
              <button
                onClick={onGoogleSignIn}
                className={`w-full flex items-center justify-center gap-3 ${darkMode ? "bg-[#202020]" : "bg-white"} border border-gray-300 py-3 px-5 rounded-md transition-all shadow-sm`}
              >
                <img src={google} alt="Google" className="w-5 h-5" />
                <span className={`${darkMode ? "text-white" : "text-gray-600"}`}>
                  Google ilə daxil olun
                </span>
              </button>
            </div> */}

         
            <div className="flex justify-between flex-col sm:flex-row">
              <p className={`form-bottom opacity-80 text-center sm:text-left ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                Hesabın yoxdur?
                <Link
                  to={"/signup"}
                  className="ml-2 opacity-100 text-[#ff9130] hover:text-[#e08430] underline"
                >
                  Qeydiyyatdan keç
                </Link>
              </p>
              <p
                onClick={() => setForgotPasswordEmail(email)}
                className="text-[#ff9130] hover:text-[#e08430] text-center text-sm cursor-pointer transition-colors sm:text-right mt-4 sm:mt-0"
                onDoubleClick={handleForgotPassword}
              >
                Parolu unutmusan?
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
