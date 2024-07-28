import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email Is Required",
  }),
  password: z.string().min(1, {
    message: "Password Is Required",
  }),
  // checkbox: z.boolean(),
});

export const LocalPackSchema = z.object({
  

  price: z.string().min(1, { message: "Price Is Required" }),

  day: z.string().min(1, { message: "Day Is Required" }),

  minute: z.string().min(1, { message: "Minutes Is Required" }),

  statuss: z.string().min(1, { message: "Status Is Required" }),
});

export const CountrySchema = z.object({
  country: z.string().trim().min(1, { message: "Country is required" }),
})

// export const SignupSchema = z.object({
//   firstname: z.string().min(1, {
//     message: "At least One Letter",
//   }),
//   lastname: z.string(),
//   email: z.string().email(),
//   password: z.string(),
//   cpassword: z.string(),
//   checkbox: z.boolean(),
// });
