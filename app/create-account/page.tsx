import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CreateAccount = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hi</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
            type="text"
            placeholder="Username"
            required
            errors={[]}
        />
        <FormInput
            type="email"
            placeholder="Email"
            required
            errors={[]}
        />
        <FormInput
            type="password"
            placeholder="password"
            required
            errors={[]}
        />
        <FormInput
            type="password"
            placeholder="Confirm Password"
            required
            errors={[]}
        />
        <FormButton loading={false} text="Crate Account"/>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          href="/sms"
          className="primary-btn flex h-10 items-center justify-center gap-3"
        >
          <span><ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6"/></span>
          <span>SIGN UP WITH SMS</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
