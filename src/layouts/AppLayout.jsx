import Footer from "../componets/common/Footer";
import Header from "../componets/common/Header";
import ScrollToTop from "../componets/ui/ScrollToTop";

export default function AppLayout({ children }) {
  return (
    <div className="bg-[#fafaf9] w-full h-full">
        <ScrollToTop /> 
      <Header></Header>
      <div className=" max-w-7xl mx-auto px-4 sm:px-0  ">{children}</div>
      <Footer></Footer>
    </div>
  );
}
