import ContactInfoCard from "../componets/ui/ContactInfoCard";
import ContactForm from "../componets/ui/ContactForm";
import { Link } from "react-router-dom";


const ContactPage = () => {
  return (
    <main className="pt-10">
      <div className="mb-10">
        <Link to="/" className="opacity-50 hover:opacity-80">
          Ana Səhifə
        </Link>
        <span className="opacity-50 mx-3">/</span>
        <Link to="/contact">Əlaqə</Link>
      </div>
      <div className="flex flex-col md:flex-row space-x-10">
        <div className="px-6 md:px-8 w-full md:w-[340px] py-10 space-y-8 border border-gray-100 shadow-md rounded-md">
          <ContactInfoCard
            icon="fa-phone"
            title="Bizə Zəng Edin"
            description={
              <>
                <p>Həftənin 7 günü, 24 saat mövcuduq.</p>
                <p>Telefon: +994515489272</p>
              </>
            }
          />
          <ContactInfoCard
            icon="fa-envelope"
            title="Bizə Yazın"
            description={
              <>
                <p>Formamızı doldurun, 24 saat ərzində sizinlə əlaqə saxlayacağıq.</p>
                <p>Email: herseyburada28@gmail.com</p>
                <p>Email: dilberamrahova1@gmail.com</p>
              </>
            }
          />
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
