import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContextApp } from '../../context/AppContext';

const ContactForm = () => {
  const formRef = useRef(); 
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { darkMode } = useContextApp();

  function onSubmit(data) {
    console.log(data);
    emailjs
      .sendForm('service_x165pd3', 'template_ogqf8df', formRef.current, 'tLHxzJLhqO4YWH7bh')
      .then(
        () => {
          alert('Mesajınız uğurla email hesabımıza göndərildi. Sizinlə əlaqə saxlayacağıq!');
        },
        (error) => {
          alert('Mesajı göndərmək alınmadı! ' + error.text);
        }
      );
  }

  return (
    <form 
      ref={formRef} 
      onSubmit={handleSubmit(onSubmit)} 
      className={`py-8 px-6 sm:py-10 sm:px-8 lg:py-12 lg:px-12 space-y-8 border shadow-md rounded-md ${darkMode ? "bg-[#202020] border-[#444]" : "bg-white border-gray-100"}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <input
            type="text"
            placeholder="Ad"
            {...register('name', {
              required: "Zəhmət olmasa sahəni doldurun",
              minLength: {
                value: 3,
                message: "Ad ən azı 3 simvol uzunluğunda olmalıdır"
              }
            })}
            className={`h-12 px-4 rounded-md focus:ring focus:ring-[#ff9130]/50 outline-none w-full ${darkMode ? "bg-[#333] border-[#444] text-white focus:border-[#ff9130]" : "bg-gray-100 border-gray-300 text-gray-700 focus:border-[#ff9130]"}`}
          />
          <p className="text-red-500 mt-1">{errors.name?.message}</p>
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: "Zəhmət olmasa sahəni doldurun",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Etibarlı email ünvanı daxil edin"
              }
            })}
            className={`h-12 px-4 rounded-md focus:ring focus:ring-[#ff9130]/50 outline-none w-full ${darkMode ? "bg-[#333] border-[#444] text-white focus:border-[#ff9130]" : "bg-gray-100 border-gray-300 text-gray-700 focus:border-[#ff9130]"}`}
          />
          <p className="text-red-500 mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="number"
            placeholder="Telefon nömrəsi"
            {...register('phone', {
              required: "Zəhmət olmasa sahəni doldurun",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Zəhmət olmasa düzgün telefon formatı daxil edin"
              }
            })}
            className={`h-12 px-4 rounded-md focus:ring focus:ring-[#ff9130]/50 outline-none w-full ${darkMode ? "bg-[#333] border-[#444] text-white focus:border-[#ff9130]" : "bg-gray-100 border-gray-300 text-gray-700 focus:border-[#ff9130]"}`}
          />
          <p className="text-red-500 mt-1">{errors.phone?.message}</p>
        </div>
      </div>

      <div>
        <textarea
          {...register("message", {
            required: "Zəhmət olmasa sahəni doldurun"
          })}
          placeholder="Mesajınız"
          className={`h-52 px-4 py-3 rounded-md focus:ring focus:ring-[#ff9130]/50 outline-none w-full resize-none ${darkMode ? "bg-[#333] border-[#444] text-white focus:border-[#ff9130]" : "bg-gray-100 border-gray-300 text-gray-700 focus:border-[#ff9130]"}`}
        ></textarea>
        <p className="text-red-500 mt-1">{errors.message?.message}</p>
      </div>

      <div className="flex justify-center sm:justify-end">
        <button 
          type="submit" 
          className="px-6 py-3 rounded-md text-white bg-orange-600 font-medium hover:bg-orange-500 transition duration-300 ease-in-out"
        >
          Mesajı Göndər
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
