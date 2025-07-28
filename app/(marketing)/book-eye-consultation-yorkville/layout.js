import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../../../components/marketing-page/Header.js";
import Footer from "../../../components/marketing-page/Footer.js";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metaTitle = "Book an Eye Consultation in Yorkville, Toronto | Eye Exam";
const metaDescription =
  "Book your eye consultation in Yorkville with 360 Eyecare. Get expert advice, personalized care, and clear vision. Schedule your appointment today!";

export const generateMetadata = () => {
  return {
    title: metaTitle,
    description: metaDescription,
    viewport: "width=device-width, initial-scale=1",
    charSet: "UTF-8",
    openGraph: {
      type: "website",
      url: "https://www.360eyecare.ca/book-eye-consultation-yorkville/",
      title: "Book an Eye Consultation in Yorkville, Toronto | Eye Exam",
      description:
        "Book your eye consultation in Yorkville with 360 Eyecare. Get expert advice, personalized care, and clear vision. Schedule your appointment today!",
    },
  };
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased min-h-svh  flex flex-col  w-full mx-auto`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
