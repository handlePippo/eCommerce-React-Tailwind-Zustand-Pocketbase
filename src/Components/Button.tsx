export type ButtonProps = {
  name: string;
  className: string;
  disabled: boolean;
  onClick: (params: unknown) => unknown;
};

function Button(props: ButtonProps) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  className: "btn outline",
};

export default Button;
