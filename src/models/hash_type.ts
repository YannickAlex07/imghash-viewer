import { z } from 'zod'

export enum HashType {
  Average,
  Difference,
  Perceptual,
}

export const HashTypeEnum = z.nativeEnum(HashType)

export type HashTypeEnum = z.infer<typeof HashTypeEnum>

export const HashTypeToName = {
  [HashType.Average]: 'Average Hash',
  [HashType.Difference]: 'Difference Hash',
  [HashType.Perceptual]: 'Perceptual Hash',
}

export const AllHashTypes = [HashType.Average, HashType.Difference, HashType.Perceptual]
