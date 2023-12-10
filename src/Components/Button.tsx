export type ButtonProps = {
  name: string;
  className: string;
  disabled: boolean;
  type: "button" | "submit";
  onClick?: (params: unknown) => unknown;
};

function Button(props: ButtonProps) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.name}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  className: "btn outline",
  type: "button",
};

export default Button;
