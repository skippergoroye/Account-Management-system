import { useForm } from "react-hook-form";
import * as Yup from "yup";
import LadyImg from "../assets/PNG/Lady.png";
import Logo from "../assets/PNG/logo.png";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";

const useValidation = (validationSchema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  const registerWithValidation = (name) => {
    return register(name);
  };

  return {
    handleSubmit,
    onSubmit,
    registerWithValidation,
    errors,
  };
};

const ResetNewPassword = () => {
  const validationSchema = Yup.object({
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

  const { handleSubmit, onSubmit, registerWithValidation, errors } =
    useValidation(validationSchema);

  return (
    <div className="flex flex-col md:flex-row md:px-[10px] md:py-2 bg-slate-100">
      <div className="flex-1 md:flex-2">
        <div className=" mt-[-50px] md:block flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={LadyImg}
              alt="SideImg"
              className="h-auto w-full object-cover md:h-screen md:w-[1200px]"
            />
            <div className=" absolute">
              <div className="top-[80px] md:top-[250px] bg-black p-6 bg-opacity-50 rounded-xl relative">
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
      <div className="md:flex-1 bg-white p-6 px-6 md:px-20 md:pt-[140px]">
        <div className="">
          <img src={Logo} alt="Logo" className="h-[40px] md:h-[40px]" />
        </div>
        <h1 className="md:text-[64px] text-[32px] font-bold leading-[40px] mt-16">
          Reset password
        </h1>
        <p className="text-[25px] font-normal my-4">
          It’s easy and quick. let’s get you back.
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <label htmlFor="password" className="font-normal text-[25px] mb-1">
              Password
            </label>
            <input
              {...registerWithValidation("password")}
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="password"
              name="password"
              placeholder="Enter your new password"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="font-normal text-[25px] mb-1"
            >
              Confirm password
            </label>
            <input
              {...registerWithValidation("confirmPassword")}
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your new password"
            />
            {errors.confirmPassword && (
              <div className="text-red-500">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
          <Button
            label="Reset Password"
            btnClass="w-full bg-primary border rounded-xl text-white px-10 py-4 text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetNewPassword;
