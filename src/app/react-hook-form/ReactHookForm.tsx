'use client';
import { registerUserSchema } from '@/schema/registerUserSchema';
import { RegisterUser } from '@/types/registerUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MyReactHookInput } from './MyReactHookInput';

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues: getValue,
  } = useForm<RegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });

  const handleClick = () => {
    const formValue = getValue();
    console.log('送信！');
    console.log(formValue);
  };

  console.log('render');

  return (
    <form
      onSubmit={handleSubmit(handleClick)}
      className="container mx-auto mt-12 text-black mb-12"
    >
      <div className="mb-4">
        <label htmlFor="yourName">
          <p>お名前</p>
        </label>
        <MyReactHookInput
          register={register}
          type="text"
          attributeName={'yourName'}
        />
        {errors.yourName && <p>{errors.yourName.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email">
          <p>メールアドレス</p>
        </label>
        <MyReactHookInput
          register={register}
          type="text"
          attributeName={'email'}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password">
          <p>パスワード</p>
        </label>
        <MyReactHookInput
          register={register}
          type="password"
          attributeName={'password'}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};
