'use client';
import { registerUserSchema } from '@/schema/registerUserSchema';
import { useState } from 'react';
import { MyInput } from './MyInput';

export const ZodOnlyForm = () => {
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('render parent');

  const handleClick = () => {
    try {
      const ok = registerUserSchema.parse({
        yourName,
        email,
        password,
      });
    } catch (err) {
      console.log('err:', err);
    }
  };

  return (
    <div className="container mx-auto mt-12 text-black mb-12">
      <div className="mb-4">
        <label htmlFor="yourName">
          <p>お名前</p>
        </label>
        <MyInput
          type="text"
          inputElementProps={{
            value: yourName,
            onChange: (e) => setYourName(e.target.value),
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">
          <p>メールアドレス</p>
        </label>
        <MyInput
          type="text"
          inputElementProps={{
            value: email,
            onChange: (e) => setEmail(e.target.value),
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">
          <p>パスワード</p>
        </label>
        <MyInput
          type="password"
          inputElementProps={{
            value: password,
            onChange: (e) => setPassword(e.target.value),
          }}
        />
      </div>
      <button onClick={handleClick} className="bg-gray-100 px-4 py-2 rounded">
        値チェック
      </button>
    </div>
  );
};
