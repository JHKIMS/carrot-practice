import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

const Login = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hi</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form className="flex flex-col gap-3">
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
        <FormBtn loading={false} text="Crate Account"/>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
