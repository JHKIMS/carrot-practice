"use server";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("user");
const checkPasswords = ({
  password,
  confirmPass,
}: {
  password: string;
  confirmPass: string;
}) => password === confirmPass;

const formSchema = z
  .object({
    username: z
      .string({ invalid_type_error: "Username must be a string!" })
      .min(3, "Way too short.")
      .max(10, "That is too long.")
      .refine(checkUsername, "No user allowed"),
    email: z.string().email(),
    password: z.string().min(7),
    confirmPass: z.string().min(10),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirmPass"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPass: formData.get("confirmPass"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
