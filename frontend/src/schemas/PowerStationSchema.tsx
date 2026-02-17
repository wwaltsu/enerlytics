import { z } from 'zod';

export const powerStationSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'PowerStation name cannot be empty'),
  status: z.string().min(1, 'Status cannot be empty'),
});

export type PowerStation = z.infer<typeof powerStationSchema>;
