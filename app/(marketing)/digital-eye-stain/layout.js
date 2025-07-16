import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../../../components/marketing-page/Header.js";
import Footer from "../../../components/marketing-page/Footer.js";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Digital Eye Stain",
  description: "Digital Eye Stain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased min-h-svh flex flex-col  w-full mx-auto`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
