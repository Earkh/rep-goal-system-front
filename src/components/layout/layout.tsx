import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header>
        <h1>Layout</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};
