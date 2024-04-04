import { useState } from "react";
import * as Yup from 'yup';
import SideImg from '../assets/PNG/SideImg.png';
import Logo from '../assets/PNG/logo.png';

const ResetNewPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
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
              src={SideImg}
              alt='SideImg'
              className='h-[900px] w-auto'
            />
            <div className="bg-black p-6 bg-opacity-50 rounded-xl relative bottom-72">
              <div className="">
                <p className="text-[22px] font-normal text-white">“Using AccMan software has been a game-<br />changer for me! It’s streamlined my finances, 
                <br />making it effortless to track expenses, set <br/> budgets, and monitor transactions.”</p>
                <p className="text-[20px] font-normal text-white mt-2 italic">Folashade Rose</p>
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
        <h1 className="md:text-[64px] text-[45px] font-bold leading-[40px] mt-16">Set a new password</h1>
        <p className="text-[25px] font-normal  my-4">It’s easy and quick </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className='mt-5'>
            <h2 className="font-normal text-[25px] mb-1">
              Password
            </h2>
            <input
              className="w-full border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
              type="password"
              name="password"
              value={formData.password}
              placeholder='Enter your new password'
              onChange={handleChange}
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
          </div>
          <div className='mt-5'>
              <h2 className="font-normal text-[25px] mb-1">
                Confirm password
              </h2>
              <input
                className="w-full border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder='Confirm your new password'
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
          <div className='mt-5'>
            <button type="submit" className='w-full bg-primary border rounded-xl text-white px-10 py-4'>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetNewPassword;
