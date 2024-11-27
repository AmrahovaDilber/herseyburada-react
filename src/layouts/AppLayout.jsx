import Footer from "../componets/common/Footer";
import Header from "../componets/common/Header";
import ChatBot from "../componets/ui/ChatBot";
import ScrollToTop from "../componets/ui/ScrollToTop";
import "../App.css";
import { useContextApp } from "../context/AppContext";

export default function AppLayout({ children }) {
  const { darkMode } = useContextApp();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#fafaf9] dark:bg-[#121212] text-black dark:text-white w-full h-full">
        <ScrollToTop />
        <ChatBot />
        <Header />
        <div className="overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-0">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
