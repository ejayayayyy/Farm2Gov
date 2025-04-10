import "./globals.css";
import { inter } from "./components/font";

export const metadata = {
  title: "Farm2Gov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
