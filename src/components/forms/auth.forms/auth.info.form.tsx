"use client";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import { useFormik } from "formik";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const AuthInfoForm = ({
  onChange,
  setEmail,
  setId,
}: {
  onChange: (e: boolean) => void;
  setEmail: (e: string) => void;
  setId: (e: string) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const resp = await fetch("/api/auth/reg", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (resp.status === 200) {
        onChange(false);
        setEmail(values.email);
        setId(data.id);
      }
      console.log(data);
      setLoading(false);
    },
    validationSchema: SignupSchema,
  });
  return (
    <form
      className="grid grid-cols-2 mt-10 gap-5 px-2"
      onSubmit={formik.handleSubmit}
    >
      <span>
        <label className="mb-2 text-xs font-extralight">Email</label>
        <Input
          type="email"
          classname="bg-zinc-100 border-zinc-400 mt-2"
          name="email"
          onChange={formik.handleChange}
          id="email"
        />
        {formik.errors.email && (
          <p className="text-xs font-light text-red-500">
            {formik.errors.email}
          </p>
        )}
      </span>
      <span>
        <label className="mb-2 text-xs font-extralight">Password</label>
        <Input
          type="password"
          classname="bg-zinc-100 border-zinc-400 mt-2"
          name="password"
          onChange={formik.handleChange}
          id="password"
        />
        {formik.errors.password && (
          <p className="text-xs font-light text-red-500">
            {formik.errors.password}
          </p>
        )}
      </span>
      <span>
        <label className="mb-2 text-xs font-extralight">First name</label>
        <Input
          type="text"
          classname="bg-zinc-100 border-zinc-400 mt-2"
          name="firstName"
          onChange={formik.handleChange}
          id="firstName"
        />
        {formik.errors.firstName && (
          <p className="text-xs font-light text-red-500">
            {formik.errors.firstName}
          </p>
        )}
      </span>
      <span>
        <label className="mb-2 text-xs font-extralight">Last name</label>
        <Input
          type="text"
          classname="bg-zinc-100 border-zinc-400 mt-2"
          name="lastName"
          onChange={formik.handleChange}
          id="lastName"
        />
        {formik.errors.lastName && (
          <p className="text-xs font-light text-red-500">
            {formik.errors.lastName}
          </p>
        )}
      </span>
      <Button
        type="submit"
        className="bg-transparent text-blue-600 outline mt-10"
        loading={loading}
      >
        Next
      </Button>
    </form>
  );
};
