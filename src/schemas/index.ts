import * as z from "zod"



export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email Is Required"
    }),
    password: z.string().min(1,{
        message: "Password Is Required"
    }),
    checkbox: z.boolean()
    
})

export const SignupSchema = z.object({
    firstname:  z.string().min(1,{
        message: "At least One Letter"
    }),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string(),
    cpassword:z.string(),
    checkbox: z.boolean()

})