import { useForm } from "react-hook-form";
import LadyImg from "../assets/PNG/Lady.png";
import * as Yup from "yup";
import Logo from "../assets/PNG/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(
      Yup.object().shape({
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
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
          .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
          ),
      })
    ),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="flex flex-col md:flex-row md:px-[10px] md:pt-4 bg-slate-100">
      <div className="flex-1 md:flex-2">
        <div className="mt-[-50px] md:block flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={LadyImg}
              alt="SideImg"
              className="h-auto w-full object-cover md:h-screen md:w-[1200px]"
            />
            <div className=" absolute">
              <div className="top-[210px] bg-black p-6 bg-opacity-50 rounded-xl relative">
                <p className="text-[22px] font-normal text-white">
                  “I love how intuitive AccMan interface is,
                  <br />
                  making it easy to navigate and manage
                  <br />
                  multiple accounts seamlessly.”
                </p>
                <p className="text-[20px] font-normal text-white mt-2 italic">
                  Idris Alabi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-1 justify-center bg-white p-2 px-6 md:px-20 md:pt-[70px]">
        <div>
          <img src={Logo} alt="Logo" className="h-[40px] md:h-[40px]" />
        </div>
        <h1 className="md:text-[64px] text-[32px] font-bold leading-[40px] mt-16">
          Welcome back!
        </h1>
        <p className="text-[25px] font-normal my-4">Sign in to your account</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <label htmlFor="email" className="font-normal text-[25px] mb-1">
              Email Address
            </label>
            <input
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="text"
              name="email"
              {...register("email")}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mt-5">
            <label htmlFor="password" className="font-normal text-[25px] mb-1">
              Password
            </label>
            <input
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="password"
              name="password"
              {...register("password")}
              placeholder="Create a password"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <p className="mt-5 text-gray-400 text-[18px] font-normal">
            <Link to="/reset-password" className="text-primary">
              Forgot password?
            </Link>
          </p>
          <Button
            label="Sign In"
            btnClass="w-full bg-primary border rounded-xl text-white px-10 py-4 text-xl"
          />
          <p className="mt-3 text-gray-400 text-[18px] font-normal text-center">
            Don’t have an account ?{" "}
            <Link to="/create-account" className="text-primary">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
