import { useState } from "react";
import SideImg from "../assets/PNG/SideImg.png";
import Logo from "../assets/PNG/logo.png";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import OnboardingLayout from "../layout/OnboardingLayout";
import { EyeOff, Eye } from "lucide-react";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Must have at least 1 character" })
      .regex(passwordValidation, {
        message: "Your password is not valid",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Must have at least 1 character" })
      .regex(passwordValidation, {
        message: "Your password is not valid",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

const ResetNewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    console.log({ values });
    navigate("/login");
  }

  return (
    <OnboardingLayout
      sideImage={SideImg}
      author="Folashade Rose"
      feedback="“Using AccMan software has been a game-changer for me! It’s streamlined my finances, making it effortless to track expenses, set budgets, and monitor transactions.”"
    >
      <div className="w-5/6 lg:w-[60%]">
        <div>
          <img src={Logo} alt="Logo" className="h-[20px] md:h-[34px]" />
        </div>
        <h1 className="md:text-4xl text-2xl font-medium leading-[40px] mt-7">
          Set a new password
        </h1>
        <p className="mt-px text-base font-normal text-neutral-600">
          It’s easy and quick
        </p>
        <Form {...form}>
          <form className="mt-10 space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">New password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your new password"
                      className="border-neutral-300"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      rightIcon={
                        showPassword ? (
                          <Eye
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <EyeOff
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )
                      }
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm new password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your new password"
                      className="border-neutral-300"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      rightIcon={
                        showPassword ? (
                          <Eye
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <EyeOff
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )
                      }
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>

          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full h-12 mt-6 bg-violet-600 hover:bg-violet-400"
          >
            Reset password
          </Button>
        </Form>
      </div>
    </OnboardingLayout>
  );
};

export default ResetNewPassword;
