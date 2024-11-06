import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

const Login = () => {
  const handleForm = async (formData: FormData) => {
    "use server"; // 이 함수는 서버에서만 실행되도록.
    console.log(formData.get("email"));
  };
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hi</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
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
        <FormBtn loading={false} text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
