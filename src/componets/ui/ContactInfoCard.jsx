import { useContextApp } from '../../context/AppContext'; 

const ContactInfoCard = ({ icon, title, description }) => {
  const { darkMode } = useContextApp(); 

  return (
    <div className={`border-b pb-[32px] ${darkMode ? 'border-gray-700' : 'border-black'}`}>
      <div className="flex items-center mb-[24px]">
        <div
          className={`w-[40px] h-[40px] rounded-[31px] mr-[16px] flex justify-center items-center text-white
            bg-[#ff7518]`}
        >
          <i className={`fa-solid ${icon} text-[20px]`} />
        </div>
        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{title}</p>
      </div>
      <div className={`space-y-[16px] text-[14px] ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {description}
      </div>
    </div>
  );
};

export default ContactInfoCard;
