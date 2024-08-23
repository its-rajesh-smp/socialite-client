import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
  email: z
    .string()
    .trim()
    .email("Invalid email")
    .min(3, "Email must be at least 3 characters"),
  password: z.string().trim().min(6, "Min 6 digit Password is required"),
  confirmPassword: z
    .string()
    .trim()
    .min(6, "Min 6 digit Confirm password is required"),
});
