import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

const CreateAccount = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hi</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={[]}
        />
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
            errors={[]}
        />
        <FormInput
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
            required
            errors={[]}
        />
        <FormBtn loading={false} text="Crate Account"/>
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
