import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/Services/";
import { IfLogged, Button } from "@/Components/";

export default function Footer() {
  const navigate = useNavigate();
  const logout = useAuth((s) => s.logout);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return (
    <>
      <div className='fixed bottom-2 right-2 p-5'>
        <NavLink to='cms' className='btn accent lg'>
          CMS
        </NavLink>
        <IfLogged
          else={
            <NavLink to='login' className='btn accent lg'>
              LOGIN
            </NavLink>
          }
        >
          <Button
            className='btn primary lg'
            name='Logout'
            onClick={handleLogout}
          />
        </IfLogged>
      </div>
    </>
  );
}
