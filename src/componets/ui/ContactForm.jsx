
const ContactForm = () => {
    return (
      <div className="py-[40px] px-[30px] space-y-[32px] border border-gray-100 shadow-md rounded-[4px]">
        <div className="grid grid-cols-3 gap-[16px]">
          <input
            type="text"
            placeholder="Your Name"
            className="h-[50px] px-[24px] rounded-[4px] bg-[#f5f5f5] outline-none"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="h-[50px] px-[24px] rounded-[4px] bg-[#f5f5f5] outline-none"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="h-[50px] px-[24px] rounded-[4px] bg-[#f5f5f5] outline-none"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="h-[207px] px-[24px] py-[13px] rounded-[4px] bg-[#f5f5f5] w-full outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] font-medium hover:bg-[#e07575]">
            Send Message
          </button>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  