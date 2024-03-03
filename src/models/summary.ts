import { z } from 'zod'
import { Matrix } from './matrix'

export const HashSummary = z.object({
  matrix: Matrix,
  hash: z.string(),
})

export const ImageSummary = z.object({
  path: z.string(),
  ahash: HashSummary,
  dhash: HashSummary,
  phash: HashSummary,
})

export type HashSummary = z.infer<typeof HashSummary>
export type ImageSummary = z.infer<typeof ImageSummary>
