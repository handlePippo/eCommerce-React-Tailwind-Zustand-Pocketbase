import { useState } from "react";

export type InputProps = {
  type: string;
};

function Input(props: InputProps) {
  const [text, setText] = useState("");

  return (
    <form>
      <input
        className='error'
        type={props.type}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
