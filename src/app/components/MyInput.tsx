type Props = {
  type: string;
  inputElementProps: React.ComponentProps<'input'>;
};

export const MyInput = (props: Props) => {
  console.log('render child');

  return (
    <div>
      <input
        {...props.inputElementProps}
        className="border-4 rounded border-gray-200"
        type={props.type}
      />
    </div>
  );
};
