import Footer from "./components/footer";
import Header from "./components/header";

import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html className="w-full" lang="en">
      <head>
        {/* Default Metadata */}
        <title>Marketing-Agency-Landing-Page</title>
        <meta
          name="description"
          content="Default description for all pages in my website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
