"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit } = useForm();
  const handleRegisterFunction = async (data) => {
    const { email, name, password, photo } = data;
    // console.log(email, name, password, photo);
    // console.log(data, "data");
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Sign Up Success");
    }
  };

  return (
    <div className="container mx-auto mt-5">
      {" "}
      <Form
        className="flex flex-col w-100 p-5 rounded-2xl bg-black/5 mx-auto gap-4 border border-slate-300 justify-center shadow-xl"
        onSubmit={handleSubmit(handleRegisterFunction)}
      >
        <h2 className="font-bold text-center text-xl">Register your account</h2>
        {/* Name Feild */}
        <TextField isRequired type="text">
          <Label>Your Name</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              {...register("name")}
              placeholder="Enter your name"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>
        {/* Image URL Feild */}
        <TextField isRequired type="photo">
          <Label>Photo URL</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              {...register("photo")}
              placeholder="Enter Your Photo URL"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        {/* Email Feild */}
        <TextField isRequired type="email">
          <Label>Email address</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              {...register("email")}
              placeholder="Enter your email address"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        {/* Password Feild */}
        <TextField
          isRequired
          className="w-full rounded-full"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              {...register("password")}
              placeholder="Enter your password"
              className="w-full rounded-full"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-2 w-full ">
          <Button type="submit" className="w-full">
            <Check />
            Register
          </Button>
          <TextField>
            <div className="flex items-center gap-2 py-2">
              <input
                isRequired
                type="checkbox"
                // defaultChecked
                className="checkbox checkbox-primary rounded-full"
              />
              <p className="font-medium">
                Accept Terms & <span className="font-bold">Conditions</span>
              </p>
            </div>
            <FieldError />
          </TextField>
        </div>
      </Form>
    </div>
  );
}
