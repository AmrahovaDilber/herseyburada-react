import ContactInfoCard from "../componets/ui/ContactInfoCard";
import ContactForm from "../componets/ui/ContactForm";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <main className=" pt-[40px]">
      <div className="mb-[40px]">
        <Link to={"/"} className="opacity-50 hover:opacity-80">
          Home
        </Link>
        <span className="opacity-50 mx-[12px]">/</span>
        <a href="contact.html">Contact</a>
      </div>
      <div className="flex justify-between">
        <div className="px-[35px] w-[340px] py-[40px] space-y-[32px] border border-gray-100 shadow-md rounded-[4px]">
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
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
