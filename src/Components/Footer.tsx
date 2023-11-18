import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <div className='fixed bottom-2 right-2 p-5'>
        <NavLink to='login' className='btn accent lg'>
          LOGIN
        </NavLink>
        <NavLink to='cms' className='btn accent lg'>
          CMS
        </NavLink>
        <Button className='btn primary lg' name='Logout' onClick={() => null} />
      </div>
    </>
  );
}
