import { NavLink, Outlet } from "react-router-dom";
import useIsActive from "../../Hooks/useIsActive";

export default function CMSPage() {
  const { isActiveBtn } = useIsActive();
  return (
    <div>
      <NavLink to='/cms/products' className={isActiveBtn}>
        Products
      </NavLink>
      <NavLink to='/cms/orders' className={isActiveBtn}>
        Orders
      </NavLink>
      <Outlet />
    </div>
  );
}
