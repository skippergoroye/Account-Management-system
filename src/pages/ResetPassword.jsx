import { useForm } from "react-hook-form";
import LadyImg from "../assets/PNG/Lady.png";
import Logo from "../assets/PNG/logo.png";
import Button from "../components/Button";

const useValidation = (validationSchema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  const registerWithValidation = (name) => {
    return register(name, validationSchema[name]);
  };

  return {
    handleSubmit,
    onSubmit,
    registerWithValidation,
    errors,
  };
};

const ResetPassword = () => {
  const validationSchema = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email format",
      },
    },
  };

  const { handleSubmit, onSubmit, registerWithValidation, errors } =
    useValidation(validationSchema);

  return (
    <div className="flex flex-col md:flex-row md:px-[10px] md:py-6 bg-slate-100">
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
            <label htmlFor="email" className="font-normal text-[25px] mb-1">
              Email Address
            </label>
            <input
              {...registerWithValidation("email")}
              className="w-full border rounded-xl border-slate-300 h-12 text-xl pl-4"
              type="text"
              name="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <Button
            label="Reset Password"
            btnClass="text-[30px] w-full bg-primary border rounded-xl text-white px-10 py-4 text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
