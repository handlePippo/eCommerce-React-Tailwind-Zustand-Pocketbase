import { useState } from "react";

export type TextAreaProps = {
  about: string;
  placeholder: string;
};

function TextArea(props: TextAreaProps) {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
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
