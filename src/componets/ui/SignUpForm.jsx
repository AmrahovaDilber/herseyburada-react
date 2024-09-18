import { Link, Navigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useForm } from "react-hook-form";

import { db} from '../../firebase/firebase';

const SignupForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { userLoggedIn } = useContextApp();

  const {
    register: registerUser,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    watch: watchRegister,
  } = useForm();

  const email = watchRegister("email");
  const password = watchRegister("password");
  const name = watchRegister("name");
  const surname = watchRegister("surname");
  const number = watchRegister("number");

  async function onSubmit(data) {
    console.log(data);
    setIsRegistering(true);
    try {
      // Register the user with Firebase Authentication
      const userCredential = await doCreateUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // After registering, save additional user info to Firestore
      await db.collection("users").doc(user.uid).set({
        name: name,
        surname: surname,
        email: email,
        number: number,
        uid: user.uid,
      });

      console.log("User registered and data saved");
      setIsRegistering(false);
    } catch (error) {
      console.error("Error registering user:", error.message);
      setIsRegistering(false);
    }
  }

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main className="flex items-center justify-center w-full min-h-screen">
        <div className="flex items-center overflow-hidden w-full max-w-[1200px]">
          <figure className="w-1/2 h-full hidden lg:block">
            <img
              className="w-full h-full object-cover"
              src="/login-register.svg"
              alt="Signup Illustration"
            />
          </figure>
          <div className="w-full lg:w-1/2 p-8">
            <h1
              className="text-4xl font-semibold mb-6 text-gray-800 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hesab yaradın
            </h1>
            <h3 className="text-lg mb-8 text-gray-600 text-center">
              Məlumatlarınızı aşağıda qeyd edin
            </h3>
            <form
              onSubmit={handleRegisterSubmit(onSubmit)}
              className="flex flex-col space-y-4"
              method="post"
            >
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  {...registerUser("name", { required: "Name is required" })}
                  className="w-full py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-1 transition-all"
                  placeholder="Ad"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.name?.message}
                </p>
              </div>

              {/* Surname Input */}
              <div>
                <input
                  type="text"
                  {...registerUser("surname", {
                    required: "Please fill the field",
                  })}
                  className="w-full py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-1 transition-all"
                  placeholder="Soyad"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.surname?.message}
                </p>
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  {...registerUser("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-1 transition-all"
                  placeholder="Email"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.email?.message}
                </p>
              </div>

              {/* Phone Number Input */}
              <div>
                <input
                  type="number"
                  {...registerUser("number", {
                    required: "Phone number is required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
                  })}
                  className="w-full py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-1 transition-all"
                  placeholder="Phone Number"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.number?.message}
                </p>
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  {...registerUser("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-1 transition-all"
                  placeholder="Parol"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.password?.message}
                </p>
              </div>

              {/* Re-enter Password Input */}
              <div>
                <input
                  type="password"
                  {...registerUser("rePassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watchRegister("password") ||
                      "Passwords don't match",
                  })}
                  className="w-full py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-1 transition-all"
                  placeholder="Re-enter Password"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.rePassword?.message}
                </p>
              </div>

              <button
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded transition-colors"
                type="submit"
                disabled={isRegistering}
              >
                {isRegistering ? "Yüklənir..." : "Hesab yarat"}
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 py-3 rounded transition-colors hover:bg-gray-100">
                Sign Up with Google
              </button>

              <p className="text-center text-gray-600">
                Artıq hesabın var?
                <Link
                  to="/login"
                  className="ml-2 text-blue-500 underline hover:no-underline"
                >
                  Daxil ol
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupForm;
