import { useState } from "react";
import * as Yup from 'yup';
import LadyImg from '../assets/PNG/Lady.png';
import Logo from '../assets/PNG/logo.png';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col md:flex-row md:px-[100px] md:py-12 bg-slate-100'>
      <div className='md:flex-1'>
        <div className=" mt-[-50px] md:block flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={LadyImg}
              alt='SideImg'
              className='h-[900px] w-auto'
            />
            <div className="bg-black p-3 bg-opacity-50 rounded-xl relative bottom-52">
              <div className="">
                <p className="text-[22px] font-normal text-white">“I love how intuitive AccMan interface is,<br />making it easy to navigate and manage 
                <br />multiple accounts seamlessly.”</p>
                <p className="text-[20px] font-normal text-white mt-2 italic">Idris Alabi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:flex-1 bg-white p-6 md:px-20 md:pt-[240px]'>
        <div className="">
          <img
            src={Logo}
            alt='Logo'
            className='h-[40px] md:h-[40px]'
          />
        </div>
        <h1 className="md:text-[64px] text-[45px] font-bold leading-[40px] mt-16">Reset password</h1>
        <p className="text-[25px] font-normal my-4">It’s easy and quick. let’s get you back.</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className='mt-5'>
            <h2 className="font-normal text-[25px] mb-1">
              Email Address
            </h2>
            <input
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="text"
              name="email"
              value={formData.email}
              placeholder='Enter your email address'
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div className='mt-5'>
            <button type="submit" className='w-full bg-primary border rounded-xl text-white px-10 py-4'>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword;
