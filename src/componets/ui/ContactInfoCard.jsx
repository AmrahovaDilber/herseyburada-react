const ContactInfoCard = ({ icon, title, description }) => {
  return (
    <div className="border-b pb-[32px] border-black">
      <div className="flex items-center mb-[24px]">
        <div className="size-[40px] rounded-[31px] bg-[#ff7518] mr-[16px] flex justify-center items-center text-white">
          <i className={`fa-solid ${icon} text-[20px]`}></i>
        </div>
        <p className="font-semibold">{title}</p>
      </div>
      <div className="space-y-[16px] text-[14px]">{description}</div>
    </div>
  );
};

export default ContactInfoCard;
