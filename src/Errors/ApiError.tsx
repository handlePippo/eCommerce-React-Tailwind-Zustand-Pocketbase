import React from "react";

export type ApiErrorPropsType = {
  text: string;
};

function ApiError(props: ApiErrorPropsType) {
  return (
    <div className='bg-red-800 text-white rounded-xl p-3 my-6'>
      {props.text}
    </div>
  );
}

ApiError.defaultProps = {
  text: "A Server error occurs! Please retry.",
};

export default ApiError;
