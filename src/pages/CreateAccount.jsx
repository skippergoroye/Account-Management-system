
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SideImg from '../assets/PNG/SideImg.png';
import Logo from '../assets/PNG/logo.png';
import { Link } from 'react-router-dom';

const formSchema = yup.object().shape({
  firstName: yup
  .string()
  .required(),
  lastName: yup
  .string()
  .required(),
  email: yup
  .string()
  .email("please provide a valid email address")
  .required("email address is required"),
  phoneNumber: yup
  .string()
  .required(),
password: yup
  .string()
  .min(5, "password should have a minimum length of 5")
  .max(12, "password should have a maximum length of 12")
  .required("password is required"),
confirmPassword: yup
  .string()
  .oneOf([yup.ref("password")])
  .required("confirm password is required"),

});

const textInputClassName =
"bg-gray-50 border border-gray-300 text-gray-900 text-[25px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const CreateAccount = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmitHandler = (data) => {
      console.log(data);
    };
  
    return (
      <div className='w-full h-screen flex items-start'>
        <div className="hidden md:flex relative w-1/2 h-full flex flex-col">
          <div className="hidden md:flex p-10 sideimg-text rounded-xl flex flex-col">
            <p className="text-[27px] font-normal text-white">“Using AccMan software has been a game-changer for me! Its streamlined my finances, 
              making it effortless to track expenses, set budgets, and monitor transactions.”
            </p>
           <p className="text-[40px] font-normal text-white mt-10 italic">Folashade Rose</p>
          </div>
          
          <img 
            src={SideImg}
            alt='SideImg'
            className='hidden md:flex h-[1180px] w-full object-cover'
          />
        </div>
        <div className="md:w-1/2 w-full h-full bg-white flex flex-col justify-between pt-[60px] px-6">
          <div className="md:pl-11 pl-4">
            <img 
              src={Logo}
              alt='Logo'
              className='flex justify-start items-start h-[40px]'
            />
          
            <h1 className="md:text-[64px] text-[45px] font-bold leading-[40px] mt-16">Create an account</h1>
            <p className="text-[25px] font-normal mb-6">Create your accman account</p>
          </div>
          <div className="shadow-sm shadow-white bg-white] md:mx-auto md:px-7 px-4 py-4 rounded-xl">
            <form onSubmit={handleSubmit(formSubmitHandler)} className="w-full">
              <div className="mb-6 flex gap-4">
                  <div className="w-full">
                      <label
                          htmlFor="firstName"
                          className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                      >
                          First name
                      </label>
                      <input
                          {...register("firstName")}
                          type="text"
                          name="firstName"
                          id="firstName"
                          className={textInputClassName}
                          placeholder="John"
                      />
                      {errors.firstName ? (
                      <span className="text-red-900">{errors.firstName.message}</span>
                      ) : (
                          <></>
                      )}
                  </div>
                  <div className="w-full">
                      <label
                          htmlFor="lastName"
                          className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                      >
                          Last name
                      </label>
                      <input
                          {...register("lastName")}
                          type="text"
                          name="lastName"
                          id="lastName"
                          className={textInputClassName}
                          placeholder="Doe"
                      />
                      {errors.lastName ? (
                      <span className="text-red-900">{errors.lastName.message}</span>
                      ) : (
                          <></>
                      )}
                  </div>
                  
              </div>
              <div className="mb-6"> 
                  <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                  >
                      Phone number
                  </label>
                  <input
                      {...register("phoneNumber")}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className={textInputClassName}
                      placeholder="08033xxxxxx"
                  />
                  {errors.phoneNumber ? (
                  <span className="text-red-900">{errors.phoneNumber.message}</span>
                  ) : (
                      <></>
                  )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  className={textInputClassName}
                  placeholder="test@test.com"
                />
                {errors.email ? (
                  <span className="text-red-900">{errors.email.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  className={textInputClassName}
                  placeholder="Create a password"
                />
                {errors.password ? (
                  <span className="text-red-900">{errors.password.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword")}
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  className={textInputClassName}
                  placeholder='******************'
                />
                {errors.confirmPassword ? (
                  <span className="text-red-900">
                    {errors.confirmPassword.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <p className='mt-5 mb-4 text-gray-400 text-[18px] font-normal'>By clicking on create account below you agree to our <Link to ='/' className="text-primary">Terms of use</Link> and <Link to ='/' className="text-primary">Privacy policy.</Link></p>
              <button
                type="submit"
                className="w-full bg-primary border rounded-xl md:rounded-md text-[25px] text-white px-10 py-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Create account
              </button>
              <p className='mt-3 text-gray-400 text-[18px] font-normal text-center'>Already have an account ? <Link to ='/login' className="text-primary">Log In</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default CreateAccount