import { useState } from "react";
import * as Yup from 'yup';
import LadyImg from '../assets/PNG/Lady.png';
import Logo from '../assets/PNG/logo.png';
import { Link } from 'react-router-dom';
import Button from "../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .test('contains-special-char', 'Password must contain at least one symbol', (value) => {
        const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
        return specialCharacters.test(value);
      })
      .test('contains-number', 'Password must contain at least one number', (value) => {
        const numbers = /[0-9]/;
        return numbers.test(value);
      })
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
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
      <div className='flex-1 md:flex-2'>
        <div className="mt-[-50px] md:block flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={LadyImg}
              alt='SideImg'
              className='h-[900px] w-auto'
            />
            <div className="bg-black p-6 bg-opacity-50 rounded-xl relative bottom-64">
              <div>
                <p className="text-[22px] font-normal text-white">“I love how intuitive AccMan interface is,<br />making it easy to navigate and manage 
                <br />multiple accounts seamlessly.”</p>
                <p className="text-[20px] font-normal text-white mt-2 italic">Idris Alabi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:flex-1 bg-white p-6 md:px-20 md:pt-[240px]'>
        <div>
          <img
            src={Logo}
            alt='Logo'
            className='h-[40px] md:h-[40px]'
          />
        </div>
        <h1 className="md:text-[64px] text-[32px] font-bold leading-[40px] mt-16">Welcome back!</h1>
        <p className="text-[25px] font-normal my-4">Sign in to your account</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className='mt-5'>
            <label className="font-normal text-[25px] mb-1">
              Email Address
            </label>
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
            <label className="font-normal text-[25px] mb-1">
              Password
            </label>
            <input
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="password"
              name="password"
              value={formData.password}
              placeholder='Create a password'
              onChange={handleChange}
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
          </div>
          <p className='mt-5 text-gray-400 text-[18px] font-normal'><Link to ='/reset-password' className="text-primary">Forgot password?</Link></p>
          <Button label="Sign In"/>
          <p className='mt-3 text-gray-400 text-[18px] font-normal text-center'>Don’t have an account ? <Link to ='/create-account' className="text-primary">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login;
