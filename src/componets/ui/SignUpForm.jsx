import { Link, Navigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/firebase";

const SignupForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { userLoggedIn } = useContextApp();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

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
      const userCredential = await doCreateUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

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
      <main className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
        <div className="flex flex-col-reverse items-center my-10 w-full max-w-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full max-w-[550px] p-8">
            <h1
              className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-800 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hesab yaradın
            </h1>
            <h3 className="text-md lg:text-lg mb-5 text-gray-600 text-center">
              Məlumatlarınızı aşağıda qeyd edin
            </h3>
            <form
              onSubmit={handleRegisterSubmit(onSubmit)}
              className="flex flex-col space-y-6"
              method="post"
            >
            
              <div>
                <input
                  type="text"
                  {...registerUser("name", { required: "Ad tələb olunur" })}
                  className="w-full py-3 px-4 border border-gray-300 rounded-md bg-transparent focus:border-[#ff9130] outline-none transition-all"
                  placeholder="Ad"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.name?.message}
                </p>
              </div>

            
              <div>
                <input
                  type="text"
                  {...registerUser("surname", {
                    required: "Soyad tələb olunur",
                  })}
                  className="w-full py-3 px-4 border border-gray-300 rounded-md bg-transparent focus:border-[#ff9130] outline-none transition-all"
                  placeholder="Soyad"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.surname?.message}
                </p>
              </div>

            
              <div>
                <input
                  type="email"
                  {...registerUser("email", {
                    required: "Email tələb olunur",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Yanlış email formatı",
                    },
                  })}
                  className="w-full py-3 px-4 border border-gray-300 rounded-md bg-transparent focus:border-[#ff9130] outline-none transition-all"
                  placeholder="Email"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.email?.message}
                </p>
              </div>

       
              <div>
                <input
                  type="text"
                  {...registerUser("number", {
                    required: "Telefon nömrəsi tələb olunur",
                    minLength: {
                      value: 10,
                      message:
                        "Telefon nömrəsi ən azı 10 rəqəmdən ibarət olmalıdır",
                    },
                  })}
                  className="w-full py-3 px-4 border border-gray-300 rounded-md bg-transparent focus:border-[#ff9130] outline-none transition-all"
                  placeholder="Telefon nömrəsi"
                />
                <p className="text-red-500 text-sm">
                  {registerErrors.number?.message}
                </p>
              </div>

             
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...registerUser("password", {
                    required: "Parol tələb olunur",
                    minLength: {
                      value: 6,
                      message: "Parol ən azı 6 simvoldan ibarət olmalıdır",
                    },
                  })}
                  className="w-full py-3 px-4 border border-gray-300 rounded-md bg-transparent focus:border-[#ff9130] outline-none transition-all"
                  placeholder="Parol"
                />
                {showPassword ? (
                  <FaRegEye
                    className="absolute top-3 right-4 text-gray-500 cursor-pointer"
                    size={24}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="absolute top-3 right-4 text-gray-500 cursor-pointer"
                    size={24}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                <p className="text-red-500 text-sm">
                  {registerErrors.password?.message}
                </p>
              </div>

 
              <div className="relative">
                <input
                  type={showRePassword ? "text" : "password"}
                  {...registerUser("rePassword", {
                    required: "Zəhmət olmasa parolunuzu təsdiqləyin",
                    validate: (value) =>
                      value === watchRegister("password") ||
                      "Parollar uyğun gəlmir",
                  })}
                  className="w-full py-3 px-4 border border-gray-300 rounded-md bg-transparent focus:border-[#ff9130] outline-none transition-all"
                  placeholder="Şifrəni yenidən daxil edin"
                />
                {showRePassword ? (
                  <FaRegEye
                    className="absolute top-3 right-4 text-gray-500 cursor-pointer"
                    size={24}
                    onClick={() => setShowRePassword(!showRePassword)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="absolute top-3 right-4 text-gray-500 cursor-pointer"
                    size={24}
                    onClick={() => setShowRePassword(!showRePassword)}
                  />
                )}
                <p className="text-red-500 text-sm">
                  {registerErrors.rePassword?.message}
                </p>
              </div>


              <button
                className="bg-[#ff9130] hover:bg-[#e08430] text-white py-3 rounded-md transition-colors"
                type="submit"
                disabled={isRegistering}
              >
                {isRegistering ? "Yüklənir..." : "Hesab yarat"}
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-600">
                Artıq hesabın var?
                <Link
                  to="/login"
                  className="ml-2 text-[#ff9130] hover:text-[#e08430] underline"
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
