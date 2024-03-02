import { z } from 'zod'

export const Matrix = z.array(z.array(z.boolean()).min(1)).min(1)

export type Matrix = z.infer<typeof Matrix>
