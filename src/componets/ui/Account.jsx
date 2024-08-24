import { useForm } from "react-hook-form";

function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <p className="text-right mb-[40px] text-sm md:text-base lg:text-lg">
        Xoş Gəlmisiniz! <span className="text-[#FF7518]">Md Rimel</span>
      </p>
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
        <aside className="bg-white p-4 lg:p-6 w-full lg:w-[250px] text-center rounded-lg shadow-md">
          <ul>
            <li className="mb-4 font-bold text-lg text-[#333]">
              Hesabını idarə et
            </li>
            <li>
              <ul className="mb-6 space-y-2">
                <li className="text-[#FF7518] font-semibold cursor-pointer hover:underline">
                  Mənim hesabım
                </li>
                <li className="text-gray-600 cursor-pointer hover:text-[#FF7518] hover:underline">
                  Address kitabçam
                </li>
                <li className="text-gray-600 cursor-pointer hover:text-[#FF7518] hover:underline">
                  My Payment Options
                </li>
              </ul>
            </li>
            <li className="font-bold text-lg text-[#333]">
              Mənim sifarişlərim
            </li>
          </ul>
        </aside>
        <div
          className="px-4 py-6 w-full lg:w-[870px] lg:px-15 lg:py-10 bg-white rounded-lg shadow-md"
          style={{ boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <p className="text-2xl text-[#FF7518] mb-4 font-semibold">
            Hesabını idarə et
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="form-item flex flex-col">
              <label htmlFor="first-name" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                {...register("first_name", {
                  required: "Please fill the field",
                  minLength: {
                    value: 3,
                    message: "Minimum length is 3 characters",
                  },
                })}
                className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none"
              />
              <p className="text-red-600">{errors.first_name?.message}</p>
            </div>
            <div className="form-item flex flex-col">
              <label htmlFor="last-name" className="text-lg">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                {...register("last_name", {
                  required: "Please fill the field",
                  minLength: {
                    value: 3,
                    message: "Minimum length is 3 characters",
                  },
                })}
                className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none"
              />
              <p className="text-red-600">{errors.last_name?.message}</p>
            </div>
            <div className="form-item flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Please fill the field",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none"
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="form-item flex flex-col">
              <label htmlFor="address" className="text-lg">
                Address
              </label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: "Please fill the field",
                })}
                className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none"
              />
              <p className="text-red-600">{errors.address?.message}</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Password Changes</p>
              <div className="form-item w-full lg:w-[740px] flex flex-col lg:flex-row gap-24">
                <div className="flex flex-col">
                  <input
                    type="password"
                    placeholder="Current Password"
                    id="current-password"
                    {...register("current_password", {
                      required: "Please fill the field",
                      minLength: {
                        value: 6,
                        message: "Minimum length is 6 characters",
                      },
                    })}
                    className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none mb-4 placeholder-opacity-70 placeholder:text-gray-500"
                  />
                  <p className="text-red-600">
                    {errors.current_password?.message}
                  </p>

                  <input
                    type="password"
                    placeholder="New Password"
                    id="new-password"
                    {...register("new_password", {
                      required: "Please fill the field",
                      minLength: {
                        value: 6,
                        message: "Minimum length is 6 characters",
                      },
                    })}
                    className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none mb-4 placeholder-opacity-70 placeholder:text-gray-500"
                  />
                  <p className="text-red-600">{errors.new_password?.message}</p>
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    id="confirm-password"
                    {...register("confirm_password", {
                      validate: (value) =>
                        value === watch("new_password") ||
                        "Passwords do not match",
                    })}
                    className="bg-[#F5F5F5] w-full lg:w-[330px] h-[50px] rounded-md px-4 outline-none placeholder-opacity-70 placeholder:text-gray-500"
                  />
                  <p className="text-red-600">
                    {errors.confirm_password?.message}
                  </p>
                </div>
              </div>
              <div className="form-btns flex justify-between w-full lg:w-[330px] mt-4">
                <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <button
                  className="bg-[#FF7518] text-white py-3 px-8 rounded-md hover:bg-[#e07575]"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Account;
