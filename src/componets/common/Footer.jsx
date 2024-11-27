import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-black dark:bg-[#121212] dark:border-t">
        <div className="w-full max-w-[1200px] mx-auto text-white py-8 md:py-12 flex flex-col justify-center items-center md:flex-row sm:justify-between mt-8 md:mt-12">
          <div className="mb-8 md:mb-0">
            <div className="space-y-4">
              <Link to="/">
                <img
                  src="/hərşeyburada2.svg"
                  alt="Logo"
                  className="w-32 md:w-40"
                />
              </Link>

              <div className="flex space-x-4">
                <Link to="/" target="_blank">
                  <i className="text-lg md:text-2xl opacity-70 hover:opacity-100 fa-brands fa-facebook-f hover:text-[#1877F2]"></i>
                </Link>
                <Link to="/" target="_blank">
                  <i className="text-lg md:text-2xl opacity-70 hover:opacity-100 fa-brands fa-twitter hover:text-[#1DA1F2]"></i>
                </Link>
                <a
                  href="https://www.instagram.com/herseyburadaz/"
                  target="_blank"
                >
                  <i className="text-lg md:text-2xl opacity-70 hover:opacity-100 fa-brands fa-instagram hover:text-[#E4405F]"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="text-lg md:text-2xl opacity-70 hover:opacity-100 fa-brands fa-linkedin-in hover:text-[#0A66C2]"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-0 text-center sm:text-left">
            <h3 className="font-medium text-lg md:text-xl mb-6 ">Dəstək</h3>
            <p className="text-base md:text-lg mb-4">Bakı, Azərbaycan</p>
            <div className="text-base md:text-lg mb-4 cursor-pointer">
              <Link to="tel:+994 51 548 92 72">+994 (51) 548 92 72</Link>
            </div>
            <a href="mailto:herseyburadaz28@gmail.com">
              <p className="text-base md:text-lg mb-4">
                herseyburadaz28@gmail.com
              </p>
            </a>
          </div>

          <div className="mb-8 md:mb-0 flex flex-col">
        
            <Link
              to="/about"
              className="text-base md:text-lg mb-4 opacity-70 hover:opacity-100 hover:underline"
            >
              Haqqımızda
            </Link>
            <Link
              to="/gizliliksiyaseti"
              className="text-base md:text-lg mb-4 opacity-70 hover:opacity-100 hover:underline"
            >
              Gizlilik Siyasəti
            </Link>
            <Link
              to="/istifadesertleri"
              className="text-base md:text-lg mb-4 opacity-70 hover:opacity-100 hover:underline"
            >
              İstifadə Şərtləri
            </Link>
            <Link
              to="/contact"
              className="text-base md:text-lg mb-4 opacity-70 hover:opacity-100 hover:underline"
            >
              Əlaqə
            </Link>
          </div>

          <div className="flex flex-col">
          <img src='/qr.png' className="w-[150px]"></img>
    
          </div>
        </div>

        <div className="flex items-center justify-center bg-black dark:bg-[#2a2a2a] gap-x-2 py-4 border-t border-[#141414]">
          <div className="text-sm text-[#d9d9d9]">
            <a href="#">Copyright Rimel 2024. Bütün hüquqlar qorunur</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
