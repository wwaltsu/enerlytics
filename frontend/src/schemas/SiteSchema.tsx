import { z } from "zod";

export const siteSchema = z.object({
    id: z.number(),
    name: z.string().min(1, "Site name cannot be empty"),
    status: z.string().min(1, "Status cannot be empty")
});

export type Site = z.infer<typeof siteSchema>;