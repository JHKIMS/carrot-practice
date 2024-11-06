import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";

const SMSLogin = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS LOGIN</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
            name="phoneNumber"
            type="number"
            placeholder="Phone number"
            required
            errors={[]}
        />
        <FormInput
            name="vertifyCode"
            type="number"
            placeholder="Vertification code"
            required
            errors={[]}
        />
        <FormBtn text="Verify"/>
      </form>
    </div>
  );
};

export default SMSLogin;
