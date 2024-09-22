import Footer from "../componets/common/Footer";
import Header from "../componets/common/Header";

export default function AppLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <Footer></Footer>
    </div>
  );
}
