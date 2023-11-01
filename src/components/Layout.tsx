type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className={"overflow-x-hidden min-h-screen"}>{children}</div>
);

export default Layout;
