import { z } from 'zod'
import { Matrix } from './matrix'
import { HashTypeEnum } from './hash_type'

export const Hash = z.object({
  matrix: Matrix,
  hash: z.string(),
  hashType: HashTypeEnum,
})

export const HashResult = z.object({
  path: z.string(),
  hashes: z.array(Hash),
})

export type Hash = z.infer<typeof Hash>
export type HashResult = z.infer<typeof HashResult>
