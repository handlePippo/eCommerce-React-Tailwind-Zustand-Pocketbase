export type ApiErrorPropsType = {
  error?: string;
};

function ApiError(props: ApiErrorPropsType) {
  return (
    <div className='bg-red-800 text-white rounded-xl p-3 my-6'>
      {props.error}
    </div>
  );
}

ApiError.defaultProps = {
  error: "A Server error occurs! Please retry.",
};

export default ApiError;
