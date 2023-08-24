import { z } from 'zod';

export const registerUserSchema = z.object({
  email: z
    .string({ required_error: 'メールアドレスを入力してください。' })
    .email({ message: 'メールアドレスの形式が正しくありません。' }),
  password: z.string().min(6, '6文字以上入力してください。'),
  yourName: z.string({ required_error: '名前を入力してください。' }),
});
