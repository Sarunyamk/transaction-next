import { transactionFormSchema } from '@/lib/schema/transaction.schema'
import z from 'zod'

export type TransactionFormInput = z.infer<typeof transactionFormSchema>
