import { RegisterUser } from '@/types/registerUser';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<RegisterUser>;
  type: string;
  attributeName: keyof RegisterUser;
};

export const MyReactHookInput = (props: Props) => {
  return (
    <>
      <input
        type={props.type}
        className="border rounded"
        {...props.register(props.attributeName)}
      />
    </>
  );
};
