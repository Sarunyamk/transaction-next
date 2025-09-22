import { sign } from 'crypto'
import z from 'zod'

export const signUpFormSchema = z.object({
  firstName: z.string().min(1).trim(),
  lastName: z.string().min(1).trim(),
  email: z.email(),
  password: z.string().regex(/^[a-zA-Z0-9]{6,}$/),
})

// export const signInFormSchema = z.object({
//   email: z.email(),
//   password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,{
//     message: "Password must contain at least 6 characters, including at least one letter and one number",
//   }),
// })
export const signInFormSchema = signUpFormSchema.pick({
  email: true,
  password: true,
})
