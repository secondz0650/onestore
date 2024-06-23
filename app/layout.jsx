import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Onestore",
  description: "Discover and Share Automated Generated Meals",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
