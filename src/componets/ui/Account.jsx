function Account() {
  return (
    <>
      <p className="text-right mb-[40px]">
        Xoş Gəlmisiniz! <span className="text-[#FF7518]">Md Rimel</span>
      </p>
      <div className="flex justify-between">
        <aside className="bg-white p-6 w-[250px] text-center rounded-lg shadow-md">
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
          className="px-[80px] w-[870px] py-6 lg:px-15 lg:py-10 bg-white rounded-lg shadow-md"
          style={{ boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <p className="text-2xl text-[#FF7518] mb-4 font-semibold">
            Hesabını idarə et
          </p>
          <form action="post" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-item flex flex-col">
              <label htmlFor="first-name" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none  "
              />
            </div>
            <div className="form-item flex flex-col">
              <label htmlFor="last-name" className="text-lg">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none  "
              />
            </div>
            <div className="form-item flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none  "
              />
            </div>
            <div className="form-item flex flex-col">
              <label htmlFor="address" className="text-lg">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none  "
              />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Password Changes</p>
              <div className="form-item w-[740px] grid grid-rows-2 grid-flow-col">
                <input
                  type="password"
                  placeholder="Current Password"
                  id="current-password"
                  className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none mb-4 placeholder-opacity-70 placeholder:text-gray-500"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  id="new-password"
                  className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none mb-4 placeholder-opacity-70 placeholder:text-gray-500"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  id="confirm-password"
                  className="bg-[#F5F5F5] w-[330px] h-[50px] rounded-md px-4 outline-none placeholder-opacity-70 placeholder:text-gray-500"
                />
              </div>
              <div className="form-btns flex justify-between w-[330px]">
                <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <button
                  className="bg-[#FF7518] text-white py-3 px-8  rounded-md  hover:bg-[#e07575]"
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