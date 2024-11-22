import ContactInfoCard from "../componets/ui/ContactInfoCard";
import ContactForm from "../componets/ui/ContactForm";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/categoriesData";



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
          {contactInfo.map((item, index) => (
            <ContactInfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
