import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(debounce);
  }, [setIsVisible]);

  return (
    isVisible && (
      <div className='flex w-full justify-center items-center my-4'>
        <i className='fa fa-spinner fa-spin fa-3x fa-fw'></i>
      </div>
    )
  );
}
