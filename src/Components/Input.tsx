export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string | number;
  placeholder: string;
  className: string;
  name?: string;
};

function Input(props: InputProps) {
  return (
    <input
      className={props.className}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
    />
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  className: "",
};

export default Input;
