export type TextAreaProps = {
  value: string;
  about: string;
  name: string;
  className: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className={props.className}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      about={props.about}
    />
  );
}

TextArea.defaultProps = {
  about: "Descrizione",
  placeholder: "Scrivi un messaggio..",
};

export default TextArea;
