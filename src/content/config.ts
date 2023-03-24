import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({});
const educationCollection = defineCollection({});

export const collections = {
  experience: experienceCollection,
  education: educationCollection,
};
