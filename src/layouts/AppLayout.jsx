import Footer from "../componets/common/Footer";
import Header from "../componets/common/Header";

export default function AppLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="w-[1200px] mx-auto">{children}</div>
      <Footer></Footer>
    </div>
  );
}
