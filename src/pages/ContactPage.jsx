import ContactInfoCard from "../componets/ui/ContactInfoCard";
import ContactForm from "../componets/ui/ContactForm";
import { Link } from "react-router-dom";


const ContactPage = () => {
  return (
    <main className="pt-10">
      <div className="mb-10">
        <Link to="/" className="opacity-50 hover:opacity-80">
          Home
        </Link>
        <span className="opacity-50 mx-3">/</span>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex flex-col md:flex-row space-x-10">
        <div className="px-6 md:px-8 w-full md:w-[340px] py-10 space-y-8 border border-gray-100 shadow-md rounded-md">
          <ContactInfoCard
            icon="fa-phone"
            title="Call To Us"
            description={
              <>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </>
            }
          />
          <ContactInfoCard
            icon="fa-envelope"
            title="Write To Us"
            description={
              <>
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
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
