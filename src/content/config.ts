import { z, defineCollection } from "astro:content"

const experienceCollection = defineCollection({})

export const collections = {
  experience: experienceCollection,
}
