import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <main className="main-content flex justify-between items-center w-[1200px] mx-auto">
      <form
        className="sign-up-form flex flex-col justify-self-start"
        method="post"
      >
        <h1
          className="form-title text-[36px] font-[500] mb-[24px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span style={{ fontFamily: "Comfortaa, sans-serif" }}>
            hərşeyburada
          </span>
          -ya daxil ol
        </h1>
        <input
          type="text"
          className="form-input border-b-[1px] border-b-[#B3B3B3] outline-0 mb-[40px]"
          placeholder="Email ya da Telefon nömrəsi"
        />
        <input
          type="password"
          className="form-input border-b-[1px] border-b-[#B3B3B3] outline-0 mb-[40px]"
          placeholder="Parol"
        />
        <div className="form-submit flex items-center gap-[87px]">
          <button
            className="submit-btn bg-[#FF7518] hover:bg-[#e07575] text-[#ffffff] px-[48px] h-[56px] mb-[16px] rounded-[4px] cursor-pointer"
            type="submit"
          >
            Daxil ol
          </button>
          <p className="text-[#FF7518] hover:text-[#e07575] text-[16px] cursor-pointer">
            Parolu unutmusan?
          </p>
        </div>
        <p className="form-bottom text-center opacity-70 mt-6">
          Hesabın yoxdur?
          <Link
            to={"/signup"}
            className="ml-[16px] underline opacity-100 underline-offset-2 hover:no-underline hover:opacity-80"
          >
            Qeydiyyatdan keç
          </Link>
        </p>
      </form>
      <figure className="w-[600px] h-[650px]">
        <img
          className="w-full h-full object-cover"
          src="./assets/img/login-register.svg"
          alt=""
        />
      </figure>
    </main>
  );
};

export default LoginForm;
