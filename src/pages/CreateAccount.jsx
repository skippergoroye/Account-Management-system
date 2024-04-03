
import {useState} from "react";
import * as Yup from 'yup';
import SideImg from '../assets/PNG/SideImg.png';
import Logo from '../assets/PNG/logo.png';
import { Link } from 'react-router-dom';

const CreateAccount = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

   const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required(),
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

    const nonParsed = {
      firstName: "Piyush",
      lastName: "Agarwal",
      email: "piyush@example.com",
      phoneNumber: "1231234218",
      password: "123456Qq*",
      confirmPassword: "123456Qq*",
      age: "18",
      gender: "male",
      interests: ["coding"],
      birthDate: "2024-02-12",
    };

    const parsedUser = validationSchema.cast(nonParsed);

    console.log(nonParsed, parsedUser);

    try {
      await validationSchema.validate(formData, {abortEarly: false});
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
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className='flex flex-row md:px-[100px] md:py-12 bg-slate-100'>
      <div className='flex flex-col md:flex-row w-full pt-19 bg-white'>
        <div className="sideImg text-center item-center justify-center">
          <img 
            src={SideImg}
            alt='SideImg'
            className=' hidden md:flex h-[1100px] w-[600px] justify-start items-start mr-[100px]'
          />
          <div className="p-10 sideimg-text rounded-xl">
            <div className="">
              <p className="text-[27px] font-normal text-white">“Using AccMan software has been a game-<br />changer for me! It's streamlined my finances, 
              <br />making it effortless to track expenses, set<br /> budgets, and monitor transactions.”</p>
              <p className="text-[40px] font-normal text-white mt-10 italic">Folashade Rose</p>
            </div>
          </div>
        </div>
        <div className="pt-[60px] px-6">
          <div className="">
            <img 
              src={Logo}
              alt='Logo'
              className='flex justify-start items-start h-[40px]'
            />
          </div>
          <h1 className="md:text-[64px] text-[45px] font-bold leading-[40px] mt-16">Create an account</h1>
          <p className="text-[25px] font-normal mb-6">Create your accman account</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className='flex flex-col flex-row gap-4'>
              <div>
                <h2 className="font-normal text-[25px] mb-1">
                  First name
                </h2>
                <input
                  className="w-full border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder='John'
                  onChange={handleChange}
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>
              <div>
                <h2 className="font-normal text-[25px] mb-1">
                  Last name
                </h2>
                <input
                  className="w-full border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder='Doe'
                  onChange={handleChange}
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>
            </div>
            <div className='mt-5'>
              <h2 className="font-normal text-[25px] mb-1">
                Email
              </h2>
              <input
                className="w-full md:w-[480px] border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                type="text"
                name="email"
                value={formData.email}
                placeholder='Enter your email address'
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className='mt-5'>
              <h2 className="font-normal text-[25px] mb-1">
                Phone number
              </h2>
              <input
                className="w-full md:w-[480px] border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder='08033xxxxxx'
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <div className="error">{errors.phoneNumber}</div>
              )}
            </div>
            <div className='mt-5'>
              <h2 className="font-normal text-[25px] mb-1">
                Password
              </h2>
              <input
                className="w-full md:w-[480px] border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                type="password"
                name="password"
                value={formData.password}
                placeholder='Create a password'
                onChange={handleChange}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div className='mt-5'>
              <h2 className="font-normal text-[25px] mb-1">
                Confirm password
              </h2>
              <input
                className="w-full md:w-[480px] border rounded-xl md:rounded-md border-slate-300 h-12 text-xl pl-4"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder='******************'
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
            <p className='mt-5 text-gray-400 text-[18px] font-normal'>By clicking on create account below you agree to our <Link to ='/' className="text-primary">Terms of use</Link> and <br /><Link to ='/' className="text-primary">Privacy policy.</Link></p>
            <div className='mt-5'>
              <button type="submit" className='w-full md:w-[480px] bg-primary border rounded-xl md:rounded-md text-white px-10 py-4'>Create account</button>
            </div>
            <p className='mt-3 text-gray-400 text-[18px] font-normal text-center'>Already have an account ? <Link to ='/' className="text-primary">Log In</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount