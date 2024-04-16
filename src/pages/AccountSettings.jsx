import avatar from "../assets/icons/avatar.svg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../components/ui/button";
import DeleteAccount from "../components/dashboard/DeleteAccount";
import { useGetSingleUserByIdQuery, useUpdateUserMutation } from "../features/api/users";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";


const formSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("please provide a valid email address")
    .required("email address is required"),
  phoneNumber: yup
    .string()
    .matches(/^0\d{10}$/, "invalid phone number")
    .required("phone number is required"),
  gender: yup.string().required("gender is required"),
});

const AccountSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.authUser);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const {data: userData} = useGetSingleUserByIdQuery(userInfo?._id)




  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue 
  } = useForm({
    resolver: yupResolver(formSchema),
  });


  useEffect(() => {
    if(userData) {
      setValue("firstName", userData.data?.firstName);
      setValue("lastName", userData.data?.lastName);
      setValue("email", userData.data?.email);
      setValue("phoneNumber", userData.data?.phoneNumber);
      setValue("gender", userData.data?.gender);
    }
  }, [userData, setValue]);

  const successNotifying = (msg) => {
    toast.success(msg);
  };

  const formSubmitHandler = async (data) => {
    try {
      const id = userInfo?._id;
      if (!id) {
        console.error("User ID is undefined.");
        return;
      }
      const updatedUserData = { ...data, _id: id };
      const res = await updateUser({
        id,
        updatedUser: updatedUserData,
      }).unwrap();
      successNotifying(res.message);
      console.log(res);
    } catch (error) {
      toast.error("error");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pb-6 border-b border-[#F3F3F3]">
        <h4 className="text-xl font-semibold text-gray-900">Account Details</h4>
        <p className="mt-1.5 text-gray-600">Manage your Accman profile</p>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <img src={avatar} className="w-12 h-12 rounded-full" alt="" />
          <div>
            <h5 className="text-[#09090B] font-medium">Profile picture</h5>
            <p className="text-[#71717A] text-xs">JPG, PNG max of 2MB</p>
          </div>
        </div>
        <div className="border-b border-[#F3F3F3] pb-9">
          <form className="grid grid-cols-1 mt-12 lg:grid-cols-2 md:gap-x-10 lg:gap-x-10 xl:gap-x-14 gap-y-5 md:gap-y-7 pb-9">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="firstName"
                className="font-medium text-sm text-[#09090B]"
              >
                First Name
              </label>
              <input
                {...register("firstName")}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none bg-white text-black"
              />
              {errors.firstName && (
                <div className="text-sm text-red-600">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="font-medium text-sm text-[#09090B]"
              >
                Last Name
              </label>
              <input
                {...register("lastName")}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none bg-white text-black"
              />
              {errors.lastName && (
                <div className="text-sm text-red-600">
                  {errors.lastName.message}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-medium text-sm text-[#09090B]"
              >
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none bg-white text-black"
              />
              {errors.email && (
                <div className="text-sm text-red-600">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phoneNumber"
                className="font-medium text-sm text-[#09090B]"
              >
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="080********"
                className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none bg-white text-black"
              />
              {errors.phoneNumber && (
                <div className="text-sm text-red-600">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="gender"
                className="font-medium text-sm text-[#09090B]"
              >
                Gender
              </label>
              <select
                {...register("gender")}
                name="gender"
                defaultValue={""}
                className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none bg-white text-black"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <div className="text-sm text-red-600">
                  {errors.gender.message}
                </div>
              )}
            </div>
          </form>

          <Button
            className="bg-violet-700 hover:bg-violet-500"
            onClick={handleSubmit(formSubmitHandler)}
          >
            {isLoading ? (
              <SyncLoader size={"0.8rem"} color="#ffffff" />
            ) : (
              "Update Account"
            )}
          </Button>
        </div>
        <div className="mt-7">
          <Button variant="destructive" onClick={() => setIsOpen(!isOpen)}>
            Delete
          </Button>
        </div>
      </div>
      <DeleteAccount isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default AccountSettings;
