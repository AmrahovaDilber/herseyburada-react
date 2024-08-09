import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <div>
        <footer className="bg-black">
          <div className="w-[1200px] mx-auto text-white py-[50px] flex justify-between mt-[50px]">
            <div>
              <div className="space-y-[24px]">
                <Link to={'/'}>
                  <img src="/public/hərşeyburada2.svg" alt="" />
                </Link>
                <div>
                  <Link to={'/'} className="text-[20px] font-[500] cursor-pointer opacity-70 hover:opacity-100">
                    Abunə Olun
                  </Link>
                </div>
                <div className="flex space-x-[16px]">
                  <Link to={'/'} target="_blank">
                    <i className="text-[20px] opacity-70 hover:opacity-100 fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to={'/'} target="_blank">
                    <i className="text-[20px] opacity-70 hover:opacity-100 fa-brands fa-twitter"></i>
                  </Link>
                  <a href="https://www.instagram.com/herseyburadaz/" target="_blank">
                    <i className="text-[20px] opacity-70 hover:opacity-100 fa-brands fa-instagram"></i>
                  </a>
                  <a target="_blank">
                    <i className="text-[20px] opacity-70 hover:opacity-100 fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
  
            <div className="flex flex-col">
              <h3 className="font-[500] text-[20px] mb-[24px]">Dəstək</h3>
              <p className="text-[16px] mb-[16px]">Bakı, Azərbaycan</p>
              <p className="text-[16px] mb-[16px]">herseyburadacomp@gmail.com</p>
              <p className="text-[16px] mb-[16px]">+994 (55) 777 88 85</p>
            </div>
  
            <div className="flex flex-col">
              <h3 className="font-[500] text-[20px] mb-[24px]">Hesab</h3>
              <Link to={'account'} className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline">
                Hesabım
              </Link>
              <Link to={'/signup'} className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline">
                Daxil ol
              </Link>
              <Link to={'/cartpage'} className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline">
                Səbətim
              </Link>
              <Link to={'/wishlist'} className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline">
                Sevimlilər
              </Link>
            </div>
  
            <div className="flex flex-col">
              <h3 className="font-[500] text-[20px] mb-[24px]">Tez Link</h3>
              <a className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline" href="#">
                Gizlilik Siyasəti
              </a>
              <a className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline" href="#">
                İstifadə Şərtləri
              </a>
              <Link to={'/contact'} className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline" href="./contact.html">
                Əlaqə
              </Link>
              <Link to={'/about'} className="text-[16px] mb-[16px] opacity-70 hover:opacity-100 hover:underline" href="./about.html">
                Haqqımızda
              </Link>
            </div>
          </div>
  
          <div className="flex items-center justify-center bg-black gap-x-[6px] py-[16px] border-t-[1px] border-[#141414]">
            <div className="size-[20px]">
              <img className="object-cover opacity-50" src="./assets/img/c.svg" alt="" />
            </div>
            <div className="text-[16px] text-[#d9d9d9]">
              <a href="#">Copyright Rimel 2022. Bütün hüquqlar qorunur</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  