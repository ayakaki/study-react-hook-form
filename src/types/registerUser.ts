import { registerUserSchema } from '@/schema/registerUserSchema';
import { z } from 'zod';

export type RegisterUser = z.infer<typeof registerUserSchema>;
