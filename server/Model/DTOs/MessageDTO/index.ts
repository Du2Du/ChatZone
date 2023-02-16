import { z } from "zod";

export const messageDTO = z
  .object({
    message: z.string(),
    id_user: z.number(),
    id_addressee: z.number(),
  })
  .required();
