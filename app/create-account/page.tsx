"use client"

import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

const CreateAccount = () => {
  const  [state, action] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hi</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
        />
        <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
        />
        <FormInput
            name="password"
            type="password"
            placeholder="password"
            required
            errors={state?.fieldErrors.password}
        />
        <FormInput
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
            required
            errors={state?.fieldErrors.confirmPass}
        />
        <FormBtn text="Crate Account"/>
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
