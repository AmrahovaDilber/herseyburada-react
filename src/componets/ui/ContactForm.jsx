import { useForm } from 'react-hook-form';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef(); 
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  
  function onSubmit(data) {
    console.log(data);
    emailjs
    .sendForm('service_x165pd3', 'template_ogqf8df', formRef.current, 'tLHxzJLhqO4YWH7bh')
    .then(
      () => {
        alert('Success!');
      },
      (error) => {
        alert('Failed! ' + error.text);
      },
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="py-[47px] px-[30px] space-y-[32px] border border-gray-100 shadow-md rounded-[4px]">
      <div className="grid grid-cols-3 gap-[16px]">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register('name', {
              required: "Please fill the field",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long"
              }
            })}
            className="h-[50px] px-[24px] rounded-[4px] bg-[#f5f5f5] outline-none"
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register('email', {
              required: "Please fill the field",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address"
              }
            })}
            className="h-[50px] px-[24px] rounded-[4px] bg-[#f5f5f5] outline-none"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="number"
            placeholder="Your Phone"
            {...register('phone', {
              required: "Please fill the field",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Please enter a valid phone number"
              }
            })}
            className="h-[50px] px-[24px] rounded-[4px] bg-[#f5f5f5] outline-none"
          />
          <p className="text-red-500">{errors.phone?.message}</p>
        </div>
      </div>

      <div>
        <textarea
          {...register("message", {
            required: "Please fill the field"
          })}
          placeholder="Your Message"
          className="h-[207px] px-[24px] py-[13px] rounded-[4px] bg-[#f5f5f5] w-full outline-none resize-none"
        ></textarea>
        <p className="text-red-500">{errors.message?.message}</p>
      </div>

      <div className="flex justify-end">
        <button type='submit' className="px-[48px] py-[16px] rounded-[4px] text-white bg-[#ff7518] font-medium hover:bg-[#e07575]">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
