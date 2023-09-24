import "@styles/globals.css";

export const metadata = {
  title: "Hotel Assignement",
  description: "Find and Book Your Next Holidays",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
