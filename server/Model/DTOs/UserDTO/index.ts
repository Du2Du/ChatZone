import { z } from "zod";

export const userDTO = z
  .object({
    email: z.string(),
  })
  .required();
