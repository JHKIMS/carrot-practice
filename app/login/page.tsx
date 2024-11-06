"use client";

import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { handleForm } from "./actioin";
import { useFormState } from "react-dom";

const Login = () => {

  // React의 최신버전 useFormState에서 useActionState로 변경됨.
  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hi</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          required
          errors={state?.error ?? []}
        />
        <FormBtn text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
