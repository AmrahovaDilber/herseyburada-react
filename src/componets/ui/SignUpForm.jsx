import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <main className="main-content flex items-center justify-between w-[1200px] mx-auto">
      <figure className="w-[600px] h-[650px]">
        <img
          className="w-full h-full object-cover"
          src="/login-register.svg"
          alt=""
        />
      </figure>
      <form className="sign-up-form flex flex-col" method="post">
        <h1
          className="form-title text-[36px] font-[500] mb-[24px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Hesab yaradın
        </h1>
        <h3 className="form-subtitle text-[16px] mb-[48px]">
          Məlumatlarınızı aşağıda qeyd edin
        </h3>
        <input
          type="text"
          className="form-input border-b-[1px] border-b-[#B3B3B3] outline-0 mb-[40px]"
          placeholder="Ad"
        />
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
        <button
          className="submit-btn bg-[#FF7518] hover:bg-[#e07575] text-[#ffffff] py-[16px] px-[122px] mb-[16px] rounded-[4px] cursor-pointer"
          type="submit"
        >
          Hesab yarat
        </button>
        <button className="google-btn bg-[#ffffff] border-[1px] border-[#B3B3B3] py-[16px] px-[86px] mb-[32px] rounded-[4px] cursor-pointer">
          Sign Up with Google
        </button>
        <p className="form-bottom text-center opacity-70">
          Artıq hesabın var?
          <Link
            to={'/login'}
            className="ml-[16px] underline opacity-100 underline-offset-2 hover:no-underline hover:opacity-80"
          >
            Daxil ol
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignupForm;
