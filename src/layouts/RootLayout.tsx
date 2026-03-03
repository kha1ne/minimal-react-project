import type { FC } from "react";
import { Link, Outlet } from "react-router";

const RootLayout: FC = () => (
  <>
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </>
);

export default RootLayout;
