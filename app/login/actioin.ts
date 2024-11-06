"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
    console.log(formData.get("email"));
    return {
      error: ["wrong password", "password too short"]
    }
  };