import { Poppins } from "next/font/google";

import Header from "../../../components/marketing-page/Header.js";
import Footer from "../../../components/marketing-page/Footer.js";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ThankYouLayout({ children }) {
  return (
    <div
      className={`${poppins.variable} antialiased min-h-svh flex flex-col w-full mx-auto`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
