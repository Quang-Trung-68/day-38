import { ROUTES } from "@/routes";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <div>F8 Fullstack</div>
      <nav>
        {ROUTES.map((rou) => {
          return rou.children.map((child, index) => {
            return (
              child.isShowInNav && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                  key={index}
                  to={child.path}
                >
                  {child.title}
                </NavLink>
              )
            );
          });
        })}
      </nav>
    </header>
  );
}
